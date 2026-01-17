"use client";

import { motion } from "framer-motion";
import { Anchor, ChevronRight, LayoutGrid } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Vessel {
  id: string;
  name: string;
}

interface Group {
  id: string;
  name: string;
  vessels: Vessel[];
}

interface GroupSelectorProps {
  groups: Group[];
  onSelect: (groupId: string) => void;
  onBack: () => void;
}

export function GroupSelector({
  groups,
  onSelect,
  onBack,
}: GroupSelectorProps) {
  return (
    <div className='p-6 space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold flex items-center gap-2'>
          <LayoutGrid className='text-primary w-6 h-6' />
          Select Division
        </h2>
        <Button variant='outline' onClick={onBack}>
          Back to Fleets
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {groups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className='group cursor-pointer p-6 border-white/5 bg-white/5 hover:bg-white/10 transition-all'
              onClick={() => onSelect(group.id)}
            >
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary'>
                    <Anchor className='w-5 h-5' />
                  </div>
                  <span className='text-xs font-mono text-muted-foreground'>
                    {group.vessels.length} VESSELS
                  </span>
                </div>
                <h3 className='text-xl font-bold group-hover:text-primary transition-colors'>
                  {group.name}
                </h3>
                <div className='pt-4 border-t border-white/5 flex flex-col gap-2'>
                  {group.vessels.map((v: any) => (
                    <div
                      key={v.id}
                      className='text-sm text-muted-foreground flex items-center justify-between group-hover:text-foreground transition-colors'
                    >
                      {v.name}
                      <ChevronRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </div>
                  ))}
                  {group.vessels.length === 0 && (
                    <span className='text-xs italic text-muted-foreground'>
                      No vessels assigned.
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
