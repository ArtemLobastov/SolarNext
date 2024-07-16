import { Button } from '@/components/ui/button';

export default function FinishedInstallationAddBtn({
  setShowFinishedJobForm,
}: {
  setShowFinishedJobForm: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}) {
  return (
    <Button
      variant={'outline'}
      className="py-10 text-2xl"
      onClick={() => setShowFinishedJobForm(true)}
    >
      Add Finished Installation
    </Button>
  );
}
