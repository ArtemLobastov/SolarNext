import { Download } from 'lucide-react';
import { Button } from './button';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { Row } from '@tanstack/react-table';

export default function SaveXmlBtn({
  table,
  fileName = 'table',
}: {
  table: any;
  fileName?: string;
}) {
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: fileName,
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });
  //TODO fix xml export of sales table
  const exportExcel = (rows: Row<any>[]) => {
    const rowData = rows.map((row) => row.original);
    console.log(rowData.map((row) => row.date.toLocaleDateString()));
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };
  return (
    <Button
      type="button"
      variant={'outline'}
      onClick={() => exportExcel(table.getFilteredRowModel().rows)}
    >
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  );
}
