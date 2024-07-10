import { SaveIcon } from 'lucide-react';
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
  const exportExcel = (rows: Row<any>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };
  return (
    <Button
      type="button"
      variant={'outline'}
      onClick={() => exportExcel(table.getFilteredRowModel().rows)}
    >
      <SaveIcon className="h-4 w-4 mr-2" />
      EXEL
    </Button>
  );
}
