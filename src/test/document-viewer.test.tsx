import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Certifications } from "@/components/sections/Certifications";

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

function mockFetch(contentType: string, ok = true) {
  return vi.fn().mockResolvedValue({ ok, headers: new Headers({ "content-type": contentType }) });
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", NoopObserver);
  vi.stubGlobal("ResizeObserver", NoopObserver);
  vi.stubGlobal("fetch", mockFetch("application/pdf"));
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

const openFirst = () => {
  render(<Certifications />);
  fireEvent.click(screen.getAllByRole("button", { name: /^View/ })[0]);
  return screen.getByRole("dialog");
};

describe("certificate viewer", () => {
  it("opens only on demand, with the certificate's details", () => {
    render(<Certifications />);
    expect(document.querySelector("img")).toBeNull();

    fireEvent.click(screen.getAllByRole("button", { name: /^View/ })[0]);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("heading", { name: "Generative AI with Diffusion Models" })).toBeInTheDocument();
    expect(within(dialog).getByText("TauXuWfURMOBYNutOVkopw")).toBeInTheDocument();
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", "/certifs/previews/Certificate-Of-Competency-NVIDIA.webp");
    expect(within(dialog).getByRole("link", { name: /Download/ })).toHaveAttribute(
      "href",
      "/certifs/Certificate-Of-Competency-NVIDIA.png",
    );
  });

  it("steps between certificates and closes on Escape", async () => {
    const dialog = openFirst();
    fireEvent.click(within(dialog).getByRole("button", { name: "Next document" }));
    expect(within(dialog).getByRole("heading", { name: "AWS Academy Graduate: Cloud Foundations" })).toBeInTheDocument();
    expect(within(dialog).getByRole("link", { name: /Verify credential/ })).toHaveAttribute(
      "href",
      "https://www.credly.com/go/40uyjxEs",
    );

    fireEvent.keyDown(dialog, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });

  it("returns focus to the button that opened it", async () => {
    render(<Certifications />);
    const trigger = screen.getAllByRole("button", { name: /^View/ })[1];
    trigger.focus();
    fireEvent.click(trigger);
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(trigger).toHaveFocus();
  });

  it("falls back to the original file when the preview fails", () => {
    const dialog = openFirst();
    fireEvent.error(within(dialog).getByRole("img"));
    expect(within(dialog).getByRole("alert")).toHaveTextContent("Preview unavailable");
    expect(within(dialog).getAllByRole("link", { name: /Open original/ })[0]).toHaveAttribute(
      "href",
      "/certifs/Certificate-Of-Competency-NVIDIA.png",
    );
    fireEvent.click(within(dialog).getByRole("button", { name: /Try again/ }));
    expect(within(dialog).getByRole("img")).toBeInTheDocument();
  });

  it("stops loading after a timeout instead of spinning forever", () => {
    vi.useFakeTimers();
    const dialog = openFirst();
    act(() => {
      vi.advanceTimersByTime(16000);
    });
    expect(within(dialog).getByRole("alert")).toHaveTextContent("taking too long");
  });

  it("withholds dead links when the original file is missing", async () => {
    vi.stubGlobal("fetch", mockFetch("text/html"));
    const dialog = openFirst();
    await waitFor(() => expect(within(dialog).getByText(/currently unavailable/)).toBeInTheDocument());
    expect(within(dialog).queryByRole("link", { name: /Download/ })).toBeNull();
  });
});
