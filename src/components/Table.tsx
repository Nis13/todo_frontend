import { Column, usePagination, useSortBy, useTable } from "react-table";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      initialState: {
        pageSize: 5,
        sortBy: [
          {
            id: "createdAt",
            desc: true,
          },
        ],
      },
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
    pageCount,
    state: { pageIndex },
  } = tableInstance;
  return (
    <TableContainer component={Paper}>
      <Table
        size="small"
        aria-label="a dense table"
        {...getTableProps()}
        sx={{ margin: "auto", border: 1 }}
      >
        <TableHead>
          {headerGroups.map((hg) => (
            <TableRow
              {...hg.getHeaderGroupProps()}
              key={hg.getHeaderGroupProps().key}
            >
              {hg.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.getHeaderProps().key}
                  sx={{
                    borderBottom: 1,
                    backgroundColor: "primary.main",
                    color: "white",
                  }}
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
        <Box display={"flex"} justifyContent={"center"}>
          {canPreviousPage && (
            <IconButton
              color="primary"
              disabled={!canPreviousPage}
              onClick={previousPage}
              sx={{ backgroundColor: "background.surface" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {pageCount > 1 && (
            <Box display={"flex"} alignItems={"center"}>
              <div>Page:</div>
              <strong>
                {pageIndex + 1} of {pageCount}
              </strong>
            </Box>
          )}
          {canNextPage && (
            <IconButton
              color="primary"
              disabled={!canNextPage}
              onClick={nextPage}
              sx={{ bgcolor: "background.surface" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Container>
    </TableContainer>
  );
};

export default ReactTable;
