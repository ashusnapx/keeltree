// Layout constants for tree rendering

export const LAYOUT = {
  nodeWidth: 160,
  nodeHeight: 36,
  nodeGap: 16,
  branchIndent: 48,
  connectorOffset: 20,
  minZoom: 0.25,
  maxZoom: 2,
  zoomStep: 0.1,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const SIDEBAR_WIDTH = 256;
export const HEADER_HEIGHT = 64;
export const FOOTER_HEIGHT = 56;
