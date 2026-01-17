"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-20 min-h-[60vh]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='text-5xl font-black mb-8'>About Keel Tree</h1>
        <div className='prose prose-invert max-w-3xl'>
          <p className='text-xl text-muted-foreground mb-6'>
            Keel Tree was born from a simple mission: to make maritime equipment
            data as intuitive as nature. Our platform visualizes complex vessel
            hierarchies with clinical precision and elegant design.
          </p>
          <p className='text-lg text-muted-foreground/80 mb-6 font-light'>
            Built by maritime engineers for the next generation of fleet
            managers, we bridge the gap between legacy data structures and
            modern visual intelligence.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
