// Zod schemas for runtime validation

import { z } from "zod";
import { NODE_TYPES } from "@/constants/node-types";

const nodeTypeSchema = z.enum([
  NODE_TYPES.EQUIPMENT_TYPE,
  NODE_TYPES.EQUIPMENT,
  NODE_TYPES.ASSEMBLY,
  NODE_TYPES.COMPONENT,
]);

export const treeNodeSchema: z.ZodType<{
  id: string;
  name: string;
  type: z.infer<typeof nodeTypeSchema>;
  isDraft?: boolean;
  metadata?: Record<string, unknown>;
  children?: z.infer<typeof treeNodeSchema>[];
}> = z.lazy(() =>
  z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    type: nodeTypeSchema,
    isDraft: z.boolean().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
    children: z.array(treeNodeSchema).optional(),
  }),
);

export const searchQuerySchema = z.object({
  query: z.string(),
  filters: z.array(nodeTypeSchema).optional(),
});

export type TreeNodeValidated = z.infer<typeof treeNodeSchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
