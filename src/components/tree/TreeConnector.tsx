// SVG connector lines between nodes

"use client";

import { CONNECTOR_COLORS } from "@/constants/colors";

interface TreeConnectorProps {
  height: number;
  hasChildren: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TreeConnector({
  height,
  hasChildren,
  isFirst = false,
  isLast = false,
}: TreeConnectorProps) {
  const lineColor = CONNECTOR_COLORS.line;

  return (
    <svg
      className='absolute left-0 top-0 overflow-visible pointer-events-none'
      width={48}
      height={height}
      style={{ marginLeft: -24 }}
    >
      {/* Vertical line from parent */}
      {!isFirst && (
        <line
          x1={24}
          y1={0}
          x2={24}
          y2={18}
          stroke={lineColor}
          strokeWidth={1.5}
        />
      )}
      {/* Horizontal line to node */}
      <line
        x1={24}
        y1={18}
        x2={48}
        y2={18}
        stroke={lineColor}
        strokeWidth={1.5}
      />
      {/* Vertical line to siblings below */}
      {!isLast && (
        <line
          x1={24}
          y1={18}
          x2={24}
          y2={height}
          stroke={lineColor}
          strokeWidth={1.5}
        />
      )}
    </svg>
  );
}
