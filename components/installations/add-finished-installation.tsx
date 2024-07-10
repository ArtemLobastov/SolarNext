import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import AddFinishedInstallationForm from './add-finished-installation-form';

export default function AddFinishedInstallation({
  setShowFinishedJobForm,
}: {
  setShowFinishedJobForm: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
        <CardTitle className="font-medium">Job Completion</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <AddFinishedInstallationForm
          setShowFinishedJobForm={setShowFinishedJobForm}
        />
      </CardContent>
    </Card>
  );
}
