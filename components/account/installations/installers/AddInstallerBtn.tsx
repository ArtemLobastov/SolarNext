'use client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function AddInstallerBtn() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="mr-auto"
      onClick={() => router.push('/account/dashboard/users')}
    >
      <Plus className=" h-4 w-4 mr-2" /> Add new installer
    </Button>
  );
}
