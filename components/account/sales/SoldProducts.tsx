import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductSold } from '@/lib/salesDB';
import { Loader2, Plus } from 'lucide-react';
import { SoldProductsTable } from './SoldProductsTable';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
type SoldProductsProps = {
  productList: ProductSold[];
  setProductList: (
    value: ProductSold[] | ((prevVar: ProductSold[]) => ProductSold[])
  ) => void;
};
export default function SoldProducts({
  productList,
  setProductList,
}: SoldProductsProps) {
  const [productInfo, setProductInfo] = useState<{
    productName: string;
    quantity: number | string;
    price: number | string;
  }>({
    productName: '',
    quantity: '',
    price: '',
  });
  return (
    <div className="grid gap-3">
      <Label>Product Name</Label>
      <Input
        placeholder="Se inverter 3.68kw"
        type="text"
        value={productInfo.productName}
        onChange={(e) =>
          setProductInfo((prev) => ({ ...prev, productName: e.target.value }))
        }
      />
      <Label>Quantity</Label>

      <Input
        placeholder="10"
        type="number"
        value={productInfo.quantity}
        onChange={(e) =>
          setProductInfo((prev) => ({ ...prev, quantity: +e.target.value }))
        }
      />
      <Label>Price per unit</Label>

      <Input
        placeholder="10500"
        type="number"
        value={productInfo.price}
        onChange={(e) =>
          setProductInfo((prev) => ({ ...prev, price: +e.target.value }))
        }
      />
      <Button
        size="lg"
        type="button"
        variant="outline"
        className="h-10 gap-1 w-full mb-3"
        onClick={() => {
          setProductList((list) => [...list, productInfo as ProductSold]);
          setProductInfo({
            productName: '',
            quantity: '',
            price: '',
          });
        }}
      >
        <Plus className="h-3.5 w-3.5" />
        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
          Add product
        </span>
      </Button>
      <SoldProductsTable productList={productList} />
    </div>
  );
}
