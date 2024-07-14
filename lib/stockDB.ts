export type ProductStatus = 'in stock' | 'low' | 'out' | 'ordered';
export type ProductCategory =
  | 'frame'
  | 'panels'
  | 'inverters'
  | 'batteries'
  | 'backups'
  | 'electrical';
export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  amount: number;
  price: number;
  description: string;
  image: string;
  warranty: string;
};

export const productsDataDummyList: Product[] = [
  {
    id: 'F001',
    name: 'Aluminum Frame 60-cell',
    category: 'frame',
    status: 'in stock',
    amount: 200,
    price: 25.99,
    description: 'Durable aluminum frame for 60-cell solar panels',
    image: 'frame_60cell.jpg',
    warranty: '10 years',
  },
  {
    id: 'P001',
    name: 'Monocrystalline Panel 330W',
    category: 'panels',
    status: 'in stock',
    amount: 150,
    price: 199.99,
    description: 'High-efficiency 330W monocrystalline solar panel',
    image: 'mono_330w.jpg',
    warranty: '25 years',
  },
  {
    id: 'I001',
    name: 'String Inverter 5kW',
    category: 'inverters',
    status: 'low',
    amount: 20,
    price: 899.99,
    description: '5kW string inverter for residential solar systems',
    image: 'inverter_5kw.jpg',
    warranty: '10 years',
  },
  {
    id: 'B001',
    name: 'Lithium-Ion Battery 10kWh',
    category: 'batteries',
    status: 'in stock',
    amount: 50,
    price: 4500.0,
    description: '10kWh lithium-ion battery for energy storage',
    image: 'battery_10kwh.jpg',
    warranty: '10 years',
  },
  {
    id: 'BU001',
    name: 'Backup Generator 7.5kW',
    category: 'backups',
    status: 'ordered',
    amount: 0,
    price: 2999.99,
    description: '7.5kW backup generator for emergency power',
    image: 'generator_7.5kw.jpg',
    warranty: '3 years',
  },
  {
    id: 'E001',
    name: 'MC4 Connectors Set',
    category: 'electrical',
    status: 'in stock',
    amount: 500,
    price: 9.99,
    description: 'Set of MC4 connectors for solar panel wiring',
    image: 'mc4_connectors.jpg',
    warranty: '2 years',
  },
  {
    id: 'F002',
    name: 'Steel Frame 72-cell',
    category: 'frame',
    status: 'in stock',
    amount: 100,
    price: 35.99,
    description: 'Heavy-duty steel frame for 72-cell solar panels',
    image: 'frame_72cell.jpg',
    warranty: '15 years',
  },
  {
    id: 'P002',
    name: 'Polycrystalline Panel 275W',
    category: 'panels',
    status: 'low',
    amount: 30,
    price: 149.99,
    description: 'Cost-effective 275W polycrystalline solar panel',
    image: 'poly_275w.jpg',
    warranty: '20 years',
  },
  {
    id: 'I002',
    name: 'Microinverter 300W',
    category: 'inverters',
    status: 'in stock',
    amount: 200,
    price: 129.99,
    description: '300W microinverter for individual panel optimization',
    image: 'microinverter_300w.jpg',
    warranty: '25 years',
  },
  {
    id: 'B002',
    name: 'AGM Battery 200Ah',
    category: 'batteries',
    status: 'out',
    amount: 0,
    price: 399.99,
    description: '200Ah AGM deep cycle battery for off-grid systems',
    image: 'agm_200ah.jpg',
    warranty: '5 years',
  },
  {
    id: 'BU002',
    name: 'UPS 1500VA',
    category: 'backups',
    status: 'in stock',
    amount: 25,
    price: 199.99,
    description: '1500VA uninterruptible power supply for critical loads',
    image: 'ups_1500va.jpg',
    warranty: '3 years',
  },
  {
    id: 'E002',
    name: 'Solar Cable 10 AWG (100ft)',
    category: 'electrical',
    status: 'in stock',
    amount: 50,
    price: 79.99,
    description: '100ft of 10 AWG solar cable for system wiring',
    image: 'solar_cable_10awg.jpg',
    warranty: 'Lifetime',
  },
  {
    id: 'F003',
    name: 'Roof Mount Kit',
    category: 'frame',
    status: 'in stock',
    amount: 75,
    price: 129.99,
    description: 'Complete roof mount kit for residential installations',
    image: 'roof_mount_kit.jpg',
    warranty: '20 years',
  },
  {
    id: 'P003',
    name: 'Bifacial Panel 400W',
    category: 'panels',
    status: 'ordered',
    amount: 0,
    price: 299.99,
    description: '400W bifacial solar panel for increased energy yield',
    image: 'bifacial_400w.jpg',
    warranty: '30 years',
  },
  {
    id: 'I003',
    name: 'Hybrid Inverter 10kW',
    category: 'inverters',
    status: 'in stock',
    amount: 15,
    price: 2499.99,
    description: '10kW hybrid inverter for grid-tie with battery backup',
    image: 'hybrid_10kw.jpg',
    warranty: '10 years',
  },
  {
    id: 'B003',
    name: 'Flow Battery 5kWh',
    category: 'batteries',
    status: 'low',
    amount: 5,
    price: 5999.99,
    description: '5kWh flow battery for long-duration energy storage',
    image: 'flow_5kwh.jpg',
    warranty: '20 years',
  },
  {
    id: 'BU003',
    name: 'Portable Power Station 1000Wh',
    category: 'backups',
    status: 'in stock',
    amount: 30,
    price: 999.99,
    description: '1000Wh portable power station for camping and emergencies',
    image: 'portable_1000wh.jpg',
    warranty: '2 years',
  },
  {
    id: 'E003',
    name: 'Combiner Box 6-string',
    category: 'electrical',
    status: 'in stock',
    amount: 40,
    price: 149.99,
    description: '6-string solar combiner box with built-in fuses',
    image: 'combiner_6string.jpg',
    warranty: '5 years',
  },
  {
    id: 'F004',
    name: 'Ground Mount System',
    category: 'frame',
    status: 'low',
    amount: 10,
    price: 599.99,
    description: 'Adjustable ground mount system for open areas',
    image: 'ground_mount.jpg',
    warranty: '25 years',
  },
  {
    id: 'P004',
    name: 'Flexible Panel 100W',
    category: 'panels',
    status: 'in stock',
    amount: 100,
    price: 149.99,
    description: '100W flexible solar panel for boats and RVs',
    image: 'flexible_100w.jpg',
    warranty: '5 years',
  },
  {
    id: 'I004',
    name: 'Off-Grid Inverter 3kW',
    category: 'inverters',
    status: 'in stock',
    amount: 25,
    price: 1299.99,
    description: '3kW off-grid inverter for remote power systems',
    image: 'offgrid_3kw.jpg',
    warranty: '5 years',
  },
  {
    id: 'B004',
    name: 'Lead-Acid Battery 150Ah',
    category: 'batteries',
    status: 'in stock',
    amount: 40,
    price: 299.99,
    description: '150Ah lead-acid battery for budget-friendly storage',
    image: 'leadacid_150ah.jpg',
    warranty: '2 years',
  },
  {
    id: 'BU004',
    name: 'Solar Generator Kit 2000W',
    category: 'backups',
    status: 'low',
    amount: 5,
    price: 1999.99,
    description: '2000W solar generator kit with panels and battery',
    image: 'solargenerator_2000w.jpg',
    warranty: '3 years',
  },
  {
    id: 'E004',
    name: 'Charge Controller 40A MPPT',
    category: 'electrical',
    status: 'in stock',
    amount: 50,
    price: 199.99,
    description: '40A MPPT charge controller for efficient charging',
    image: 'mppt_40a.jpg',
    warranty: '5 years',
  },
  {
    id: 'F005',
    name: 'Ballasted Flat Roof Mount',
    category: 'frame',
    status: 'in stock',
    amount: 30,
    price: 249.99,
    description: 'Ballasted mounting system for flat commercial roofs',
    image: 'ballasted_mount.jpg',
    warranty: '15 years',
  },
  {
    id: 'P005',
    name: 'PERC Module 375W',
    category: 'panels',
    status: 'in stock',
    amount: 80,
    price: 219.99,
    description: '375W PERC module for higher efficiency in less space',
    image: 'perc_375w.jpg',
    warranty: '25 years',
  },
  {
    id: 'I005',
    name: '3-Phase Inverter 15kW',
    category: 'inverters',
    status: 'ordered',
    amount: 0,
    price: 3499.99,
    description: '15kW 3-phase inverter for commercial installations',
    image: '3phase_15kw.jpg',
    warranty: '10 years',
  },
  {
    id: 'B005',
    name: 'Saltwater Battery 48V 100Ah',
    category: 'batteries',
    status: 'low',
    amount: 3,
    price: 7999.99,
    description: '48V 100Ah saltwater battery for eco-friendly storage',
    image: 'saltwater_48v100ah.jpg',
    warranty: '10 years',
  },
  {
    id: 'BU005',
    name: 'Backup Power Wall 10kWh',
    category: 'backups',
    status: 'in stock',
    amount: 10,
    price: 6999.99,
    description: '10kWh backup power wall for whole-home backup',
    image: 'powerwall_10kwh.jpg',
    warranty: '10 years',
  },
  {
    id: 'E005',
    name: 'Rapid Shutdown Device',
    category: 'electrical',
    status: 'in stock',
    amount: 100,
    price: 49.99,
    description: 'Per-panel rapid shutdown device for NEC compliance',
    image: 'rapid_shutdown.jpg',
    warranty: '20 years',
  },
  {
    id: 'F006',
    name: 'Solar Carport Structure',
    category: 'frame',
    status: 'ordered',
    amount: 0,
    price: 2999.99,
    description: 'Ready-to-assemble solar carport structure',
    image: 'carport_structure.jpg',
    warranty: '20 years',
  },
  {
    id: 'P006',
    name: 'Transparent Solar Panel 200W',
    category: 'panels',
    status: 'low',
    amount: 15,
    price: 599.99,
    description: '200W transparent solar panel for skylights and greenhouses',
    image: 'transparent_200w.jpg',
    warranty: '20 years',
  },
  {
    id: 'I006',
    name: 'Micro-Inverter System 1kW',
    category: 'inverters',
    status: 'in stock',
    amount: 50,
    price: 799.99,
    description: '1kW micro-inverter system for small residential setups',
    image: 'micro_1kw.jpg',
    warranty: '25 years',
  },
  {
    id: 'B006',
    name: 'Nickel-Iron Battery 300Ah',
    category: 'batteries',
    status: 'ordered',
    amount: 0,
    price: 1999.99,
    description: '300Ah nickel-iron battery for extremely long life cycle',
    image: 'nickeliron_300ah.jpg',
    warranty: '30 years',
  },
  {
    id: 'BU006',
    name: 'Hydrogen Fuel Cell 5kW',
    category: 'backups',
    status: 'low',
    amount: 2,
    price: 15999.99,
    description: '5kW hydrogen fuel cell for long-duration backup power',
    image: 'fuelcell_5kw.jpg',
    warranty: '5 years',
  },
  {
    id: 'E006',
    name: 'Energy Monitoring System',
    category: 'electrical',
    status: 'in stock',
    amount: 30,
    price: 299.99,
    description: 'Whole-home energy monitoring system with app control',
    image: 'energy_monitor.jpg',
    warranty: '3 years',
  },
  {
    id: 'F007',
    name: 'Floating Solar Mount',
    category: 'frame',
    status: 'in stock',
    amount: 20,
    price: 399.99,
    description: 'Floating mount for solar installations on water bodies',
    image: 'floating_mount.jpg',
    warranty: '15 years',
  },
  {
    id: 'P007',
    name: 'Bifacial PERC Module 450W',
    category: 'panels',
    status: 'in stock',
    amount: 60,
    price: 349.99,
    description: '450W bifacial PERC module for maximum energy harvest',
    image: 'bifacial_perc_450w.jpg',
    warranty: '30 years',
  },
  {
    id: 'I007',
    name: 'Storage Inverter 7.6kW',
    category: 'inverters',
    status: 'low',
    amount: 8,
    price: 3299.99,
    description: '7.6kW storage inverter optimized for battery systems',
    image: 'storage_7.6kw.jpg',
    warranty: '10 years',
  },
  {
    id: 'B007',
    name: 'Graphene Supercapacitor 1kWh',
    category: 'batteries',
    status: 'ordered',
    amount: 0,
    price: 4999.99,
    description: '1kWh graphene supercapacitor for rapid charge/discharge',
    image: 'graphene_1kwh.jpg',
    warranty: '15 years',
  },
];
