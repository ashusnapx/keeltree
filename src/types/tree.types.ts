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

export interface MaintenanceItem {
  id: string;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  qty: number;
  min: number;
  unit: string;
  location: string;
}

export interface RunningHoursItem {
  id: string;
  component: string;
  current: number;
  max: number;
  status: string;
}

export interface Vessel {
  id: string;
  name: string;
  status: string;
  fuel: string;
  speed: string;
  maintenance: MaintenanceItem[];
  inventory: InventoryItem[];
  runningHours: RunningHoursItem[];
  hierarchy: TreeNode;
}

export interface Group {
  id: string;
  name: string;
  vessels: Vessel[];
}

export interface Fleet {
  id: string;
  name: string;
  groups: Group[];
}

export interface SeedData {
  fleets: Fleet[];
  users: {
    id: string;
    name: string;
    role: string;
    status: string;
  }[];
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
