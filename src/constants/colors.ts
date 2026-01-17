// Node type color definitions for Keel Tree
// Matches design reference: Equipment Type (red), Equipment (blue), Assembly (gray), Component (green)

export const NODE_COLORS = {
  equipmentType: {
    bg: "bg-[#DC2626]", // Strong Red
    bgDraft: "bg-[#DC2626]/40",
    border: "border-[#DC2626]",
    text: "text-white",
    hex: "#DC2626",
    hexDraft: "rgba(220, 38, 38, 0.4)",
  },
  equipment: {
    bg: "bg-[#1E3A8A]", // Navy Blue
    bgDraft: "bg-[#1E3A8A]/40",
    border: "border-[#1E3A8A]",
    text: "text-white",
    hex: "#1E3A8A",
    hexDraft: "rgba(30, 58, 138, 0.4)",
  },
  assembly: {
    bg: "bg-[#64748B]", // Slate Gray
    bgDraft: "bg-[#64748B]/40",
    border: "border-[#64748B]",
    text: "text-white",
    hex: "#64748B",
    hexDraft: "rgba(100, 116, 139, 0.4)",
  },
  component: {
    bg: "bg-[#166534]", // Forest Green (Deep Green)
    bgDraft: "bg-[#166534]/40",
    border: "border-[#166534]",
    text: "text-white",
    hex: "#166534",
    hexDraft: "rgba(22, 101, 52, 0.4)",
  },
} as const;

export const GLASS_COLORS = {
  panel: "bg-white/5 backdrop-blur-xl border-white/10",
  panelLight: "bg-black/5 backdrop-blur-xl border-black/10",
  search: "bg-white/10 backdrop-blur-md",
} as const;

export const CONNECTOR_COLORS = {
  line: "#94a3b8",
  lineLight: "#e2e8f0",
} as const;
