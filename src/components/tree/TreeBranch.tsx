// Enhanced recursive tree branch with connecting lines

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TreeNode } from "./TreeNode";
import { EASE_OUT, TIMING } from "@/constants";
import type { TreeNode as TreeNodeType } from "@/types";

interface TreeBranchProps {
  node: TreeNodeType;
  isExpanded: (id: string) => boolean;
  isSelected: (id: string) => boolean;
  isMatch?: (id: string) => boolean;
  searchQuery?: string;
  onToggleExpand: (id: string) => void;
  onSelect: (id: string) => void;
  depth?: number;
  isLast?: boolean;
}

const branchVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: EASE_OUT,
  },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: {
      ...EASE_OUT,
      staggerChildren: TIMING.stagger,
    },
  },
};

const childVariants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: { opacity: 1, x: 0 },
};

export function TreeBranch({
  node,
  isExpanded,
  isSelected,
  isMatch,
  searchQuery,
  onToggleExpand,
  onSelect,
  depth = 0,
}: TreeBranchProps) {
  const expanded = isExpanded(node.id);
  const hasChildren = Boolean(node.children?.length);

  return (
    <motion.div
      className='flex items-start gap-3'
      variants={childVariants}
      initial='collapsed'
      animate='expanded'
    >
      {/* Node */}
      <TreeNode
        node={node}
        isExpanded={expanded}
        isSelected={isSelected(node.id)}
        isMatch={isMatch?.(node.id)}
        searchQuery={searchQuery}
        onToggleExpand={() => onToggleExpand(node.id)}
        onSelect={() => onSelect(node.id)}
      />

      {/* Children Branch */}
      <AnimatePresence mode='wait'>
        {hasChildren && expanded && (
          <motion.div
            key={`children-${node.id}`}
            variants={branchVariants}
            initial='collapsed'
            animate='expanded'
            exit='collapsed'
            className='flex flex-col gap-2 relative pl-4'
          >
            {/* Connecting Line */}
            <div
              className='absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-500/50 to-slate-600/30'
              style={{ marginTop: 18, marginBottom: 18 }}
            />

            {node.children!.map((child, index) => (
              <motion.div
                key={child.id}
                className='relative'
                variants={childVariants}
              >
                {/* Horizontal connector */}
                <div
                  className='absolute left-0 top-4 w-4 h-px bg-slate-500/50'
                  style={{ marginLeft: -16 }}
                />

                <TreeBranch
                  node={child}
                  isExpanded={isExpanded}
                  isSelected={isSelected}
                  isMatch={isMatch}
                  searchQuery={searchQuery}
                  onToggleExpand={onToggleExpand}
                  onSelect={onSelect}
                  depth={depth + 1}
                  isLast={index === node.children!.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
