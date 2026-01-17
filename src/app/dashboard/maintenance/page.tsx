"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";
import { cn } from "@/lib/utils";

export default function MaintenancePage() {
  const maintenance = seedHierarchy.fleets[0].groups[0].vessels[0].maintenance;

  return (
    <main className='flex-1 p-10 bg-background text-foreground selection:bg-foreground/20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-6xl mx-auto'
      >
        <div className='flex items-end justify-between mb-20 border-b border-border pb-10'>
          <div>
            <h1 className='text-6xl font-bold tracking-tighter mb-4'>
              Maintenance
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Control & Scheduling Suite
            </p>
          </div>
          <button className='bg-foreground text-background px-10 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all'>
            Initiate Order
          </button>
        </div>

        <div className='grid gap-6'>
          {maintenance.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ x: 10 }}
              className='p-8 rounded-[40px] border border-border bg-foreground/[0.03] flex items-center justify-between group cursor-pointer transition-all hover:bg-foreground/[0.06]'
            >
              <div className='flex items-center gap-10'>
                <div
                  className={cn(
                    "w-16 h-16 rounded-[24px] flex items-center justify-center border border-border",
                    job.status === "In Progress" ?
                      "bg-foreground/10 text-foreground"
                    : "bg-foreground/5 text-foreground/40",
                  )}
                >
                  <Wrench className='w-6 h-6' />
                </div>
                <div>
                  <h3 className='text-3xl font-bold tracking-tight mb-2 uppercase group-hover:text-foreground transition-colors'>
                    {job.title}
                  </h3>
                  <div className='flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-foreground/30'>
                    <span className='flex items-center gap-2'>
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full",
                          job.priority === "High" ?
                            "bg-foreground"
                          : "bg-foreground/20",
                        )}
                      />
                      {job.priority} Priority
                    </span>
                    <span>Due {job.dueDate}</span>
                    <span>ID: {job.id}</span>
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <span
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border",
                    job.status === "In Progress" ?
                      "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/40 border-border",
                  )}
                >
                  {job.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
