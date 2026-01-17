// Enhanced individual tree node component with better interactivity

"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { NODE_COLORS } from "@/constants/colors";
import { NODE_VARIANTS, EASE_OUT } from "@/constants";
import type { TreeNode as TreeNodeType } from "@/types";
import { hasChildren } from "@/lib/tree-utils";
import { getMatchIndices } from "@/lib/search-utils";

interface TreeNodeProps {
  node: TreeNodeType;
  isExpanded: boolean;
  isSelected: boolean;
  isMatch?: boolean;
  searchQuery?: string;
  onToggleExpand: () => void;
  onSelect: () => void;
}

function HighlightedText({ text, query }: { text: string; query?: string }) {
  if (!query) return <span>{text}</span>;

  const indices = getMatchIndices(text, query);
  if (indices.length === 0) return <span>{text}</span>;

  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={
            indices.includes(i) ? "bg-yellow-400/40 text-yellow-200" : ""
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export function TreeNode({
  node,
  isExpanded,
  isSelected,
  isMatch,
  searchQuery,
  onToggleExpand,
  onSelect,
}: TreeNodeProps) {
  const showExpandButton = hasChildren(node);

  const colors = NODE_COLORS[node.type];

  return (
    <motion.div
      variants={NODE_VARIANTS}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={EASE_OUT}
      whileHover={{ scale: 1.02, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center gap-3 rounded-xl px-4 py-2.5",
        "cursor-pointer select-none transition-all duration-300",
        "border border-white/10",
        isSelected ? "bg-white text-black border-white"
        : isMatch ?
          "bg-white/10 text-white border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        : "bg-white/[0.02] text-white/70 hover:bg-white/[0.05] hover:text-white hover:border-white/20",
        node.isDraft && "opacity-50 border-dashed",
      )}
      onClick={onSelect}
    >
      {/* Type Marker */}
      {!isSelected && (
        <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", colors.bg)} />
      )}

      <span className='text-[11px] font-black uppercase tracking-tight whitespace-nowrap'>
        <HighlightedText
          text={node.name}
          query={isMatch ? searchQuery : undefined}
        />
      </span>

      {showExpandButton && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleExpand();
          }}
          className={cn(
            "ml-2 flex h-4 w-4 items-center justify-center rounded-lg transition-colors border",
            isSelected ?
              "bg-black/10 border-black/20 text-black"
            : "bg-white/5 border-white/10 text-white/40 hover:text-white",
          )}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Plus
              className={cn("h-2.5 w-2.5", isExpanded && "hidden")}
              strokeWidth={4}
            />
            <Minus
              className={cn("h-2.5 w-2.5", !isExpanded && "hidden")}
              strokeWidth={4}
            />
          </motion.div>
        </motion.button>
      )}
    </motion.div>
  );
}
