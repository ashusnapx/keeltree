![Keel Tree Banner](file:///Users/ashutoshkumar/.gemini/antigravity/brain/06959bc2-35a7-430d-bbcd-50103253d91a/keel_tree_premium_banner_1768631505531.png)

# 🚢 Keel Tree

### **Vessel Hierarchy Intelligence & Maritime Engineering Visualization**

Keel Tree is a state-of-the-art visualization platform engineered for the modern maritime industry. It transforms massive, multi-layered vessel equipment data into a performant, interactive "Keel-to-Mast" digital twin, allowing technical managers and engineers to navigate complex ship hierarchies with unprecedented clarity.

---

## 🌿 The Experience: Fluid & Precise

Most industrial software is a "grey box" of complexity. **Keel Tree** is built on the philosophy that **clarity is a competitive advantage.**

![Data Flow Abstract](file:///Users/ashutoshkumar/.gemini/antigravity/brain/06959bc2-35a7-430d-bbcd-50103253d91a/keel_tree_data_flow_abstract_1768631534356.png)

### 🌊 Sensory UX

- **Frictionless Navigation**: Physics-based animations ensure every expansion, search, and transition feels natural and expensive.
- **Glassmorphic Depth**: Layers of blurred transparency give the interface a world-class, premium feel while maintaining a technical focus.
- **Micro-Interactions**: Hover states, interactive breadcrumbs, and real-time shadows provide constant positive feedback.

---

## ⚡ Engineering Excellence

Keel Tree is more than a UI; it's a demonstration of high-performance web engineering.

### 1. Robust URL-Driven Navigation Flow

Selection state (Fleet → Division → Vessel) is entirely persisted in the URL. This enables:

- **Zero-Bugs Refresh**: Hard refreshes always return you to the exact node.
- **Browser Native Navigation**: Full "Back" and "Forward" support for hierarchy traversal.
- **Deep-Linking**: Direct URLs to specific equipment subgroups for instant sharing.

```mermaid
graph LR
    A["URL Search Params"] -->|Hydrate| B["Dashboard Engine"]
    B -->|Select Fleet| C["Fleet Selector"]
    C -->|Update URL| A
    B -->|Select Group| D["Group Selector"]
    D -->|Update URL| A
    B -->|Select Vessel| E["Tree Engine"]
    E -->|Update URL| A
```

### 2. Recursive Visualization Engine

Built with custom logic for staggering reveals and path preservation.

- **Atomic Components**: Nodes are purely reactive and memoized for 60fps performance on large data sets.
- **Context-Aware Search**: Automatically expands all parent paths to ensure the search result is never "orphaned."

![Hierarchy Preview](file:///Users/ashutoshkumar/.gemini/antigravity/brain/06959bc2-35a7-430d-bbcd-50103253d91a/dashboard_vessel_hierarchy_1768630601485.png)

---

## 🛠 Tech Stack

- **Next.js 15+**: App Router for optimized SSR/SSG and client-side steering.
- **TypeScript**: Strict architecture with Zod-validated data schemas.
- **Framer Motion**: Production-grade layout animations.
- **Tailwind CSS 4.0**: Atomic design tokens for categorical node colors.

---

## 📐 System Architecture

![Vessel Vector](file:///Users/ashutoshkumar/.gemini/antigravity/brain/06959bc2-35a7-430d-bbcd-50103253d91a/keel_tree_vessel_vector_1768631520770.png)

```mermaid
graph TD
    subgraph Frontend
        NB["Navbar (Breadcrumbs)"]
        SB["Interactive Sidebar"]
        TV["TreeView (Recursive)"]
        DASH["Dashboard Modules"]
    end

    subgraph Engine
        URL["URL State Sync"]
        SEARCH["Fuzzy Search Engine"]
        BP["Breadcrumb Provider"]
    end

    subgraph Data
        JSON["Seed Hierarchy (JSON)"]
        SCHEMA["Zod Schemas"]
    end

    URL --> DASH
    JSON --> SCHEMA
    SCHEMA --> TV
    TV --> BP
    BP --> NB
    SEARCH --> TV
```

---

## 🚀 Deployment & Installation

### 1. Clone & Install

```bash
git clone https://github.com/your-username/keeltree.git
cd keeltree
npm install
```

### 2. Launch Development

```bash
npm run dev
```

### 3. Production Build

```bash
npm run build
npm start
```

---

## ⚓ The Promise

> "The foundation of a great ship is its keel. The foundation of a great technical operation is its data. Keel Tree brings them together."

**Optimized for high-stakes environments where every component counts.**
