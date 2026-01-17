"use client";

import { useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { TreeView } from "@/components/tree/TreeView";
import { FleetSelector } from "@/components/dashboard/FleetSelector";
import { GroupSelector } from "@/components/dashboard/GroupSelector";
import seedHierarchy from "@/data/seed-hierarchy.json";
import type { Fleet, Group, SeedData, TreeNode, Vessel } from "@/types";
import { useBreadcrumbs } from "@/components/providers/BreadcrumbProvider";

const data = seedHierarchy as unknown as SeedData;

import { Suspense, useCallback } from "react";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setBreadcrumbs } = useBreadcrumbs();

  const fleetId = searchParams.get("fleet");
  const groupId = searchParams.get("group");
  const vesselId = searchParams.get("vessel");

  const step = useMemo(() => {
    if (vesselId) return "vessel";
    if (fleetId) return "group";
    return "fleet";
  }, [fleetId, vesselId]);

  const selectedFleet = useMemo(
    () => data.fleets.find((f: Fleet) => f.id === fleetId),
    [fleetId],
  );

  const selectedGroup = useMemo(
    () => selectedFleet?.groups.find((g: Group) => g.id === groupId),
    [selectedFleet, groupId],
  );

  const selectedVessel = useMemo(
    () => selectedGroup?.vessels.find((v: Vessel) => v.id === vesselId),
    [selectedGroup, vesselId],
  );

  const updateParams = useCallback(
    (params: Record<string, string | null>) => {
      const url = new URL(window.location.href);
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value);
        } else {
          url.searchParams.delete(key);
        }
      });
      router.push(url.pathname + url.search);
    },
    [router],
  );

  const currentTitle = useMemo(
    () => (selectedVessel ? selectedVessel.name : "Selection"),
    [selectedVessel],
  );

  const pathItems = useMemo(() => {
    const items: { name: string; onClick?: () => void }[] = [
      {
        name: "Fleet Management",
        onClick: () => updateParams({ fleet: null, group: null, vessel: null }),
      },
    ];

    if (selectedFleet) {
      items.push({
        name: selectedFleet.name,
        onClick: () => updateParams({ group: null, vessel: null }),
      });
    }

    if (selectedGroup) {
      items.push({
        name: selectedGroup.name,
        onClick: () => updateParams({ vessel: null }),
      });
    }

    return items;
  }, [selectedFleet, selectedGroup, updateParams]);

  useEffect(() => {
    setBreadcrumbs(pathItems, currentTitle);
  }, [pathItems, currentTitle, setBreadcrumbs]);

  return (
    <main className='flex-1 overflow-hidden bg-background/50 grid-pattern'>
      {step === "fleet" && (
        <FleetSelector
          fleets={data.fleets}
          onSelect={(id) =>
            updateParams({ fleet: id, group: null, vessel: null })
          }
        />
      )}

      {step === "group" && selectedFleet && (
        <GroupSelector
          groups={selectedFleet.groups}
          onBack={() =>
            updateParams({ fleet: null, group: null, vessel: null })
          }
          onSelect={(id: string) => {
            const group = selectedFleet.groups.find((g) => g.id === id);
            if (group?.vessels.length === 1) {
              updateParams({ group: id, vessel: group.vessels[0].id });
            } else {
              updateParams({
                group: id,
                vessel: group?.vessels[0]?.id || null,
              });
            }
          }}
        />
      )}

      {step === "vessel" && selectedVessel && (
        <div className='p-6 h-full flex flex-col pb-24'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-bold'>
              {selectedVessel.name} Hierarchy
            </h2>
            <button
              onClick={() => updateParams({ group: null, vessel: null })}
              className='text-xs text-primary hover:underline font-medium'
            >
              Change Vessel
            </button>
          </div>
          <div className='flex-1 overflow-auto no-scrollbar'>
            <TreeView data={selectedVessel.hierarchy as unknown as TreeNode} />
          </div>
        </div>
      )}
      {step === "vessel" && (
        <Footer
          currentPath={[
            { id: "fleet", name: selectedFleet?.name || "" },
            { id: "group", name: selectedGroup?.name || "" },
            { id: "vessel", name: selectedVessel?.name || "" },
          ]}
          onNavigate={(id) => {
            if (id === "fleet") updateParams({ group: null, vessel: null });
            if (id === "group") updateParams({ vessel: null });
          }}
        />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
