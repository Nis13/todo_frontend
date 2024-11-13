import { useQuery } from "react-query";
import fetchTodoApi from "../../api/fetchTodoApi/fetchTodoApi";
import { useMemo } from "react";
import { Button } from "@mui/material";
import HandleDelete from "./handleDelete/useHandleDelete";
import DeleteIcon from "@mui/icons-material/Delete";
import Update from "./update/Update";
import { formatDate } from "../../utils/formatDate";

export const useTodos = () => {
  const { mutateAsync } = HandleDelete();
  const { isLoading, data, isError, error } = useQuery("todo", fetchTodoApi);
  const memoizedData = useMemo(() => data, [data]);
  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Status", accessor: "status" },
      {
        Header: "Date Created",
        accessor: "createdAt",
        Cell: ({ value }: { value: string }) => {
          return formatDate(value);
        },
      },
      {
        Header: "Actions",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cell: ({ row }: { row: any }) => (
          <>
            <Update {...row.original} />
            <Button
              key={row.original.id}
              onClick={() => {
                mutateAsync(row.original.id);
              }}
            >
              <DeleteIcon />
            </Button>
          </>
        ),
      },
    ],
    [mutateAsync]
  );
  return { isLoading, todoData: memoizedData, isError, error, columns };
};
