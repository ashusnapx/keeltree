// Keyboard navigation hook for tree

"use client";

import { useEffect, useCallback } from "react";
import type { TreeNode } from "@/types";
import { FEATURES } from "@/config";

interface UseKeyboardNavProps {
  root: TreeNode | null;
  focusedId: string | null;
  expandedIds: Set<string>;
  onFocus: (id: string | null) => void;
  onToggleExpand: (id: string) => void;
  onSelect: (id: string) => void;
}

export function useKeyboardNav({
  root,
  focusedId,
  expandedIds,
  onFocus,
  onToggleExpand,
  onSelect,
}: UseKeyboardNavProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!FEATURES.enableKeyboardNav || !root || !focusedId) return;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          onToggleExpand(focusedId);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (expandedIds.has(focusedId)) {
            onToggleExpand(focusedId);
          }
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          onSelect(focusedId);
          break;
        case "Escape":
          e.preventDefault();
          onFocus(null);
          break;
      }
    },
    [root, focusedId, expandedIds, onFocus, onToggleExpand, onSelect],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
