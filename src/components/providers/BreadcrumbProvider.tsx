"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbContextType {
  pathItems: BreadcrumbItem[];
  currentPage: string;
  setBreadcrumbs: (path: BreadcrumbItem[], current: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined,
);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [pathItems, setPathItems] = useState<BreadcrumbItem[]>([]);
  const [currentPage, setCurrentPage] = useState("");

  const setBreadcrumbs = (path: BreadcrumbItem[], current: string) => {
    setPathItems(path);
    setCurrentPage(current);
  };

  return (
    <BreadcrumbContext.Provider
      value={{ pathItems, currentPage, setBreadcrumbs }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbs() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbProvider");
  }
  return context;
}
