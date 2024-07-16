import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AddJobBtn() {
  return (
    <Button variant={'outline'} className="mr-auto">
      <Plus className=" h-4 w-4 mr-2" /> Add Job
    </Button>
  );
}
