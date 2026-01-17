// Enhanced search bar with active filter badge

"use client";

import { Search, X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { UI_STRINGS } from "@/messages";
import { Input } from "./input";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  resultCount?: number;
}

export function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = UI_STRINGS.search.placeholder,
  className,
  resultCount,
}: SearchBarProps) {
  const hasValue = value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
      <Input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "pl-10 pr-20 h-10",
          "bg-white/5 border-white/10",
          "backdrop-blur-md rounded-lg",
          "placeholder:text-muted-foreground/50",
          "focus:bg-white/10 focus:border-primary/50",
          "transition-all duration-200",
        )}
      />

      <AnimatePresence>
        {hasValue && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1'
          >
            {resultCount !== undefined && (
              <span className='text-xs text-primary font-medium px-1.5 py-0.5 bg-primary/10 rounded'>
                {resultCount} {resultCount === 1 ? "result" : "results"}
              </span>
            )}
            <button
              onClick={onClear}
              className='p-1 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors'
            >
              <X className='h-3.5 w-3.5' />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
