const fs = require("fs");

const fleetNames = [
  "Global Tanker Fleet",
  "Nordic Star Logistics",
  "Pacific Energy Transporters",
  "Atlantic Bulk Services",
  "Mediterranean Marine Group",
  "Arctic Express Lines",
  "Horizon Container Fleet",
  "Deep Sea Drilling Ops",
  "Coastal Supply & Tug",
  "Oceanic Research Vessels",
  "South East Asia Tankers",
];

const vesselsData = [
  "MT Sagar Kanya",
  "MV Polar Star",
  "Petro Pioneer",
  "Atlantic Voyager",
  "Med Mariner",
  "Arctic Shield",
  "Horizon Apex",
  "Deep Diver III",
  "Tug Titan",
  "RV Discovery",
  "Sea Pearl",
];

const maintenanceTitles = [
  "Main Engine Overhaul",
  "Hull Cleaning",
  "Generator Service",
  "Nav-Eq Inspection",
  "Pump Replacement",
  "Safety Drill",
  "Deck Repainting",
  "Valve Calibration",
];

const maintenanceStatus = ["In Progress", "Scheduled", "Completed", "Overdue"];
const priorities = ["High", "Medium", "Low", "Critical"];

const components = [
  "Main Engine",
  "Aux Generator 1",
  "Cargo Pump 2",
  "Anchor Winch",
  "Radar System",
];

function generateVessel(id, name) {
  return {
    id: `vessel-${id}`,
    name: name,
    status: Math.random() > 0.2 ? "Active" : "In Maintenance",
    fuel: `${Math.floor(40 + Math.random() * 55)}%`,
    speed: `${(10 + Math.random() * 8).toFixed(1)} kn`,
    maintenance: Array.from({ length: 3 }).map((_, i) => ({
      id: `m-${id}-${i}`,
      title:
        maintenanceTitles[Math.floor(Math.random() * maintenanceTitles.length)],
      status:
        maintenanceStatus[Math.floor(Math.random() * maintenanceStatus.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      dueDate: "2026-02-15",
    })),
    inventory: [
      {
        id: `i-${id}-1`,
        name: "Piston Rings",
        qty: 12,
        min: 6,
        unit: "pcs",
        location: "Decks Store",
      },
      {
        id: `i-${id}-2`,
        name: "Lube Oil (Grade A)",
        qty: 450,
        min: 500,
        unit: "L",
        location: "Engine Room",
      },
    ],
    runningHours: Array.from({ length: 2 }).map((_, i) => ({
      id: `rh-${id}-${i}`,
      component: components[Math.floor(Math.random() * components.length)],
      current: Math.floor(5000 + Math.random() * 10000),
      max: 15000,
      status: "Healthy",
    })),
    hierarchy: {
      id: `root-${id}`,
      name: "Equipments",
      type: "equipmentType",
      children: [
        {
          id: `eng-${id}`,
          name: "Propulsion System",
          type: "equipment",
          metadata: { Model: "Wartsila Turbo", RPM: "120", Power: "15,000kW" },
          children: [
            {
              id: `cyl-${id}`,
              name: "Cylinder Block",
              type: "assembly",
              children: [
                { id: `piston-${id}`, name: "Piston Unit", type: "component" },
              ],
            },
          ],
        },
      ],
    },
  };
}

const fleets = fleetNames.map((name, i) => {
  return {
    id: `fleet-${i + 1}`,
    name: name,
    groups: [
      {
        id: `group-${i + 1}`,
        name: i % 2 === 0 ? "Division A" : "Operational Group",
        vessels: [
          generateVessel(`${i + 1}-1`, vesselsData[i % vesselsData.length]),
        ],
      },
    ],
  };
});

const data = {
  fleets: fleets,
  users: [
    {
      id: "u-1",
      name: "Super Admin",
      role: "Vessel Manager",
      status: "Online",
    },
    {
      id: "u-2",
      name: "Chief Engineer",
      role: "Technical Lead",
      status: "Offline",
    },
  ],
};

fs.writeFileSync(
  "/Users/ashutoshkumar/keeltree/src/data/seed-hierarchy.json",
  JSON.stringify(data, null, 2),
);
console.log("Seeded 11 fleets successfully.");
