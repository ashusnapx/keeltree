"use client";

import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen bg-background text-foreground selection:bg-primary/20 transition-colors duration-500'>
      <div className='hidden md:block'>
        <Sidebar className='fixed left-0 top-0 bottom-0 z-40' />
      </div>
      <div className='flex flex-1 flex-col md:pl-[72px] pt-12'>{children}</div>
    </div>
  );
}
