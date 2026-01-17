// Header component with breadcrumb path

"use client";

import { ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  pathItems?: string[];
  currentPage?: string;
  onMenuClick?: () => void;
}

export function Header({
  pathItems = ["Fleet management", "Sagar Kanya"],
  currentPage = "Vessel Hierarchy Tree",
  onMenuClick,
}: HeaderProps) {
  return (
    <header className='flex h-14 items-center border-b border-border/50 px-4 md:px-6 gap-4'>
      <Button
        variant='ghost'
        size='icon'
        className='md:hidden'
        onClick={onMenuClick}
      >
        <Menu className='h-5 w-5' />
      </Button>

      <nav className='flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide'>
        {pathItems.map((item, index) => (
          <div key={item} className='flex items-center gap-2'>
            <span className='text-muted-foreground hover:text-foreground cursor-pointer transition-colors'>
              {item}
            </span>
            <ChevronRight className='h-3.5 w-3.5 text-muted-foreground shrink-0' />
          </div>
        ))}
        <span className='font-medium text-primary shrink-0'>{currentPage}</span>
      </nav>
    </header>
  );
}
