"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      {/* Background Orbs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[128px] -z-10' />

      <div className='container px-4 mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='inline-flex items-center px-4 py-1.5 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm'
        >
          <Zap className='w-4 h-4 mr-2 text-yellow-400' />
          <span>v1.0.0 — The Future of Hierarchy Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className='mb-8 text-6xl font-bold tracking-tight text-white lg:text-8xl'
        >
          Master Your <span className='text-primary italic'>Structure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className='max-w-2xl mx-auto mb-10 text-lg text-muted-foreground lg:text-xl'
        >
          Keel Tree is the premium hierarchy intelligence platform. Visualize
          complex vessel data with unparalleled clarity, precision, and speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className='flex flex-col items-center justify-center gap-4 sm:flex-row'
        >
          <Link href='/dashboard'>
            <Button size='lg' className='h-14 px-8 text-lg rounded-full group'>
              Launch Intelligence
              <ArrowRight className='ml-2 w-5 h-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </Link>
          <Button
            size='lg'
            variant='ghost'
            className='h-14 px-8 text-lg rounded-full'
          >
            Documentation
          </Button>
        </motion.div>
      </div>

      {/* Hero Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
        className='mt-20 container px-4 mx-auto'
      >
        <div className='relative p-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl'>
          <div className='absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent' />
          <div className='relative rounded-[24px] border border-white/10 overflow-hidden bg-black/40 aspect-[16/9]'>
            <img
              src='/images/hero_illustration.png'
              alt='Keel Tree Dashboard Preview'
              className='w-full h-full object-cover opacity-80'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
