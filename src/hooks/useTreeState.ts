// Enhanced tree state management hook with expand all support

"use client";

import { useReducer, useCallback } from "react";
import type { TreeState, TreeAction, TreeNode } from "@/types";
import { getNodeIdsToDepth, getAllNodeIds } from "@/lib/tree-utils";
import { CONFIG } from "@/config";

const initialState: TreeState = {
  expandedIds: new Set<string>(),
  selectedId: null,
  focusedId: null,
  searchQuery: "",
  zoom: 1,
  panOffset: { x: 0, y: 0 },
};

function createReducer(root: TreeNode | null) {
  return function treeReducer(state: TreeState, action: TreeAction): TreeState {
    switch (action.type) {
      case "TOGGLE_EXPAND": {
        const newExpanded = new Set(state.expandedIds);
        if (newExpanded.has(action.id)) {
          newExpanded.delete(action.id);
        } else {
          newExpanded.add(action.id);
        }
        return { ...state, expandedIds: newExpanded };
      }
      case "EXPAND_ALL":
        return {
          ...state,
          expandedIds:
            root ? new Set<string>(getAllNodeIds(root)) : new Set<string>(),
        };
      case "COLLAPSE_ALL":
        return { ...state, expandedIds: new Set<string>() };
      case "SELECT":
        return { ...state, selectedId: action.id };
      case "FOCUS":
        return { ...state, focusedId: action.id };
      case "SET_SEARCH":
        return { ...state, searchQuery: action.query };
      case "SET_ZOOM":
        return { ...state, zoom: action.zoom };
      case "SET_PAN":
        return { ...state, panOffset: action.offset };
      default:
        return state;
    }
  };
}

export function useTreeState(root: TreeNode | null) {
  const reducer = useCallback(createReducer(root), [root]);

  const [state, dispatch] = useReducer(reducer, initialState, (init) => ({
    ...init,
    expandedIds:
      root ?
        new Set<string>(getNodeIdsToDepth(root, CONFIG.defaultExpandedLevels))
      : new Set<string>(),
  }));

  const toggleExpand = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_EXPAND", id });
  }, []);

  const expandAll = useCallback(() => {
    dispatch({ type: "EXPAND_ALL" });
  }, []);

  const collapseAll = useCallback(() => {
    dispatch({ type: "COLLAPSE_ALL" });
  }, []);

  const select = useCallback((id: string | null) => {
    dispatch({ type: "SELECT", id });
  }, []);

  const isExpanded = useCallback(
    (id: string) => state.expandedIds.has(id),
    [state.expandedIds],
  );

  return {
    state,
    dispatch,
    toggleExpand,
    expandAll,
    collapseAll,
    select,
    isExpanded,
  };
}
