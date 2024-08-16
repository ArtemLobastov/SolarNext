'use client';
import ActiveSale from '@/components/account/sales/ActiveSale';
import AddSale from '@/components/account/sales/AddSale';
import SalesKpiCard from '@/components/account/sales/SalesKpiCard';
import SalesListTable from '@/components/account/sales/SalesListTable';
import { useState } from 'react';

export default function SalesPage() {
  const [addingSale, setAddingSale] = useState<boolean>(true);

  return (
    <>
      <SalesKpiCard />
      <ActiveSale />
      {addingSale && <AddSale setAddingSale={setAddingSale} />}
      <SalesListTable addingSale={addingSale} setAddingSale={setAddingSale} />
    </>
  );
}
