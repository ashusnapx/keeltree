"use client";

import { motion } from "framer-motion";
import { Ship, Globe, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Fleet {
  id: string;
  name: string;
  groups: {
    id: string;
    vessels: any[];
  }[];
}

interface FleetSelectorProps {
  fleets: Fleet[];
  onSelect: (fleetId: string) => void;
}

export function FleetSelector({ fleets, onSelect }: FleetSelectorProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {fleets.map((fleet, index) => (
        <motion.div
          key={fleet.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            className='group cursor-pointer p-6 border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:shadow-2xl hover:shadow-primary/10 overflow-hidden relative'
            onClick={() => onSelect(fleet.id)}
          >
            <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
              <Globe className='w-16 h-16' />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary'>
                <Ship className='w-6 h-6' />
              </div>
              <div>
                <h3 className='text-xl font-bold group-hover:text-primary transition-colors'>
                  {fleet.name}
                </h3>
                <p className='text-sm text-muted-foreground mt-1'>
                  {fleet.groups.length} Divisions •{" "}
                  {fleet.groups.reduce(
                    (acc: number, g: any) => acc + g.vessels.length,
                    0,
                  )}{" "}
                  Vessels
                </p>
              </div>
              <div className='flex items-center text-xs font-semibold text-primary uppercase tracking-wider gap-2 mt-2'>
                Manage Fleet{" "}
                <ChevronRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
