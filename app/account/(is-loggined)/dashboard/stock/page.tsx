import AddProduct from '@/components/account/stock/AddProduct';
import { ProductDetails } from '@/components/account/stock/ProductDetails';
import ProductOrder from '@/components/account/stock/ProductOrder';
import StockList from '@/components/account/stock/StockList';
import { Button } from '@/components/ui/button';

export default function ClientsPage() {
  return (
    <main className="flex flex-col gap-3 pt-3">
      <StockList />
      {/* TODO ADD product form */}
      <Button variant={'outline'} size={'lg'} className="bg-muted">
        + Add new product
      </Button>
      <AddProduct />
      <ProductDetails />
      <ProductOrder />
    </main>
  );
}
