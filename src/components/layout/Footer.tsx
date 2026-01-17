// Footer with node type legend and breadcrumb

"use client";

import { cn } from "@/lib/utils";
import { NODE_COLORS } from "@/constants/colors";
import { NODE_TYPE_LABELS, type NodeType } from "@/constants";
import type { TreePath } from "@/types";

interface FooterProps {
  currentPath?: TreePath[];
  onNavigate?: (id: string) => void;
}

const legendItems: { type: NodeType; isDraft: boolean }[] = [
  { type: "equipmentType", isDraft: false },
  { type: "equipment", isDraft: false },
  { type: "equipment", isDraft: true },
  { type: "assembly", isDraft: false },
  { type: "assembly", isDraft: true },
  { type: "component", isDraft: false },
  { type: "component", isDraft: true },
];

export function Footer({ currentPath = [], onNavigate }: FooterProps) {
  return (
    <footer className='fixed bottom-0 left-0 right-0 z-[100] px-6 py-4 bg-background/40 backdrop-blur-3xl border-t border-border/10'>
      <div className='max-w-[1400px] mx-auto flex flex-col gap-4'>
        {/* Breadcrumb Row */}
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center gap-1.5 overflow-x-auto no-scrollbar'>
            {currentPath.length > 0 ?
              currentPath.map((item, index) => (
                <div key={item.id} className='flex items-center gap-1.5'>
                  <button
                    onClick={() => onNavigate?.(item.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg border text-[11px] font-bold transition-all",
                      index === currentPath.length - 1 ?
                        "bg-foreground text-background border-foreground shadow-lg"
                      : "bg-background/40 text-foreground/60 border-border hover:bg-foreground/5 hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </button>
                  {index < currentPath.length - 1 && (
                    <span className='text-foreground/20 text-xs'>/</span>
                  )}
                </div>
              ))
            : <div className='px-3 py-1.5 rounded-lg border bg-foreground text-background border-foreground text-[11px] font-bold'>
                Equipments
              </div>
            }
          </div>
        </div>

        {/* Legend Row */}
        <div className='flex items-center gap-4 py-2 px-3 rounded-xl bg-foreground/[0.03] border border-border w-fit overflow-x-auto no-scrollbar'>
          {legendItems.map(({ type, isDraft }) => {
            const colors = NODE_COLORS[type];
            const label = NODE_TYPE_LABELS[type] + (isDraft ? " (Draft)" : "");
            return (
              <div
                key={`${type}-${isDraft}`}
                className='flex items-center gap-2 px-2 py-1'
              >
                <span
                  className={cn(
                    "h-3 w-4 rounded-sm",
                    isDraft ? colors.bgDraft : colors.bg,
                  )}
                />
                <span className='text-[10px] font-black uppercase tracking-widest text-foreground/60 whitespace-nowrap'>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
