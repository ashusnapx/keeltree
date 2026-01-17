"use client";

import { motion } from "framer-motion";
import { Features } from "@/components/landing/Features";

export default function LandingPage() {
  return (
    <div className='bg-black text-white selection:bg-primary/30'>
      <section className='relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src='/images/apple_hero.png'
            alt='Keel Tree Apple style'
            className='w-full h-full object-cover opacity-60'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black' />
        </div>

        <div className='relative z-10 max-w-5xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className='text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]'>
              Keel Tree. <br />
              <span className='text-white/40'>
                Engineering the future of fleet.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-10'
          >
            A hyper-precise hierarchy visualization platform for the next
            generation of maritime industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col md:flex-row items-center justify-center gap-6'
          >
            <a
              href='/dashboard'
              className='px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105'
            >
              Enter Dashboard
            </a>
            <a
              href='/features'
              className='text-lg font-semibold hover:text-white/70 transition-colors flex items-center gap-2'
            >
              Learn more &gt;
            </a>
          </motion.div>
        </div>
      </section>

      <section className='py-32 bg-white text-black'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-5xl md:text-7xl font-bold tracking-tighter mb-24'>
            Powerful features. <br />
            Minimalist control.
          </h2>
          <Features />
        </div>
      </section>

      <section className='py-40 bg-black text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-5xl md:text-7xl font-bold tracking-tighter mb-20 leading-tight'>
            Designed for <br />
            Industrial Scale.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='h-[500px] rounded-[48px] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-12 overflow-hidden text-center hover:bg-white/[0.08] transition-colors'
            >
              <h3 className='text-4xl font-bold mb-6 tracking-tight'>
                Speed is a Feature
              </h3>
              <p className='text-white/50 text-xl max-w-sm'>
                Search through 10,000+ components in milliseconds with our fuzzy
                matching engine.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='h-[500px] rounded-[48px] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-12 overflow-hidden text-center hover:bg-white/[0.08] transition-colors'
            >
              <h3 className='text-4xl font-bold mb-6 tracking-tight'>
                Precision is Data
              </h3>
              <p className='text-white/50 text-xl max-w-sm'>
                Every nut, bolt, and cylinder tracked with recursive depth and
                absolute clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
