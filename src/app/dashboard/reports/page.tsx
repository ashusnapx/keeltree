"use client";

import { motion } from "framer-motion";
import { Download, Filter } from "lucide-react";

export default function ReportsPage() {
  return (
    <main className='flex-1 p-10 bg-background text-foreground selection:bg-foreground/20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-7xl mx-auto'
      >
        <div className='flex items-end justify-between mb-20 border-b border-border pb-10'>
          <div>
            <h1 className='text-6xl font-bold tracking-tighter mb-4'>
              Analytics
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Custom Intelligence & Compliance
            </p>
          </div>
          <div className='flex gap-4'>
            <button className='p-4 rounded-full bg-foreground/[0.03] border border-border hover:bg-foreground/[0.08] transition-all text-foreground/40 hover:text-foreground'>
              <Filter className='w-5 h-5' />
            </button>
            <button className='bg-foreground text-background px-10 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all'>
              <Download className='w-4 h-4' />
              Compile Report
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='h-[500px] rounded-[56px] border border-border bg-foreground/[0.03] p-12 flex flex-col hover:bg-foreground/[0.06] transition-all'>
            <h3 className='text-3xl font-bold mb-12 tracking-tight uppercase leading-none'>
              Monthly Consumption
            </h3>
            <div className='flex-1 flex items-end gap-3'>
              {[40, 60, 45, 90, 65, 30, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className='flex-1 bg-foreground/[0.05] rounded-t-2xl hover:bg-foreground transition-all cursor-pointer border-x border-t border-border'
                />
              ))}
            </div>
          </div>
          <div className='h-[500px] rounded-[56px] border border-border bg-foreground/[0.03] p-12 flex flex-col justify-center items-center text-center group hover:bg-foreground/[0.06] transition-all'>
            <div className='w-32 h-32 rounded-full border border-border border-t-foreground animate-spin mb-10' />
            <p className='text-3xl font-bold tracking-tight uppercase'>
              Aggregating Nodes...
            </p>
            <p className='text-foreground/30 text-lg font-medium mt-4'>
              Synthesizing telemetry data across global arrays.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
