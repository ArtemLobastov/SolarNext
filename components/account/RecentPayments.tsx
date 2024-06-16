import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TablePayments } from './TablePayments';

export default function RecentPayments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <TablePayments />
      </CardContent>
    </Card>
  );
}
