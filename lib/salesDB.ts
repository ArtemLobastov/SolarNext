import { unknown } from 'zod';

type ProductSold = {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};
export type Sale = {
  date: Date;
  saleId: string;
  clientId?: string;
  clientName?: string;
  sellerId: string;
  sellerName?: string;
  productsSold: ProductSold[];
  priceTotal: number;
};
export const salesDummyData: Sale[] = [
  {
    date: new Date('2024-07-15'),
    saleId: 'S001',
    clientId: 'C001',
    clientName: 'Marija Borg',
    sellerId: 'SE001',
    sellerName: 'Adrian',
    productsSold: [
      {
        productId: 'P001',
        productName: 'Solar Panel 250W',
        quantity: 10,
        price: 150,
      },
      {
        productId: 'P002',
        productName: 'Inverter 5kW',
        quantity: 1,
        price: 1200,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1500,
      },
    ],
    priceTotal: 4200,
  },
  {
    date: new Date('2024-07-18'),
    saleId: 'S002',
    clientId: 'C002',
    clientName: 'Joseph Camilleri',
    sellerId: 'SE002',
    sellerName: 'Christabel',
    productsSold: [
      {
        productId: 'P003',
        productName: 'Battery 10kWh',
        quantity: 2,
        price: 3000,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 2200,
      },
    ],
    priceTotal: 8200,
  },
  {
    date: new Date('2024-07-20'),
    saleId: 'S003',
    clientName: 'Carmen Vella',
    sellerId: 'SE003',
    sellerName: 'Brendan',
    productsSold: [
      {
        productId: 'P001',
        productName: 'Solar Panel 250W',
        quantity: 20,
        price: 150,
      },
      {
        productId: 'P004',
        productName: 'Mounting System',
        quantity: 1,
        price: 500,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1800,
      },
    ],
    priceTotal: 5300,
  },
  {
    date: new Date('2024-07-22'),
    saleId: 'S004',
    clientId: 'C003',
    clientName: 'Paul Zammit',
    sellerId: 'SE001',
    sellerName: 'Adrian',
    productsSold: [
      {
        productId: 'P005',
        productName: 'Charge Controller',
        quantity: 5,
        price: 100,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1300,
      },
    ],
    priceTotal: 1800,
  },
  {
    date: new Date('2024-07-25'),
    saleId: 'S005',
    clientId: 'C004',
    clientName: 'Rita Farrugia',
    sellerId: 'SE002',
    sellerName: 'Christabel',
    productsSold: [
      {
        productId: 'P001',
        productName: 'Solar Panel 250W',
        quantity: 30,
        price: 150,
      },
      {
        productId: 'P002',
        productName: 'Inverter 5kW',
        quantity: 2,
        price: 1200,
      },
      {
        productId: 'P003',
        productName: 'Battery 10kWh',
        quantity: 1,
        price: 3000,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 2800,
      },
    ],
    priceTotal: 13200,
  },
  {
    date: new Date('2024-07-28'),
    saleId: 'S006',
    clientName: 'John Micallef',
    sellerId: 'SE003',
    sellerName: 'Brendan',
    productsSold: [
      {
        productId: 'P006',
        productName: 'Solar Cable 100m',
        quantity: 3,
        price: 80,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1100,
      },
    ],
    priceTotal: 1340,
  },
  {
    date: new Date('2024-08-01'),
    saleId: 'S007',
    clientId: 'C005',
    clientName: 'Anna Galea',
    sellerId: 'SE001',
    sellerName: 'Adrian',
    productsSold: [
      {
        productId: 'P001',
        productName: 'Solar Panel 250W',
        quantity: 15,
        price: 150,
      },
      {
        productId: 'P004',
        productName: 'Mounting System',
        quantity: 1,
        price: 500,
      },
      {
        productId: 'P005',
        productName: 'Charge Controller',
        quantity: 2,
        price: 100,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 2500,
      },
    ],
    priceTotal: 5450,
  },
  {
    date: new Date('2024-08-03'),
    saleId: 'S008',
    clientId: 'C006',
    clientName: 'George Spiteri',
    sellerId: 'SE002',
    sellerName: 'Christabel',
    productsSold: [
      {
        productId: 'P002',
        productName: 'Inverter 5kW',
        quantity: 1,
        price: 1200,
      },
      {
        productId: 'P003',
        productName: 'Battery 10kWh',
        quantity: 1,
        price: 3000,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1900,
      },
    ],
    priceTotal: 6100,
  },
  {
    date: new Date('2024-08-05'),
    saleId: 'S009',
    clientName: 'Maria Attard',
    sellerId: 'SE003',
    sellerName: 'Brendan',
    productsSold: [
      {
        productId: 'P007',
        productName: 'Solar Meter',
        quantity: 10,
        price: 50,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 1000,
      },
    ],
    priceTotal: 1500,
  },
  {
    date: new Date('2024-08-08'),
    saleId: 'S010',
    clientId: 'C007',
    clientName: 'David Grech',
    sellerId: 'SE001',
    sellerName: 'Adrian',
    productsSold: [
      {
        productId: 'P001',
        productName: 'Solar Panel 250W',
        quantity: 40,
        price: 150,
      },
      {
        productId: 'P002',
        productName: 'Inverter 5kW',
        quantity: 2,
        price: 1200,
      },
      {
        productId: 'P003',
        productName: 'Battery 10kWh',
        quantity: 2,
        price: 3000,
      },
      {
        productId: 'P004',
        productName: 'Mounting System',
        quantity: 1,
        price: 500,
      },
      {
        productId: 'P005',
        productName: 'Charge Controller',
        quantity: 4,
        price: 100,
      },
      {
        productId: 'ADMIN',
        productName: 'Administration Fee',
        quantity: 1,
        price: 3000,
      },
    ],
    priceTotal: 17300,
  },
];
