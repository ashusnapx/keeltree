// Search and filtering utilities

import type { TreeNode } from "@/types";

/** Simple fuzzy match - checks if query chars appear in order */
export function fuzzyMatch(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  let queryIndex = 0;
  for (let i = 0; i < lowerText.length && queryIndex < lowerQuery.length; i++) {
    if (lowerText[i] === lowerQuery[queryIndex]) {
      queryIndex++;
    }
  }
  return queryIndex === lowerQuery.length;
}

/** Get matching indices for highlighting */
export function getMatchIndices(text: string, query: string): number[] {
  const indices: number[] = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  let queryIndex = 0;
  for (let i = 0; i < lowerText.length && queryIndex < lowerQuery.length; i++) {
    if (lowerText[i] === lowerQuery[queryIndex]) {
      indices.push(i);
      queryIndex++;
    }
  }
  return indices;
}

/** Find all matching nodes and their ancestor IDs */
export function searchTree(
  root: TreeNode,
  query: string,
): { matchIds: Set<string>; ancestorIds: Set<string> } {
  const matchIds = new Set<string>();
  const ancestorIds = new Set<string>();

  function traverse(node: TreeNode, ancestors: string[]): boolean {
    const isMatch = fuzzyMatch(node.name, query);
    let hasMatchingDescendant = false;

    if (node.children) {
      for (const child of node.children) {
        if (traverse(child, [...ancestors, node.id])) {
          hasMatchingDescendant = true;
        }
      }
    }

    if (isMatch) {
      matchIds.add(node.id);
      ancestors.forEach((id) => ancestorIds.add(id));
    }

    return isMatch || hasMatchingDescendant;
  }

  traverse(root, []);
  return { matchIds, ancestorIds };
}
