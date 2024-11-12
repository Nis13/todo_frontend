import { useQuery } from "react-query";
import useFetchTodoApi from "../../api/fetchTodoApi/fetchTodoApi";
import { useMemo } from "react";

export const useTodos = () => {
  const { isLoading, data, isError, error } = useQuery("todo", useFetchTodoApi);
  const memoizedData = useMemo(() => data, [data]);
  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Status", accessor: "status" },
      { Header: "Date Created", accessor: "createdAt" },
    ],
    []
  );
  return { isLoading, memoizedData, isError, error, columns };
};
