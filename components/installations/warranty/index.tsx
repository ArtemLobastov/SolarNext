import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WarrantyCasesList from './WarrantyCasesList';
import WarrantyCaseAddBtn from './WarrantyCaseAddBtn';

export default function WarrantyCases() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Warranty</CardTitle>
      </CardHeader>
      <CardContent>
        <WarrantyCasesList />
        <WarrantyCaseAddBtn />
      </CardContent>
    </Card>
  );
}
