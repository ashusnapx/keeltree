"use client";

import { motion } from "framer-motion";
import { Shield, Bell, Database, HardDrive } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className='flex-1 p-10 bg-background text-foreground selection:bg-foreground/20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-5xl mx-auto'
      >
        <div className='flex items-end justify-between mb-20 border-b border-border pb-10'>
          <div>
            <h1 className='text-6xl font-bold tracking-tighter mb-4'>
              Configuration
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Environment & Security control
            </p>
          </div>
        </div>

        <div className='space-y-4'>
          {[
            {
              label: "Connectivity",
              desc: "API polling and real-time socket arrays.",
              icon: Database,
            },
            {
              label: "Security & Encryption",
              desc: "Two-factor authentication and access logs.",
              icon: Shield,
            },
            {
              label: "Telemetry Alerts",
              desc: "Manage threshold-based notification streams.",
              icon: Bell,
            },
            {
              label: "Resource Manager",
              desc: "Manage local cache and offline data logs.",
              icon: HardDrive,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 15 }}
              className='p-10 rounded-[48px] border border-border bg-foreground/[0.03] flex items-center justify-between group cursor-pointer hover:bg-foreground/[0.06] transition-all'
            >
              <div className='flex items-center gap-10'>
                <div className='w-16 h-16 rounded-[24px] bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <item.icon className='w-6 h-6' />
                </div>
                <div>
                  <h3 className='text-3xl font-bold tracking-tight uppercase group-hover:text-foreground transition-colors'>
                    {item.label}
                  </h3>
                  <p className='text-foreground/30 text-lg font-medium tracking-tight mt-1'>
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className='w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/20 group-hover:bg-foreground group-hover:text-background transition-all'>
                &gt;
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
