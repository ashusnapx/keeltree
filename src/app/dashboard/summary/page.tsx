"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";

export default function SummaryPage() {
  const vessel = seedHierarchy.fleets[0].groups[0].vessels[0];

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
              Executive
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Operational Intelligence for {vessel.name}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='p-12 rounded-[56px] border border-border bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-all'>
            <h3 className='text-3xl font-bold mb-10 tracking-tight uppercase flex items-center gap-4'>
              <TrendingUp className='w-8 h-8 text-foreground' />
              Platform Health
            </h3>
            <div className='space-y-10'>
              <div>
                <div className='flex justify-between text-[10px] font-black uppercase tracking-widest mb-3'>
                  <span className='text-foreground/40'>Hull Condition</span>
                  <span className='text-foreground'>92%</span>
                </div>
                <div className='h-1 bg-foreground/5 rounded-full overflow-hidden'>
                  <div className='h-full bg-foreground w-[92%]' />
                </div>
              </div>
              <div>
                <div className='flex justify-between text-[10px] font-black uppercase tracking-widest mb-3'>
                  <span className='text-foreground/40'>Power Efficiency</span>
                  <span className='text-foreground'>88%</span>
                </div>
                <div className='h-1 bg-foreground/5 rounded-full overflow-hidden'>
                  <div className='h-full bg-foreground w-[88%]' />
                </div>
              </div>
            </div>
          </div>

          <div className='p-12 rounded-[56px] border border-border bg-foreground/[0.03] flex flex-col justify-between hover:bg-foreground/[0.06] transition-all'>
            <div>
              <h3 className='text-3xl font-bold mb-4 tracking-tight uppercase'>
                Critical Nodes
              </h3>
              <p className='text-foreground/30 mb-10 text-lg font-medium leading-tight'>
                Attention required across autonomous subsystems.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-6 rounded-3xl bg-foreground text-background'>
                <AlertCircle className='w-6 h-6' />
                <span className='font-black text-sm uppercase tracking-tight'>
                  Inventory Shift: Lube Oil Critical
                </span>
              </div>
              <div className='flex items-center gap-4 p-6 rounded-3xl bg-foreground/[0.02] border border-border text-foreground/40'>
                <CheckCircle2 className='w-6 h-6' />
                <span className='font-black text-sm uppercase tracking-tight'>
                  Navigation arrays fully aligned
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
