import { PointerEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  FileCheck2,
  FileWarning,
  Minus,
  Plus,
  RotateCw,
  ShieldCheck,
  X,
} from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PartTags, TitleBlock } from "@/components/drawing/Sheet";
import { formatLabel, preloadDocument, type ViewerDocument } from "@/lib/documents";
import { cn } from "@/lib/utils";

const ZOOM_STEPS = [1, 1.5, 2, 3];
const LOAD_TIMEOUT_MS = 15000;
/** Breathing room around the page inside the stage, in px (matches `p-4`) */
const STAGE_PAD = 16;

type LoadStatus = "loading" | "ready" | "error" | "timeout";
type FileState = "checking" | "available" | "missing" | "unknown";

const toolButton =
  "inline-flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 items-center justify-center border border-border text-foreground transition-colors duration-200 hover:border-rule hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-40";

const lineAction =
  "group inline-flex min-h-11 items-center gap-2 border border-rule px-4 py-2 text-sm font-semibold text-foreground transition-[background-color,color,transform] duration-300 ease-out-expo hover:bg-foreground hover:text-background active:scale-[0.98]";

/** Checks the original file once per opening, so a missing file never offers a dead link. */
function useFileState(src: string) {
  const [state, setState] = useState<FileState>("checking");

  useEffect(() => {
    if (typeof fetch === "undefined") {
      setState("unknown");
      return;
    }
    const controller = new AbortController();
    setState("checking");
    fetch(src, { method: "HEAD", signal: controller.signal })
      .then((res) => {
        // A single-page host answers unknown paths with index.html, which is not the document
        const type = res.headers.get("content-type") ?? "";
        setState(res.ok && !type.includes("text/html") ? "available" : "missing");
      })
      .catch(() => {
        if (!controller.signal.aborted) setState("unknown");
      });
    return () => controller.abort();
  }, [src]);

  return state;
}

function StageMessage({
  title,
  body,
  doc,
  fileState,
  onRetry,
}: {
  title: string;
  body: string;
  doc: ViewerDocument;
  fileState: FileState;
  onRetry?: () => void;
}) {
  return (
    <div role="alert" className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-sm border border-rule bg-card p-5 text-left">
        <FileWarning className="h-5 w-5 text-destructive" strokeWidth={1.5} aria-hidden />
        <p className="mt-3 text-base font-semibold text-foreground">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {onRetry && (
            <button type="button" onClick={onRetry} className={lineAction}>
              <RotateCw className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Try again
            </button>
          )}
          {fileState !== "missing" && (
            <a href={doc.src} target="_blank" rel="noopener noreferrer" className={lineAction}>
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Open original
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Stage({
  doc,
  zoom,
  onToggleZoom,
  fileState,
}: {
  doc: ViewerDocument;
  zoom: number;
  onToggleZoom: () => void;
  fileState: FileState;
}) {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [attempt, setAttempt] = useState(0);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const center = useRef({ x: 0.5, y: 0.5 });
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);

  // Measure the stage so the page can be fitted, then scaled by the zoom factor
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keep the point under the centre of the stage in place while zooming
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = center.current.x * el.scrollWidth - el.clientWidth / 2;
    el.scrollTop = center.current.y * el.scrollHeight - el.clientHeight / 2;
  }, [zoom, box]);

  // Never spin forever: a slow or stalled request becomes a recoverable state
  useEffect(() => {
    if (status !== "loading") return;
    const timer = window.setTimeout(() => setStatus("timeout"), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [status, attempt]);

  const fit = box
    ? Math.min((box.w - STAGE_PAD * 2) / doc.width, (box.h - STAGE_PAD * 2) / doc.height)
    : null;
  const size =
    fit && fit > 0 ? { width: Math.round(doc.width * fit * zoom), height: Math.round(doc.height * fit * zoom) } : null;

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el || !el.scrollWidth) return;
    center.current = {
      x: (el.scrollLeft + el.clientWidth / 2) / el.scrollWidth,
      y: (el.scrollTop + el.clientHeight / 2) / el.scrollHeight,
    };
  };

  // Mouse users pan a zoomed page by dragging; touch keeps native scrolling
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || event.pointerType !== "mouse" || zoom === 1) return;
    drag.current = { x: event.clientX, y: event.clientY, left: el.scrollLeft, top: el.scrollTop };
    el.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
    el.scrollTop = drag.current.top - (event.clientY - drag.current.y);
  };
  const endDrag = () => {
    drag.current = null;
  };

  const retry = () => {
    setStatus("loading");
    setAttempt((n) => n + 1);
  };

  if (status === "error" || status === "timeout") {
    const missing = fileState === "missing";
    return (
      <StageMessage
        doc={doc}
        fileState={fileState}
        onRetry={missing ? undefined : retry}
        title={
          missing ? "Document unavailable" : status === "timeout" ? "The preview is taking too long" : "Preview unavailable"
        }
        body={
          missing
            ? "This file could not be found on the server. Please get in touch and I will send a copy."
            : status === "timeout"
              ? "The connection seems slow. Try again, or open the original file directly."
              : "The preview could not be displayed. Try again, or open the original file directly."
        }
      />
    );
  }

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={onToggleZoom}
      className={cn(
        "absolute inset-0 overflow-auto overscroll-contain",
        zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
      )}
    >
      <div className="flex min-h-full min-w-full w-max p-4">
        <div
          className="relative m-auto shrink-0 border border-border bg-card"
          style={size ?? { width: "100%", aspectRatio: `${doc.width} / ${doc.height}` }}
        >
          {status === "loading" && (
            <div aria-hidden className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-muted/70" />
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center lettering text-[11px] text-muted-foreground">
                Loading document
              </span>
            </div>
          )}
          <img
            key={attempt}
            ref={(img) => {
              // A cached image can finish before React attaches the load listener
              if (img?.complete && img.naturalWidth > 0 && status === "loading") setStatus("ready");
            }}
            src={attempt ? `${doc.preview}?retry=${attempt}` : doc.preview}
            alt={doc.alt}
            width={doc.width}
            height={doc.height}
            decoding="async"
            draggable={false}
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("error")}
            className={cn(
              "relative block h-full w-full select-none transition-opacity duration-300 ease-out-expo",
              status === "ready" ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "loading" ? "Loading document" : "Document loaded"}
      </p>
    </div>
  );
}

function CopyId({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <span className="flex items-start justify-between gap-2">
      <span className="min-w-0 break-all font-normal tabular-nums">{value}</span>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(value).then(
            () => setCopied(true),
            () => setCopied(false),
          );
        }}
        className="-my-1 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
        aria-label={copied ? "Credential ID copied" : "Copy credential ID"}
      >
        {copied ? <Check className="h-3.5 w-3.5" strokeWidth={2} /> : <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />}
      </button>
    </span>
  );
}

function Details({ doc, fileState }: { doc: ViewerDocument; fileState: FileState }) {
  const unavailable = fileState === "missing";
  const kind = formatLabel(doc);

  return (
    <aside
      aria-label="Document details"
      className="shrink-0 border-t border-rule lg:w-[22rem] lg:overflow-y-auto lg:border-l lg:border-t-0"
    >
      <div className="flex flex-wrap gap-2 p-4 sm:p-5">
        {doc.verifyUrl && (
          <a href={doc.verifyUrl} target="_blank" rel="noopener noreferrer" className={lineAction}>
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            Verify credential
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        {unavailable ? (
          <p className="text-sm text-muted-foreground">The original file is currently unavailable.</p>
        ) : (
          <>
            <a href={doc.src} target="_blank" rel="noopener noreferrer" className={lineAction}>
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Open {doc.format === "pdf" ? "PDF" : "original"}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href={doc.src} download className={lineAction}>
              <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              Download
            </a>
          </>
        )}
      </div>

      <TitleBlock
        className="grid-cols-2 border-l-0"
        cells={[
          { label: "Issuer", value: doc.issuer, className: "col-span-2" },
          doc.issued
            ? { label: "Issued", value: <span className="tabular-nums">{doc.issued}</span> }
            : { label: "Period", value: <span className="tabular-nums">{doc.period}</span> },
          { label: "Format", value: kind },
          ...(doc.credentialId
            ? [{ label: "Credential ID", value: <CopyId value={doc.credentialId} />, className: "col-span-2" }]
            : []),
        ]}
      />

      {(doc.description || doc.skills) && (
        <div className="space-y-4 p-4 sm:p-5">
          {doc.description && <p className="text-[15px] leading-relaxed text-foreground">{doc.description}</p>}
          {doc.skills && <PartTags items={doc.skills} label="Skills covered" />}
        </div>
      )}
    </aside>
  );
}

function Viewer({
  doc,
  position,
  total,
  onStep,
}: {
  doc: ViewerDocument;
  position: number;
  total: number;
  onStep: (delta: number) => void;
}) {
  const [zoomIndex, setZoomIndex] = useState(0);
  const fileState = useFileState(doc.src);
  const zoom = ZOOM_STEPS[zoomIndex];

  // Each document opens fitted to the stage
  useEffect(() => setZoomIndex(0), [doc.id]);

  const setZoom = useCallback((next: number) => {
    setZoomIndex(Math.max(0, Math.min(ZOOM_STEPS.length - 1, next)));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "+" || event.key === "=") setZoom(zoomIndex + 1);
      else if (event.key === "-") setZoom(zoomIndex - 1);
      else if (event.key === "0") setZoom(0);
      else if (event.key === "ArrowRight" && total > 1 && zoomIndex === 0) onStep(1);
      else if (event.key === "ArrowLeft" && total > 1 && zoomIndex === 0) onStep(-1);
      else return;
      event.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomIndex, total, onStep, setZoom]);

  return (
    <>
      <div className="flex items-start justify-between gap-3 border-b border-rule px-4 py-3 sm:px-5">
        <div className="min-w-0 pt-0.5">
          <DialogPrimitive.Description className="lettering text-[11px] text-primary">
            {doc.issuer}
            <span className="text-muted-foreground"> · {doc.issued ?? doc.period}</span>
          </DialogPrimitive.Description>
          <DialogPrimitive.Title className="mt-1 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
            {doc.title}
          </DialogPrimitive.Title>
        </div>
        <DialogPrimitive.Close
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-foreground text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground sm:h-10 sm:w-10"
          aria-label="Close document viewer"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </DialogPrimitive.Close>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
        <div className="flex h-[62dvh] shrink-0 flex-col sm:h-[64dvh] lg:h-auto lg:min-w-0 lg:flex-1">
          <div className="relative min-h-0 flex-1 bg-muted">
            <ErrorBoundary
              key={doc.id}
              fallback={
                <StageMessage
                  doc={doc}
                  fileState={fileState}
                  title="Preview unavailable"
                  body="Something went wrong while displaying this document. Open the original file instead."
                />
              }
            >
              <Stage key={doc.id} doc={doc} zoom={zoom} fileState={fileState} onToggleZoom={() => setZoom(zoomIndex === 0 ? 2 : 0)} />
            </ErrorBoundary>
          </div>

          {/* Toolbar: zoom on the left, document navigation on the right */}
          <div className="flex items-center justify-between gap-2 border-t border-border bg-card px-3 py-2 sm:px-4">
            <div className="flex items-center gap-1.5" role="group" aria-label="Zoom">
              <button type="button" className={toolButton} onClick={() => setZoom(zoomIndex - 1)} disabled={zoomIndex === 0} aria-label="Zoom out">
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => setZoom(0)}
                disabled={zoomIndex === 0}
                className="inline-flex h-11 min-w-[4.25rem] items-center justify-center border border-border px-2 text-sm font-medium tabular-nums text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background disabled:pointer-events-none sm:h-10"
                aria-label={zoomIndex === 0 ? "Fitted to view" : `Zoom ${zoom * 100}%, reset to fit`}
              >
                {zoomIndex === 0 ? "Fit" : `${zoom * 100}%`}
              </button>
              <button
                type="button"
                className={toolButton}
                onClick={() => setZoom(zoomIndex + 1)}
                disabled={zoomIndex === ZOOM_STEPS.length - 1}
                aria-label="Zoom in"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            {total > 1 && (
              <div className="flex items-center gap-1.5" role="group" aria-label="Documents">
                <button type="button" className={toolButton} onClick={() => onStep(-1)} aria-label="Previous document">
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <span className="min-w-[3.25rem] text-center text-sm tabular-nums text-muted-foreground" aria-live="polite">
                  {position + 1}
                  <span aria-hidden> / </span>
                  <span className="sr-only"> of </span>
                  {total}
                </span>
                <button type="button" className={toolButton} onClick={() => onStep(1)} aria-label="Next document">
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            )}
          </div>
        </div>

        <Details doc={doc} fileState={fileState} />
      </div>
    </>
  );
}

/**
 * Modal viewer for documents on file. Only the open document's preview is requested, and only
 * when the viewer opens. Radix provides the focus trap, scroll lock, Escape and focus return.
 */
export function DocumentViewer({
  documents,
  index,
  onIndexChange,
}: {
  documents: ViewerDocument[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  // Keep the last document on screen while the dialog animates closed
  const [shown, setShown] = useState(index ?? 0);
  useEffect(() => {
    if (index !== null) setShown(index);
  }, [index]);

  // Opened from state rather than a Dialog.Trigger, so the opener is remembered here
  const opener = useRef<HTMLElement | null>(null);

  const current = index ?? shown;
  const doc = documents[current];

  const step = useCallback(
    (delta: number) => {
      const next = (current + delta + documents.length) % documents.length;
      preloadDocument(documents[(next + delta + documents.length) % documents.length]);
      onIndexChange(next);
    },
    [current, documents, onIndexChange],
  );

  return (
    <DialogPrimitive.Root open={index !== null} onOpenChange={(open) => !open && onIndexChange(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[hsl(216_22%_9%/0.6)] dark:bg-[hsl(218_70%_5%/0.72)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-300" />
        <DialogPrimitive.Content
          onOpenAutoFocus={() => {
            opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus({ preventScroll: true });
          }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col bg-background outline-none",
            "sm:inset-auto sm:left-1/2 sm:top-1/2 sm:h-[min(92dvh,900px)] sm:w-[min(94vw,1200px)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border sm:border-rule",
            "sm:shadow-[0_24px_60px_-20px_hsl(var(--foreground)/0.35)]",
            "duration-300 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.98]",
          )}
        >
          {doc && <Viewer doc={doc} position={current} total={documents.length} onStep={step} />}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/** The ruled button that opens a document, warming its preview on intent. */
export function DocumentTrigger({
  doc,
  onOpen,
  label = "View certificate",
  caption,
  className,
}: {
  doc: ViewerDocument;
  onOpen: () => void;
  label?: string;
  caption?: string;
  className?: string;
}) {
  const warm = () => preloadDocument(doc);
  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerEnter={warm}
      onFocus={warm}
      aria-haspopup="dialog"
      className={cn(
        "group flex w-full items-center gap-3 border border-rule p-3 text-left transition-[background-color,color,transform] duration-200 hover:bg-foreground hover:text-background active:scale-[0.99]",
        className,
      )}
    >
      <FileCheck2 className="h-5 w-5 shrink-0 text-primary group-hover:text-background" strokeWidth={1.5} aria-hidden />
      <span className="min-w-0">
        <span className="block text-sm font-semibold">
          {label}
          <span className="sr-only">: {doc.title}, {doc.issuer}</span>
        </span>
        {caption && (
          <span className="block text-xs text-muted-foreground group-hover:text-background/75">{caption}</span>
        )}
      </span>
    </button>
  );
}
