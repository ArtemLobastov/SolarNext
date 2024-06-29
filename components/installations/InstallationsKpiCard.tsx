import { CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

export default function InstallationsKpiCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">
          Installations done in June
        </CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+25</div>
        <p className="text-xs text-muted-foreground">45% of the Month Goal</p>
        <Progress value={45} />
      </CardContent>
    </Card>
  );
}
