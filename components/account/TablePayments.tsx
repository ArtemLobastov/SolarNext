import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    date: '01 may',
    invoice: 'Abner Grech',
    paymentStatus: 'Deposit',
    totalAmount: '€ 250.00',
    paymentMethod: 'Credit Card',
  },
  {
    date: '01 may',
    invoice: 'Marta Abella',
    paymentStatus: 'Finall',
    totalAmount: '€ 150.00',
    paymentMethod: 'PayPal',
  },
  {
    date: '01 may',
    invoice: 'George Saliba',
    paymentStatus: 'Deposit',
    totalAmount: '€ 350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    date: '01 may',
    invoice: 'Ray Borg',
    paymentStatus: 'Finall',
    totalAmount: '€ 450.00',
    paymentMethod: 'Credit Card',
  },
  {
    date: '01 may',
    invoice: 'Elly Zammit',
    paymentStatus: 'Deposit',
    totalAmount: '€ 550.00',
    paymentMethod: 'PayPal',
  },
  {
    date: '01 may',
    invoice: 'Robert Attard',
    paymentStatus: 'Deposit',
    totalAmount: '€ 200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    date: '01 may',
    invoice: 'Peter Ferry',
    paymentStatus: 'Finall',
    totalAmount: '€ 300.00',
    paymentMethod: 'Credit Card',
  },
];

export function TablePayments() {
  return (
    <Table className="h-full">
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead className="">Client</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="">{invoice.date}</TableCell>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">€ 2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
