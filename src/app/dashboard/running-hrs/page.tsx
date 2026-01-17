"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";
import { cn } from "@/lib/utils";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

import type { RunningHoursItem, SeedData, Vessel } from "@/types";

const data = seedHierarchy as unknown as SeedData;

function RunningHrsContent() {
  const searchParams = useSearchParams();
  const vesselId = searchParams.get("vessel");

  const vessel = useMemo(() => {
    const allVessels = data.fleets.flatMap((f) =>
      f.groups.flatMap((g) => g.vessels),
    );
    return (
      allVessels.find((v: Vessel) => v.id === vesselId) ||
      data.fleets[0].groups[0].vessels[0]
    );
  }, [vesselId]);

  const runningHours = vessel.runningHours;

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
              Machinery
            </h1>
            <p className='text-foreground/40 text-sm font-black uppercase tracking-widest'>
              {vessel.name} • Live Performance
            </p>
          </div>
        </div>

        {runningHours.length === 0 ?
          <div className='flex flex-col items-center justify-center py-40 text-center opacity-30'>
            <Activity className='w-20 h-20 mb-6' />
            <h3 className='text-2xl font-black uppercase tracking-widest'>
              No Telemetry
            </h3>
            <p className='text-sm font-bold uppercase'>
              Awaiting sensor data for {vessel.name}
            </p>
          </div>
        : <div className='grid gap-8'>
            {runningHours.map((rh: RunningHoursItem) => (
              <div
                key={rh.id}
                className='p-10 rounded-[48px] border border-border bg-foreground/[0.03] relative overflow-hidden group hover:bg-foreground/[0.06] transition-all'
              >
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-4 mb-4'>
                      <Activity className='w-6 h-6 text-foreground' />
                      <h3 className='text-4xl font-bold tracking-tighter uppercase leading-none'>
                        {rh.component}
                      </h3>
                    </div>
                    <div className='flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-foreground/30 mb-10'>
                      <span className='flex items-center gap-2'>
                        <ShieldCheck className='w-3.5 h-3.5' />
                        Sensor active
                      </span>
                      <span>Serial: ME-9932-X</span>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full border",
                          rh.status === "Healthy" ?
                            "border-foreground/20 text-foreground/60"
                          : "bg-foreground text-background border-foreground",
                        )}
                      >
                        {rh.status}
                      </span>
                    </div>

                    <div className='w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(rh.current / rh.max) * 100}%` }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className='h-full bg-foreground rounded-full group-hover:bg-primary transition-colors duration-500'
                      />
                    </div>
                  </div>

                  <div className='flex flex-row md:flex-col items-end justify-between md:justify-center gap-6 md:min-w-[200px]'>
                    <div className='text-right'>
                      <p className='text-7xl font-black tracking-tighter leading-none'>
                        {rh.current.toLocaleString()}
                      </p>
                      <p className='text-[10px] font-black text-foreground/30 uppercase tracking-widest mt-2'>
                        Operational Hours
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-2xl font-black tracking-tighter text-foreground/20'>
                        / {rh.max.toLocaleString()}
                      </p>
                      <p className='text-[10px] font-black text-foreground/10 uppercase tracking-widest mt-1'>
                        Threshold
                      </p>
                    </div>
                  </div>
                </div>

                {rh.status === "Due Soon" && (
                  <div className='absolute top-0 right-0 p-10'>
                    <div className='text-[9px] font-black bg-foreground text-background px-4 py-1.5 rounded-full tracking-widest uppercase shadow-2xl'>
                      Critical Maintenance Req
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        }
      </motion.div>
    </main>
  );
}

export default function RunningHrsPage() {
  return (
    <Suspense fallback={<div>Loading Telemetry...</div>}>
      <RunningHrsContent />
    </Suspense>
  );
}
