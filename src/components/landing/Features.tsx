"use client";

import { motion } from "framer-motion";
import { Search, Move, Layers, Zap, MousePointer2, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Instant Search",
    description:
      "Fuzzy matching that auto-expands branches to find exactly what you need.",
    icon: Search,
    className: "md:col-span-2",
  },
  {
    title: "Buttery Smooth",
    description:
      "Advanced zoom and pan for navigating massive ship structures.",
    icon: Move,
    className: "md:col-span-1",
  },
  {
    title: "Depth Without Limit",
    description:
      "Recursive architecture supporting infinite nested components.",
    icon: Layers,
    className: "md:col-span-1",
  },
  {
    title: "Type Focused",
    description:
      "Color-coded nodes for instant semantic recognition of equipment.",
    icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Precision Control",
    description: "Interactive details panel for deep metadata introspection.",
    icon: MousePointer2,
    className: "md:col-span-1",
  },
  {
    title: "Fleet Grade",
    description:
      "Built for industrial reliability and maritime data complexity.",
    icon: Shield,
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section className='container px-4 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden p-10 rounded-[32px] border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-all text-left",
              feature.className,
            )}
          >
            <feature.icon className='w-8 h-8 mb-6 text-black/80 group-hover:scale-110 transition-transform' />
            <h3 className='text-2xl font-bold mb-4 tracking-tight'>
              {feature.title}
            </h3>
            <p className='text-black/60 text-lg leading-relaxed'>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
