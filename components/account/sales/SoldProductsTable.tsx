import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ProductSold } from '@/lib/salesDB';
function formattedCur(amount: number = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}
type SoldProductsTableProps = {
  productList: ProductSold[] | undefined;
};
export function SoldProductsTable({ productList }: SoldProductsTableProps) {
  return (
    <Table className="bg-background">
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productList?.map((product) => (
          <TableRow key={product?.productId}>
            <TableCell>{product?.productName}</TableCell>
            <TableCell>{product?.quantity}</TableCell>
            <TableCell className="text-right">
              {formattedCur(product?.price)}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">
            {formattedCur(
              productList?.reduce(
                (sum, cur) => sum + cur!.price * cur!.quantity,
                0
              )
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
