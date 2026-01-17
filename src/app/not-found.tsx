"use client";

import { motion } from "framer-motion";
import { Ship, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className='min-h-[70vh] flex flex-col items-center justify-center p-4 text-center'>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className='mb-8'
      >
        <Ship className='w-24 h-24 text-primary opacity-20' />
      </motion.div>

      <h1 className='text-6xl font-black mb-4 tracking-tight'>404</h1>
      <h2 className='text-2xl font-bold mb-6'>Lost at Sea?</h2>
      <p className='text-muted-foreground max-w-md mx-auto mb-10 text-lg'>
        The page you are looking for has drifted away or never existed in our
        maritime database.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 items-center'>
        <Link href='/'>
          <Button
            variant='default'
            size='lg'
            className='rounded-full px-8 gap-2'
          >
            <Home className='w-4 h-4' />
            Back to Harbor
          </Button>
        </Link>
        <Button
          variant='outline'
          size='lg'
          className='rounded-full px-8 gap-2'
          onClick={() => window.history.back()}
        >
          <RotateCcw className='w-4 h-4' />
          Go Back
        </Button>
      </div>
    </div>
  );
}
