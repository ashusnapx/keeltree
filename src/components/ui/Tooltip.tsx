"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  disabled?: boolean;
}

export function Tooltip({
  content,
  children,
  side = "right",
  className,
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x:
        side === "right" ? -10
        : side === "left" ? 10
        : 0,
      y:
        side === "bottom" ? -10
        : side === "top" ? 10
        : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className='relative flex items-center'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
            className={cn(
              "absolute z-[110] px-3 py-1.5 rounded-lg bg-foreground text-background text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shadow-xl pointer-events-none",
              positionClasses[side],
              className,
            )}
          >
            {content}
            {/* Arrow */}
            <div
              className={cn(
                "absolute w-2 h-2 bg-foreground rotate-45",
                side === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                side === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                side === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                side === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
