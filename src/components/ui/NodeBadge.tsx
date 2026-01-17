// Node badge component for type indicators

"use client";

import { cn } from "@/lib/utils";
import { NODE_COLORS } from "@/constants/colors";
import { NODE_TYPE_LABELS, type NodeType } from "@/constants/node-types";

interface NodeBadgeProps {
  type: NodeType;
  isDraft?: boolean;
  showLabel?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function NodeBadge({
  type,
  isDraft = false,
  showLabel = true,
  size = "md",
  className,
}: NodeBadgeProps) {
  const colors = NODE_COLORS[type];
  const label = NODE_TYPE_LABELS[type];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        size === "sm" ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]",
        "bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 font-black uppercase tracking-widest leading-none",
        isDraft && "opacity-40 border-dashed bg-transparent",
        className,
      )}
    >
      <span
        className={cn(
          "rounded-full",
          size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2",
          colors.bg,
        )}
      />
      {showLabel && (
        <span className={cn(colors.text, "brightness-125")}>
          {label}
          {isDraft && <span className='opacity-40 ml-1'>Draft</span>}
        </span>
      )}
    </div>
  );
}
