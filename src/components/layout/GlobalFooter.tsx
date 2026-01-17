"use client";

import Link from "next/link";
import { Ship, Github, Twitter, Linkedin } from "lucide-react";

export function GlobalFooter() {
  return (
    <footer className='py-20 border-t border-white/5 bg-black/20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          <div className='md:col-span-2'>
            <Link
              href='/'
              className='flex items-center gap-2 font-bold text-2xl mb-6'
            >
              <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center'>
                <Ship className='w-6 h-6 text-primary-foreground' />
              </div>
              <span>Keel Tree</span>
            </Link>
            <p className='text-muted-foreground max-w-sm mb-6 text-lg'>
              Advanced vessel hierarchy intelligence. Visualizing the foundation
              of modern maritime engineering.
            </p>
            <div className='flex gap-4'>
              <Link
                href='#'
                className='p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'
              >
                <Twitter className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'
              >
                <Github className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'
              >
                <Linkedin className='w-5 h-5' />
              </Link>
            </div>
          </div>

          <div>
            <h4 className='font-bold mb-6 text-lg'>Product</h4>
            <ul className='space-y-4 text-sm text-muted-foreground'>
              <li>
                <Link
                  href='/features'
                  className='hover:text-primary transition-colors'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard'
                  className='hover:text-primary transition-colors'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/solutions'
                  className='hover:text-primary transition-colors'
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='hover:text-primary transition-colors'
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-6 text-lg'>Company</h4>
            <ul className='space-y-4 text-sm text-muted-foreground'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-primary transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='hover:text-primary transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='hover:text-primary transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5'>
          <div className='text-xs text-muted-foreground/50'>
            © 2026 Keel Tree Intelligence Platforms. All rights reserved.
          </div>
          <div className='flex gap-8 text-xs text-muted-foreground/50 uppercase tracking-widest font-medium'>
            <span>Designed for Excellence</span>
            <span>Maritime Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
