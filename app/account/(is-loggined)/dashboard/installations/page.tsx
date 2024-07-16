'use client';
import AddFinishedInstallation from '@/components/account/installations/add-finished-installation';
import FinishedInstallationAddBtn from '@/components/account/installations/FinishedInstallationAddBtn';
import InstallationsKpiCard from '@/components/account/installations/InstallationsKpiCard';
import Installers from '@/components/account/installations/installers';
import Jobs from '@/components/account/installations/jobs/index';
import WarrantyCases from '@/components/account/installations/warranty';
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
