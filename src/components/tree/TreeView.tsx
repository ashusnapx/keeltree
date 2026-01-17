// Enhanced main tree view with zoom, pan, and controls

"use client";

import { useCallback, useState, useMemo } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Plus, Minus, Maximize2 } from "lucide-react";
import { TreeBranch } from "./TreeBranch";
import { SearchBar } from "@/components/ui/SearchBar";
import { TreeControls } from "@/components/ui/TreeControls";
import { DetailsPanel } from "@/components/ui/DetailsPanel";
import { useTreeState, useTreeSearch } from "@/hooks";
import { findNodeById } from "@/lib/tree-utils";
import type { TreeNode } from "@/types";

interface TreeViewProps {
  data: TreeNode;
}

export function TreeView({ data }: TreeViewProps) {
  const { state, toggleExpand, select, isExpanded, expandAll, collapseAll } =
    useTreeState(data);
  const {
    query,
    setQuery,
    isMatch,
    clearSearch,
    matchCount,
    expandedBySearch,
  } = useTreeSearch(data);
  const [panelOpen, setPanelOpen] = useState(false);

  // Get current selected node for details panel
  const selectedNode = useMemo(
    () => (state.selectedId ? findNodeById(data, state.selectedId) : null),
    [data, state.selectedId],
  );

  const handleSelect = useCallback(
    (id: string) => {
      select(id);
      setPanelOpen(true);
    },
    [select],
  );

  const isSelectedNode = useCallback(
    (id: string) => state.selectedId === id,
    [state.selectedId],
  );

  // Merge manual expansion with search-triggered expansion
  const effectiveIsExpanded = useCallback(
    (id: string) => isExpanded(id) || expandedBySearch.has(id),
    [isExpanded, expandedBySearch],
  );

  return (
    <div className='relative flex flex-col h-full overflow-hidden'>
      {/* Top Controls */}
      <div className='flex items-center justify-between gap-4 mb-6 z-10'>
        <SearchBar
          value={query}
          onChange={setQuery}
          onClear={clearSearch}
          resultCount={query ? matchCount : undefined}
          className='w-72'
        />

        <TreeControls onExpandAll={expandAll} onCollapseAll={collapseAll} />
      </div>

      {/* Main Container */}
      <div className='flex-1 flex gap-4 min-h-0 relative'>
        {/* Tree Container */}
        <div
          className='flex-1 relative rounded-xl bg-black/20 border border-white/5 overflow-hidden'
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.2}
            maxScale={2}
            limitToBounds={false}
            centerOnInit={false}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom UI Overlay */}
                <div className='absolute bottom-4 right-4 z-10 flex flex-col gap-2'>
                  <button
                    onClick={() => zoomIn()}
                    className='p-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg backdrop-blur-md transition-colors'
                  >
                    <Plus className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className='p-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg backdrop-blur-md transition-colors'
                  >
                    <Minus className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className='p-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg backdrop-blur-md transition-colors'
                  >
                    <Maximize2 className='w-5 h-5' />
                  </button>
                </div>

                <TransformComponent
                  wrapperClass='!w-full !h-full'
                  contentClass='p-12'
                >
                  <TreeBranch
                    node={data}
                    isExpanded={effectiveIsExpanded}
                    isSelected={isSelectedNode}
                    isMatch={query ? isMatch : undefined}
                    searchQuery={query}
                    onToggleExpand={toggleExpand}
                    onSelect={handleSelect}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>

        {/* Details Panel */}
        <DetailsPanel
          node={panelOpen ? selectedNode : null}
          onClose={() => setPanelOpen(false)}
        />
      </div>
    </div>
  );
}
