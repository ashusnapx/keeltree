"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ship, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

import { useBreadcrumbs } from "@/components/providers/BreadcrumbProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { pathItems, currentPage } = useBreadcrumbs();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled || isDashboard ?
          "bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.08] py-3"
        : "bg-transparent border-b border-transparent py-5",
      )}
    >
      <div className='container mx-auto px-6 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-3 group transition-opacity hover:opacity-80'
        >
          <Ship className='w-5 h-5 text-foreground' />
          <span className='font-bold text-lg tracking-tighter text-foreground uppercase'>
            Keel Tree
          </span>
        </Link>

        {isDashboard && pathItems.length > 0 && (
          <div className='hidden lg:flex items-center gap-2 ml-10 text-[11px] font-bold uppercase tracking-widest text-foreground/40 border-l border-foreground/10 dark:border-white/10 pl-10'>
            {pathItems.map((item, index) => (
              <span key={index} className='flex items-center gap-2'>
                {item.onClick ?
                  <button
                    onClick={item.onClick}
                    className='hover:text-foreground transition-colors cursor-pointer'
                  >
                    {item.name}
                  </button>
                : item.href ?
                  <Link
                    href={item.href}
                    className='hover:text-foreground transition-colors cursor-pointer'
                  >
                    {item.name}
                  </Link>
                : <span className='cursor-default'>{item.name}</span>}
                <span className='opacity-30'>/</span>
              </span>
            ))}
            <span className='text-foreground'>{currentPage}</span>
          </div>
        )}

        <div className='flex-1' />

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-10 text-[13px] font-medium'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-all hover:text-foreground",
                pathname === link.href ?
                  "text-foreground"
                : "text-foreground/50",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-6 ml-10'>
          <ThemeToggle />
          {!isDashboard ?
            <Link href='/dashboard'>
              <button className='bg-foreground text-background text-[13px] font-bold py-2 px-6 rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95'>
                Enter Dashboard
              </button>
            </Link>
          : <button className='md:hidden p-2 text-foreground/70'>
              <Menu className='w-5 h-5' />
            </button>
          }
        </div>
      </div>
    </header>
  );
}
