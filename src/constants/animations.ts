// Framer Motion animation configurations

import type { Variants, Transition } from "framer-motion";

export const TIMING = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  stagger: 0.05,
} as const;

export const SPRING: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const EASE_OUT: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: TIMING.normal,
};

export const NODE_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -10, scale: 0.95 },
};

export const BRANCH_VARIANTS: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
};

export const HOVER_SCALE = 1.02;
export const TAP_SCALE = 0.98;

export const STAGGER_CHILDREN: Variants = {
  visible: { transition: { staggerChildren: TIMING.stagger } },
};
