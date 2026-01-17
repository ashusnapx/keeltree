// Feature flags and configuration

export const FEATURES = {
  enableAnimations: true,
  enableKeyboardNav: true,
  enableZoomControls: true,
  enableSearch: true,
  enableBreadcrumbs: true,
  reducedMotion: false,
  debugMode: false,
} as const;

export const CONFIG = {
  defaultExpandedLevels: 2,
  searchDebounceMs: 200,
  animationDuration: 0.25,
  maxVisibleNodes: 500,
} as const;
