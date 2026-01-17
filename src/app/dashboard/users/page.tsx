"use client";

"use client";

import { motion } from "framer-motion";
import { Users, Shield, MapPin, UserPlus } from "lucide-react";
import seedHierarchy from "@/data/seed-hierarchy.json";
import { cn } from "@/lib/utils";

export default function UsersPage() {
  const users = seedHierarchy.users;

  return (
    <main className='flex-1 p-8 bg-background/50 grid-pattern'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-5xl mx-auto'
      >
        <div className='flex items-center justify-between mb-12'>
          <div className='flex items-center gap-4'>
            <div className='w-14 h-14 bg-foreground/10 rounded-2xl flex items-center justify-center text-foreground shadow-inner'>
              <Users className='w-7 h-7' />
            </div>
            <div>
              <h1 className='text-4xl font-bold tracking-tight'>
                Crew & Users
              </h1>
              <p className='text-muted-foreground text-lg'>
                Manage permissions and team accounts.
              </p>
            </div>
          </div>
          <button className='flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform'>
            <UserPlus className='w-4 h-4' />
            Add Crew
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {users.map((user) => (
            <motion.div
              key={user.id}
              whileHover={{ y: -5 }}
              className='p-8 rounded-[40px] border border-border bg-foreground/5 backdrop-blur-xl flex flex-col gap-6 relative overflow-hidden group'
            >
              <div className='flex items-center gap-6'>
                <div className='w-16 h-16 rounded-3xl bg-foreground flex items-center justify-center text-2xl font-black text-background shadow-lg shadow-foreground/10 group-hover:scale-110 transition-transform'>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>{user.name}</h3>
                  <p className='text-foreground/60 font-semibold flex items-center gap-2'>
                    <Shield className='w-3.5 h-3.5' />
                    {user.role}
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 mt-4'>
                <div className='p-4 rounded-2xl bg-foreground/5 border border-border'>
                  <p className='text-[10px] font-bold text-muted-foreground uppercase mb-1'>
                    Status
                  </p>
                  <div className='flex items-center gap-2'>
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full",
                        user.status === "Online" ?
                          "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                        : "bg-white/20",
                      )}
                    />
                    <span className='font-bold text-sm'>{user.status}</span>
                  </div>
                </div>
                <div className='p-4 rounded-2xl bg-foreground/5 border border-border'>
                  <p className='text-[10px] font-bold text-muted-foreground uppercase mb-1'>
                    Location
                  </p>
                  <div className='flex items-center gap-2'>
                    <MapPin className='w-3 h-3 text-muted-foreground' />
                    <span className='font-bold text-sm'>On-shore</span>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity'>
                <button className='text-xs font-bold text-muted-foreground hover:text-foreground underline'>
                  Edit Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
