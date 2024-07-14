import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ProductOrder() {
  return (
    <Card className=" h-[300px] bg-muted">
      <h1 className="text-2xl">Product order form</h1>
      <Input type="text" placeholder="placeholder"></Input>
      <Input type="text" placeholder="placeholder"></Input>
      <Input type="text" placeholder="placeholder"></Input>
    </Card>
  );
}
