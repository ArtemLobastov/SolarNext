import { Goal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import AddFinishedInstallationForm from './add-finished-installation-form';

export default function AddFinishedInstallation() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
        <CardTitle className="font-medium">Job Completion</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <AddFinishedInstallationForm />
      </CardContent>
    </Card>
  );
}
