import { useQuery } from "react-query";
import fetchTodoApi from "../../api/fetchTodoApi/fetchTodoApi";
import { useMemo } from "react";
import { Button } from "@mui/material";
import HandleDelete from "./handleDelete/useHandleDelete";

export const useTodos = () => {
  const { mutateAsync } = HandleDelete();
  const { isLoading, data, isError, error } = useQuery("todo", fetchTodoApi);
  const memoizedData = useMemo(() => data, [data]);
  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Status", accessor: "status" },
      { Header: "Date Created", accessor: "createdAt" },
      {
        Header: "Actions",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cell: ({ row }: { row: any }) => (
          <>
            <Button
              onClick={() => {
                // <BasicModal />;
              }}
            >
              Update
            </Button>
            <Button
              key={row.original.id}
              onClick={() => {
                mutateAsync(row.original.id);
              }}
            >
              Delete
            </Button>
          </>
        ),
      },
    ],
    []
  );
  return { isLoading, memoizedData, isError, error, columns };
};
