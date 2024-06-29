import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddInstallerBtn from './AddInstallerBtn';
import InstallerInfo from './InstallerInfo';
import InstallersList from './InstallersList';

export default function Installers() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Installers</CardTitle>
      </CardHeader>
      <CardContent>
        <InstallerInfo />
        <InstallersList />
        <AddInstallerBtn />
      </CardContent>
    </Card>
  );
}
