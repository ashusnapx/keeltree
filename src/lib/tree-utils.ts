// Tree traversal and manipulation utilities

import type { TreeNode, TreePath } from "@/types";

/** Find a node by ID in the tree */
export function findNodeById(root: TreeNode, id: string): TreeNode | null {
  if (root.id === id) return root;
  if (!root.children) return null;

  for (const child of root.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

/** Get the path from root to a specific node */
export function getNodePath(
  root: TreeNode,
  targetId: string,
  path: TreePath[] = [],
): TreePath[] | null {
  const currentPath = [...path, { id: root.id, name: root.name }];

  if (root.id === targetId) return currentPath;
  if (!root.children) return null;

  for (const child of root.children) {
    const foundPath = getNodePath(child, targetId, currentPath);
    if (foundPath) return foundPath;
  }
  return null;
}

/** Get all node IDs in the tree */
export function getAllNodeIds(root: TreeNode): string[] {
  const ids = [root.id];
  if (root.children) {
    for (const child of root.children) {
      ids.push(...getAllNodeIds(child));
    }
  }
  return ids;
}

/** Get IDs of nodes up to a certain depth */
export function getNodeIdsToDepth(
  root: TreeNode,
  depth: number,
  currentDepth = 0,
): string[] {
  if (currentDepth >= depth) return [];

  const ids = [root.id];
  if (root.children) {
    for (const child of root.children) {
      ids.push(...getNodeIdsToDepth(child, depth, currentDepth + 1));
    }
  }
  return ids;
}

/** Check if node has children */
export function hasChildren(node: TreeNode): boolean {
  return Boolean(node.children?.length);
}
