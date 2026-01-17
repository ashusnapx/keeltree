// Zoom controls component

"use client";

import { Plus, Minus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { TOOLTIPS } from "@/messages";
import { LAYOUT } from "@/constants";

interface ZoomControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitToScreen: () => void;
  className?: string;
}

export function ZoomControls({
  zoom,
  onZoomIn,
  onZoomOut,
  onFitToScreen,
  className,
}: ZoomControlsProps) {
  const canZoomIn = zoom < LAYOUT.maxZoom;
  const canZoomOut = zoom > LAYOUT.minZoom;

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg bg-background/80 backdrop-blur-sm",
        "border border-border/50 p-1",
        className,
      )}
    >
      <Button
        variant='ghost'
        size='icon'
        onClick={onZoomIn}
        disabled={!canZoomIn}
        title={TOOLTIPS.zoom.in}
        className='h-8 w-8'
      >
        <Plus className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={onZoomOut}
        disabled={!canZoomOut}
        title={TOOLTIPS.zoom.out}
        className='h-8 w-8'
      >
        <Minus className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={onFitToScreen}
        title={TOOLTIPS.zoom.fit}
        className='h-8 w-8'
      >
        <Maximize2 className='h-4 w-4' />
      </Button>
    </div>
  );
}
