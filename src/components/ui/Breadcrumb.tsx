// Breadcrumb path component

"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TreePath } from "@/types";

interface BreadcrumbProps {
  path: TreePath[];
  onNavigate?: (id: string) => void;
  className?: string;
}

export function Breadcrumb({ path, onNavigate, className }: BreadcrumbProps) {
  if (!path.length) return null;

  return (
    <nav className={cn("flex items-center gap-1 text-sm", className)}>
      {path.map((item, index) => (
        <div key={item.id} className='flex items-center gap-1'>
          {index > 0 && (
            <ChevronRight className='h-3 w-3 text-muted-foreground' />
          )}
          {index < path.length - 1 ?
            <button
              onClick={() => onNavigate?.(item.id)}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              {item.name}
            </button>
          : <span className='text-primary font-medium'>{item.name}</span>}
        </div>
      ))}
    </nav>
  );
}
