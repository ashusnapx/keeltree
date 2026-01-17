"use client";

import { motion } from "framer-motion";
import { Book, FileCheck, ShieldAlert } from "lucide-react";

export default function LibraryPage() {
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
              Repository
            </h1>
            <p className='text-foreground/40 text-xl font-medium uppercase tracking-widest'>
              Technical Documentation & Compliance
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { title: "Propulsion Grid", type: "Technical", icon: Book },
            { title: "Safety Protocol", type: "Compliance", icon: FileCheck },
            { title: "Emergency Ops", type: "Safety", icon: ShieldAlert },
            { title: "Deck Logistics", type: "Standard", icon: Book },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='p-12 rounded-[56px] border border-border bg-foreground/[0.03] flex flex-col items-center justify-center text-center cursor-pointer group hover:bg-foreground/[0.06] transition-all'
            >
              <doc.icon className='w-12 h-12 text-foreground/20 mb-8 group-hover:text-foreground transition-colors' />
              <h3 className='font-black text-xl mb-2 tracking-tight uppercase leading-none'>
                {doc.title}
              </h3>
              <p className='text-[10px] font-black text-foreground/20 uppercase tracking-widest leading-none mt-2'>
                {doc.type}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
