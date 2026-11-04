import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 overflow-hidden border border-border text-foreground transition-colors duration-200 hover:border-rule hover:bg-accent"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Paper (light)" : "Blueprint (dark)"}
    >
      <Sun
        strokeWidth={1.5}
        className={`absolute inset-0 m-auto h-[18px] w-[18px] transition-transform duration-500 ease-out-expo ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
      <Moon
        strokeWidth={1.5}
        className={`absolute inset-0 m-auto h-[18px] w-[18px] transition-transform duration-500 ease-out-expo ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
    </button>
  );
}
