import { Goal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SalesKpiCard() {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
        <CardTitle className="font-medium">Closed deals in June</CardTitle>
        <Goal className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="text-2xl font-bold">+25</div>
        <p className="text-xs text-muted-foreground">45% of the Month Goal</p>
        <Progress value={45} />
      </CardContent>
    </Card>
  );
}
