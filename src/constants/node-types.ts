// Node type definitions and configurations

export const NODE_TYPES = {
  EQUIPMENT_TYPE: "equipmentType",
  EQUIPMENT: "equipment",
  ASSEMBLY: "assembly",
  COMPONENT: "component",
} as const;

export type NodeType = (typeof NODE_TYPES)[keyof typeof NODE_TYPES];

export const NODE_TYPE_LABELS: Record<NodeType, string> = {
  equipmentType: "Equipment Type",
  equipment: "Equipment",
  assembly: "Assembly",
  component: "Component",
};

export const NODE_TYPE_ORDER: NodeType[] = [
  "equipmentType",
  "equipment",
  "assembly",
  "component",
];

export const getNodeTypeLabel = (type: NodeType): string => {
  return NODE_TYPE_LABELS[type] ?? type;
};
