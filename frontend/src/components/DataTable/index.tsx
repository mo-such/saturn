import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { styles } from './styles';
import { startCase, toString } from './utils';

interface DataTableProps {
  columns: string[];
  rows: Record<string | symbol, any>[];
}

export const DataTable = ({ columns, rows }: DataTableProps) => {
  return (
    <TableContainer sx={styles.root}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell sx={styles.header} key={index}>
                {startCase(column)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={String(Object.values(row))}>
              {columns.map((column, index) => (
                <TableCell key={index}>{toString(row[column])}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
