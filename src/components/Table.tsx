import { Column, usePagination, useSortBy, useTable } from "react-table";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type ReactTableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

const ReactTable = <T extends object>({
  columns,
  data,
}: ReactTableProps<T>) => {
  const tableInstance = useTable<T>(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
        {...getTableProps()}
      >
        <TableHead>
          {headerGroups.map((hg) => (
            <TableRow
              {...hg.getHeaderGroupProps()}
              key={hg.getHeaderGroupProps().key}
            >
              {hg.headers.map((column) => (
                <TableCell
                  align="right"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.getHeaderProps().key}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " ⬆️ " : " ⬇️ "}</span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                {...row.getRowProps()}
                key={row.getRowProps().key}
              >
                {row.cells.map((cell) => (
                  <TableCell
                    align="right"
                    {...cell.getCellProps()}
                    key={cell.getCellProps().key}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Container>
        <Button
          variant="contained"
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          Prev
        </Button>
        <Button variant="contained" disabled={!canNextPage} onClick={nextPage}>
          Next
        </Button>
      </Container>
    </TableContainer>
  );
};

export default ReactTable;
