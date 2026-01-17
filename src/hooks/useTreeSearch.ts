// Tree search hook with debouncing

"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import type { TreeNode } from "@/types";
import { searchTree } from "@/lib/search-utils";
import { CONFIG } from "@/config";

export function useTreeSearch(root: TreeNode | null) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, CONFIG.searchDebounceMs);
    return () => clearTimeout(timer);
  }, [query]);

  const searchResults = useMemo(() => {
    if (!root || !debouncedQuery.trim()) {
      return { matchIds: new Set<string>(), ancestorIds: new Set<string>() };
    }
    return searchTree(root, debouncedQuery.trim());
  }, [root, debouncedQuery]);

  const isMatch = useCallback(
    (id: string) => searchResults.matchIds.has(id),
    [searchResults.matchIds],
  );

  const isAncestorOfMatch = useCallback(
    (id: string) => searchResults.ancestorIds.has(id),
    [searchResults.ancestorIds],
  );

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    isSearching: debouncedQuery.length > 0,
    matchCount: searchResults.matchIds.size,
    isMatch,
    isAncestorOfMatch,
    clearSearch,
    expandedBySearch: searchResults.ancestorIds,
  };
}
