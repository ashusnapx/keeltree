"use client";

import { motion } from "framer-motion";
import { Ship, Users, Activity, TrendingUp } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";

export default function OverviewPage() {
  const vessel = seedHierarchy.fleets[0].groups[0].vessels[0];

  return (
    <main className='flex-1 p-10 bg-background text-foreground selection:bg-foreground/20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-7xl mx-auto'
      >
        <div className='flex items-end justify-between mb-20 border-b border-foreground/10 pb-10'>
          <div>
            <h1 className='text-6xl font-bold tracking-tighter mb-4'>
              Command
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Global Fleet Intelligence hub
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-20'>
          {[
            { label: "Vessels Active", value: "1", icon: Ship, trend: "+0%" },
            {
              label: "Avg Efficiency",
              value: "94%",
              icon: Activity,
              trend: "+2.4%",
            },
            { label: "Total Crew", value: "242", icon: Users, trend: "+12" },
            {
              label: "System Uptime",
              value: "99.9%",
              icon: TrendingUp,
              trend: "Stable",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='p-10 rounded-[48px] border border-border bg-foreground/[0.03] backdrop-blur-3xl hover:bg-foreground/[0.06] transition-all'
            >
              <div className='w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/40 mb-10'>
                <stat.icon className='w-5 h-5' />
              </div>
              <p className='text-[10px] font-black text-foreground/30 uppercase tracking-widest leading-none mb-3'>
                {stat.label}
              </p>
              <div className='flex items-end justify-between'>
                <h3 className='text-5xl font-black tracking-tighter leading-none'>
                  {stat.value}
                </h3>
                <span className='text-[9px] font-black bg-foreground text-background px-2 py-0.5 rounded-full uppercase tracking-widest'>
                  {stat.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='p-12 rounded-[56px] border border-border bg-foreground/[0.03] relative overflow-hidden h-[500px] hover:bg-foreground/[0.06] transition-all'>
            <h3 className='text-3xl font-bold mb-10 tracking-tight uppercase'>
              Recent Activity
            </h3>
            <div className='space-y-6'>
              <div className='flex items-center justify-between p-6 rounded-3xl bg-foreground/[0.02] border border-border transition-all hover:bg-foreground/[0.05]'>
                <div className='flex items-center gap-6'>
                  <span className='w-3 h-3 rounded-full bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.2)]' />
                  <span className='font-black text-lg uppercase tracking-tight'>
                    {vessel.name}
                  </span>
                </div>
                <span className='text-[10px] font-black text-foreground/30 uppercase tracking-widest'>
                  Departed Port Louis
                </span>
              </div>
              <div className='flex items-center justify-between p-6 rounded-3xl bg-foreground/[0.01] border border-border opacity-50'>
                <div className='flex items-center gap-6 text-foreground/40'>
                  <span className='w-3 h-3 rounded-full bg-foreground/20' />
                  <span className='font-bold text-lg uppercase tracking-tight'>
                    MT Vishva Shanti
                  </span>
                </div>
                <span className='text-[10px] font-black uppercase tracking-widest'>
                  Arrived Singapore
                </span>
              </div>
            </div>
          </div>

          <div className='p-12 rounded-[56px] border border-border bg-foreground/[0.03] relative overflow-hidden h-[500px] flex flex-col justify-center items-center text-center group hover:bg-foreground/[0.06] transition-all'>
            <div className='w-24 h-24 rounded-full border border-border flex items-center justify-center mb-10 group-hover:scale-110 transition-transform'>
              <Activity className='w-10 h-10 text-foreground animate-pulse' />
            </div>
            <h3 className='text-4xl font-bold mb-4 tracking-tight uppercase'>
              Live Telemetry
            </h3>
            <p className='text-foreground/40 text-lg max-w-sm font-medium'>
              Monitoring systems fully operational across all vessel nodes.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
