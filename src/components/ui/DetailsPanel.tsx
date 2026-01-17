"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Info,
  Settings,
  Trash2,
  Link as LinkIcon,
  Database,
} from "lucide-react";
import { Button } from "./button";
import type { TreeNode } from "@/types";
import { NODE_COLORS } from "@/constants/colors";
import { cn } from "@/lib/utils";

interface DetailsPanelProps {
  node: TreeNode | null;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export function DetailsPanel({ node, onClose, onDelete }: DetailsPanelProps) {
  if (!node) return null;

  const colors = NODE_COLORS[node.type];

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className='fixed top-20 right-0 bottom-0 w-80 z-40 border-l border-white/5 bg-background/50 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col'
        >
          {/* Header */}
          <div className='p-6 border-b border-white/5 flex items-center justify-between'>
            <h2 className='font-semibold text-lg flex items-center gap-2'>
              <Info className='w-4 h-4 text-primary' />
              Node Details
            </h2>
            <Button
              variant='ghost'
              size='icon'
              onClick={onClose}
              className='rounded-full'
            >
              <X className='w-4 h-4' />
            </Button>
          </div>

          {/* Content */}
          <div className='flex-1 overflow-auto p-6 space-y-8'>
            {/* Title & Type */}
            <div className='space-y-4'>
              <div
                className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                  colors.bg,
                  colors.text,
                )}
              >
                {node.type}
              </div>
              <h3 className='text-2xl font-bold leading-tight'>{node.name}</h3>
              <p className='text-sm text-muted-foreground'>
                ID: <span className='font-mono text-xs'>{node.id}</span>
              </p>
            </div>

            {/* Metadata Section */}
            <div className='space-y-4'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2'>
                <Database className='w-3 h-3' />
                Specifications
              </h4>
              <div className='grid gap-3'>
                {Object.entries(node.metadata || {}).length > 0 ?
                  Object.entries(node.metadata!).map(([key, value]) => (
                    <div
                      key={key}
                      className='p-3 rounded-xl bg-white/5 border border-white/5 space-y-1'
                    >
                      <div className='text-[10px] text-muted-foreground uppercase'>
                        {key}
                      </div>
                      <div className='text-sm font-medium'>{String(value)}</div>
                    </div>
                  ))
                : <div className='text-sm italic text-muted-foreground'>
                    No metadata available.
                  </div>
                }
              </div>
            </div>

            {/* Stats / Relations */}
            <div className='space-y-4'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2'>
                <Settings className='w-3 h-3' />
                Hierarchy
              </h4>
              <div className='p-4 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between'>
                <span className='text-sm font-medium'>Children</span>
                <span className='text-sm text-primary font-bold'>
                  {node.children?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className='p-6 border-t border-white/5 grid grid-cols-2 gap-3 bg-white/[0.02]'>
            <Button variant='outline' size='sm' className='gap-2'>
              <LinkIcon className='w-4 h-4' />
              Copy Link
            </Button>
            <Button
              variant='destructive'
              size='sm'
              className='gap-2'
              onClick={() => onDelete?.(node.id)}
            >
              <Trash2 className='w-4 h-4' />
              Delete
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
