"use client";

import { motion } from "framer-motion";
import { Ship, Wrench, Users } from "lucide-react";

export default function CalendarPage() {
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
              Operations
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Fleet Schedule & Movements
            </p>
          </div>
        </div>

        <div className='p-16 rounded-[80px] border border-border bg-foreground/[0.03] flex flex-col md:flex-row gap-20 hover:bg-foreground/[0.05] transition-all'>
          <div className='flex-1 grid grid-cols-7 gap-6'>
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className='aspect-square rounded-[24px] border border-foreground/5 bg-foreground/[0.02] flex items-center justify-center text-lg font-black text-foreground/10 hover:text-foreground hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all cursor-pointer'
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className='md:w-[400px] space-y-12'>
            <h3 className='text-2xl font-bold tracking-tight uppercase'>
              Event Stream
            </h3>
            <div className='space-y-6'>
              {[
                {
                  label: "Arrival: Port Louis",
                  icon: Ship,
                  status: "Confirmed",
                },
                { label: "Quarterly Audit", icon: Users, status: "Pending" },
                { label: "Machinery Check", icon: Wrench, status: "Scheduled" },
              ].map((event, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between p-8 rounded-3xl bg-foreground/[0.02] border border-border group hover:bg-foreground/[0.06] transition-all'
                >
                  <div className='flex items-center gap-6'>
                    <event.icon className='w-6 h-6 text-foreground/40 group-hover:text-foreground transition-colors' />
                    <span className='font-black text-base uppercase tracking-tight'>
                      {event.label}
                    </span>
                  </div>
                  <span className='text-[9px] font-black text-foreground/20 uppercase tracking-widest'>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
