"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/Tooltip";
import {
  LayoutDashboard,
  Wrench,
  Package,
  Clock,
  FileText,
  Library,
  Calendar,
  Users,
  BarChart3,
  Ship,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard/overview" },
  { icon: Ship, label: "Fleet Management", href: "/dashboard" },
  { icon: Wrench, label: "Maintenance", href: "/dashboard/maintenance" },
  { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
  { icon: Clock, label: "Running Hrs", href: "/dashboard/running-hrs" },
  { icon: FileText, label: "Summary", href: "/dashboard/summary" },
  { icon: Library, label: "Library", href: "/dashboard/library" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Users, label: "Users", href: "/dashboard/users" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ width: 72 }}
      animate={{ width: isHovered ? 260 : 72 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={cn(
        "flex h-full flex-col border-r border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-3xl z-50 transition-colors",
        className,
      )}
    >
      <div className='h-20 overflow-hidden relative' />

      <nav className='flex-1 space-y-1.5 px-3 overflow-y-auto overflow-x-visible relative z-10 no-scrollbar'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Tooltip
              key={item.label}
              content={item.label}
              side='right'
              disabled={isHovered}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex w-full items-center gap-4 rounded-2xl px-3 py-2.5 text-xs font-bold uppercase tracking-tight transition-all relative group",
                  isActive ?
                    "bg-black/[0.08] dark:bg-white/[0.08] text-foreground"
                  : "text-foreground/40 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:text-foreground/70",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId='activePointer'
                    className='absolute left-0 w-1 h-5 bg-foreground rounded-r-full'
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}

                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-all group-hover:scale-110",
                    isActive ? "text-foreground" : (
                      "text-foreground/40 group-hover:text-foreground/70"
                    ),
                  )}
                />

                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className='whitespace-nowrap'
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </Tooltip>
          );
        })}
      </nav>

      <div className='border-t border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.1] p-5 space-y-6 relative z-10'>
        <div className='flex items-center gap-3 overflow-hidden group/user cursor-pointer p-1 rounded-2xl hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all'>
          <div className='h-9 w-9 rounded-xl bg-foreground text-background shrink-0 flex items-center justify-center font-black text-xs group-hover/user:scale-105 transition-transform'>
            SA
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex flex-col whitespace-nowrap'
              >
                <span className='text-[11px] font-black uppercase tracking-tight text-foreground'>
                  Super Admin
                </span>
                <span className='text-[9px] text-foreground/40 font-bold uppercase tracking-widest leading-none mt-0.5'>
                  Vessel Manager
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
