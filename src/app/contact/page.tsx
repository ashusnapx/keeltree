"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-20 min-h-[60vh]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-2xl mx-auto text-center'
      >
        <h1 className='text-5xl font-black mb-8 tracking-tight'>
          Get in Touch
        </h1>
        <p className='text-xl text-muted-foreground mb-12'>
          Ready to optimize your fleet maintenance? Speak with our experts
          today.
        </p>

        <form className='space-y-6 text-left p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Full Name</label>
            <input
              className='w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary outline-none transition-colors'
              placeholder='John Doe'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Work Email</label>
            <input
              className='w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary outline-none transition-colors'
              placeholder='john@fleet.com'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Message</label>
            <textarea
              className='w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary outline-none transition-colors h-32'
              placeholder='Tell us about your fleet...'
            />
          </div>
          <Button className='w-full py-6 text-lg rounded-xl font-bold'>
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
