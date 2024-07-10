'use client';
import AddFinishedInstallation from '@/components/installations/add-finished-installation';
import FinishedInstallationAddBtn from '@/components/installations/FinishedInstallationAddBtn';
import InstallationsKpiCard from '@/components/installations/InstallationsKpiCard';
import Installers from '@/components/installations/installers';
import Jobs from '@/components/installations/jobs/index';
import WarrantyCases from '@/components/installations/warranty';
import { useState } from 'react';

export default function InstallationsPage() {
  const [showFinishedJobForm, setShowFinishedJobForm] = useState(false);
  return (
    <div className="flex flex-col gap-3 ">
      <InstallationsKpiCard />
      {showFinishedJobForm && (
        <AddFinishedInstallation
          setShowFinishedJobForm={setShowFinishedJobForm}
        />
      )}
      {!showFinishedJobForm && (
        <FinishedInstallationAddBtn
          setShowFinishedJobForm={setShowFinishedJobForm}
        />
      )}
      <Jobs />
      <Installers />
      <WarrantyCases />
    </div>
  );
}
