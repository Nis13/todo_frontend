import { useQuery } from "react-query";
import fetchTodoApi from "../../api/fetchTodoApi/fetchTodoApi";
import { useMemo } from "react";
import { formatDate } from "../../utils/formatDate";
import TodoActions from "../../components/TodoActions";

export const useTodos = () => {
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
        Cell: ({ row }: { row: any }) => <TodoActions {...row} />,
      },
    ],
    []
  );
  return { isLoading, todoData: memoizedData, isError, error, columns };
};
