# � Keel Tree

**Vessel Hierarchy Intelligence & Maritime Engineering Visualization**

Keel Tree is a premium, high-performance visualization platform designed for modern maritime operations. It transforms complex vessel equipment data into an intuitive, interactive "Keel-to-Mast" hierarchy, enabling engineers and fleet managers to maintain absolute situational awareness.

![Landing Page](file:///Users/ashutoshkumar/.gemini/antigravity/brain/06959bc2-35a7-430d-bbcd-50103253d91a/keel_tree_apple_hero_1768628310415.png)

---

## ✨ Philosophy: Form Meets Function

Most maritime software is clunky and dated. **Keel Tree** breaks that mold by applying "Apple-style" aesthetics—minimalism, glassmorphism, and high-frequency micro-animations—to heavy industrial data.

### 🔑 Key Features

- **🌿 Dynamic Recursive Visualization**: Custom-built horizontal tree layout with smooth expand/collapse logic and recursive branch rendering.
- **🎨 Categorical Intelligence**: Type-based color coding (Equipment Type, Equipment, Assembly, Component) for instant cognitive mapping.
- **🔗 Context-Aware Navigation**:
  - **URL-Based State**: Every selection is reflected in the URL parameters (`?fleet=f1&vessel=v1`).
  - **Deep-Linking**: Share direct links to specific equipment subgroups.
  - **Interactive Breadcrumbs**: Dynamic Navbar links that allow jumping across any level of the hierarchy.
- **🚀 Engineered for Scale**: Efficiently handles massive data sets, including fleets with dozens of divisions and vessels, with zero performance degradation.
- **🌗 Seamless Synchronization**: Full high-contrast Light and Dark mode support with persistent theme synchronization.
- **🛠 Dashboard Modules**: Integrated views for Maintenance tracking, Inventory management, Machinery metrics, and Crew roles.

---

## 🛠 Tech Stack & Engineering Excellence

This project isn't just a UI—it's a demonstration of modern web engineering best practices.

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed schemas/interfaces)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (Atomic CSS, custom design tokens)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Physics-based layout transitions)
- **State Management**: Next.js URL SearchParams + React Context (Clean, sharable state)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visuals**: Custom SVGs for tree connectors and glassmorphic panels.

---

## 📐 Architecture

Keel Tree follows a modular, atomic architecture designed for extensibility.

```bash
src/
├── app/                    # Next.js App Router (File-based routing)
├── components/
│   ├── tree/               # The "Magic": TreeView, Node, and Branch logic
│   ├── dashboard/          # Fleet/Group selectors and domain modules
│   ├── layout/             # Sticky Navbar, Sidebar, and Breadcrumb Footer
│   └── ui/                 # Reusable premium components (GlassPanel, Tooltip)
├── data/                   # Seed data (Hierarchical JSON)
├── hooks/                  # Custom logic (Tree search, keyboard nav)
├── schemas/                # Zod validation for data integrity
└── types/                  # Unified TypeScript interfaces
```

### 🧠 Performance Optimizations

- **Memoized Calculations**: Extensive use of `useMemo` for filtering and path generation to avoid redundant renders on large trees.
- **Recursive Branching**: Efficient DOM tree construction that only renders visible branches.
- **URL-as-State**: Eliminating heavy state-sync bugs by using the URL as the single source of truth for the selection engine.

---

## � Getting Started

### 1. Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### 2. Installation

```bash
git clone https://github.com/your-username/keeltree.git
cd keeltree
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the vessel hierarchy.

---

## 💎 Author

**Developed with focus on visual excellence and engineering precision.**

> "Visualizing the foundation of modern maritime engineering."
