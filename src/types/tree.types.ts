// Core tree types

import type { NodeType } from "@/constants/node-types";

export interface TreeNode {
  id: string;
  name: string;
  type: NodeType;
  isDraft?: boolean;
  metadata?: Record<string, unknown>;
  children?: TreeNode[];
}

export interface TreeState {
  expandedIds: Set<string>;
  selectedId: string | null;
  focusedId: string | null;
  searchQuery: string;
  zoom: number;
  panOffset: { x: number; y: number };
}

export interface TreePath {
  id: string;
  name: string;
}

export type TreeAction =
  | { type: "TOGGLE_EXPAND"; id: string }
  | { type: "EXPAND_ALL" }
  | { type: "COLLAPSE_ALL" }
  | { type: "SELECT"; id: string | null }
  | { type: "FOCUS"; id: string | null }
  | { type: "SET_SEARCH"; query: string }
  | { type: "SET_ZOOM"; zoom: number }
  | { type: "SET_PAN"; offset: { x: number; y: number } };
