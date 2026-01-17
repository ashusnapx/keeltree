// Glassmorphic panel component

import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

export function GlassPanel({
  children,
  className,
  variant = "dark",
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border backdrop-blur-xl",
        variant === "dark" ?
          "bg-white/5 border-white/10"
        : "bg-black/5 border-black/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
