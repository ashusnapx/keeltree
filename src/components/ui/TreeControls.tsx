// Tree controls for expand all / collapse all

"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { UI_STRINGS } from "@/messages";

interface TreeControlsProps {
  onExpandAll: () => void;
  onCollapseAll: () => void;
  className?: string;
}

export function TreeControls({
  onExpandAll,
  onCollapseAll,
  className,
}: TreeControlsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant='outline'
        size='sm'
        onClick={onExpandAll}
        className='gap-1.5 text-xs'
      >
        <ChevronDown className='h-3.5 w-3.5' />
        {UI_STRINGS.tree.expandAll}
      </Button>
      <Button
        variant='outline'
        size='sm'
        onClick={onCollapseAll}
        className='gap-1.5 text-xs'
      >
        <ChevronUp className='h-3.5 w-3.5' />
        {UI_STRINGS.tree.collapseAll}
      </Button>
    </div>
  );
}
