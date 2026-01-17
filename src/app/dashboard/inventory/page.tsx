"use client";

import { motion } from "framer-motion";
import { Package, Inbox, AlertTriangle } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";
import { cn } from "@/lib/utils";

export default function InventoryPage() {
  const inventory = seedHierarchy.fleets[0].groups[0].vessels[0].inventory;

  return (
    <main className='flex-1 p-8 bg-background grid-pattern'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-6xl mx-auto'
      >
        <div className='flex items-center justify-between mb-12'>
          <div className='flex items-center gap-4'>
            <div className='w-14 h-14 bg-foreground/10 rounded-2xl flex items-center justify-center text-foreground shadow-inner'>
              <Package className='w-7 h-7' />
            </div>
            <div>
              <h1 className='text-4xl font-bold tracking-tight'>Inventory</h1>
              <p className='text-muted-foreground text-lg'>
                Spare parts and consumables management.
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='px-6 py-2 rounded-2xl bg-foreground/5 border border-border flex items-center gap-3'>
              <AlertTriangle className='w-4 h-4 text-orange-500' />
              <span className='text-sm font-semibold'>Stock Alerts</span>
            </div>
            <button className='bg-foreground text-background px-6 py-2.5 rounded-full font-medium'>
              Order Parts
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {inventory.map((item) => {
            const isLow = item.qty < item.min;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className='p-8 rounded-[32px] border border-border bg-foreground/5 backdrop-blur-xl relative overflow-hidden group'
              >
                <div className='absolute top-0 right-0 p-8'>
                  <Inbox className='w-12 h-12 text-foreground/5 group-hover:text-foreground/10 transition-colors' />
                </div>

                <div className='relative z-10'>
                  <span className='text-[10px] font-bold uppercase tracking-widest text-foreground/60 mb-2 block'>
                    {item.location}
                  </span>
                  <h3 className='text-2xl font-bold mb-6'>{item.name}</h3>

                  <div className='flex items-end justify-between'>
                    <div>
                      <span
                        className={cn(
                          "text-4xl font-black tracking-tighter",
                          isLow ? "text-orange-500" : "text-foreground",
                        )}
                      >
                        {item.qty}
                      </span>
                      <span className='text-muted-foreground ml-2 font-medium'>
                        {item.unit}
                      </span>
                    </div>

                    <div className='text-right'>
                      <p className='text-[10px] font-bold text-muted-foreground uppercase mb-1'>
                        Threshold
                      </p>
                      <p className='font-bold'>
                        {item.min} {item.unit}
                      </p>
                    </div>
                  </div>

                  {isLow && (
                    <div className='mt-6 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center gap-2 text-xs font-bold text-orange-500'>
                      <AlertTriangle className='w-4 h-4' />
                      RESTOCK REQUIRED
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}
