"use client";

import { motion } from "framer-motion";

export default function FeaturesPage() {
  return (
    <div className='container mx-auto px-4 py-20 min-h-[60vh]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='text-5xl font-black mb-8'>Features</h1>
        <p className='text-xl text-muted-foreground max-w-2xl mb-12'>
          Discover the high-performance visualization tools built for the modern
          maritime industry.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              title: "Bento Layout",
              desc: "Intuitive grid-based dashboard for complex data.",
            },
            {
              title: "Fuzzy Search",
              desc: "Finding nodes across thousands of components instantly.",
            },
            {
              title: "Zoom & Pan",
              desc: "Hardware-accelerated navigation for massive structures.",
            },
            {
              title: "Type Safety",
              desc: "Strict schema validation for industrial metadata.",
            },
            {
              title: "Light/Dark Mode",
              desc: "Adaptive UI for any bridge environmental lighting.",
            },
            {
              title: "Offline Ready",
              desc: "PWA support for remote maritime operations.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className='p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm'
            >
              <h3 className='text-2xl font-bold mb-4'>{f.title}</h3>
              <p className='text-muted-foreground'>{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
