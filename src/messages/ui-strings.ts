// All UI strings centralized for i18n readiness and consistency

export const UI_STRINGS = {
  app: {
    name: "Keel Tree",
    tagline: "Hierarchy Intelligence Platform",
    copyright: "© 2026 Keel Tree",
  },
  search: {
    placeholder: "Search hierarchy...",
    noResults: "No matching nodes found",
    resultsCount: (count: number) => `${count} result${count !== 1 ? "s" : ""}`,
  },
  tree: {
    emptyState: "No hierarchy data available",
    loadingState: "Loading hierarchy...",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    expandNode: "Expand",
    collapseNode: "Collapse",
  },
  controls: {
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    fitToScreen: "Fit to Screen",
    resetZoom: "Reset Zoom",
  },
  legend: {
    title: "Node Types",
    draft: "(Draft)",
  },
  nav: {
    dashboard: "Dashboard",
    fleetManagement: "Fleet Management",
    settings: "Settings",
    vesselTree: "Vessel Hierarchy Tree",
  },
} as const;

export const TOOLTIPS = {
  node: {
    expand: "Click to expand children",
    collapse: "Click to collapse children",
    select: "Click to select node",
  },
  zoom: {
    in: "Increase zoom level",
    out: "Decrease zoom level",
    fit: "Fit entire tree in view",
  },
} as const;
