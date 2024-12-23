import { useQuery } from "react-query";
import useFetchTodoApi from "../../../api/fetchTodoApi/useFetchTodoApi";
import { useMemo, useState } from "react";
import { formatDate } from "../../../utils/formatDate";
import TodoActions from "../../../components/TodoActions";
import { ToDo, TodoStatus } from "./todos.types";

export const useTodos = () => {
  const { isLoading, data, isError, error } = useQuery("todo", useFetchTodoApi);
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "completed">(
    "all"
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: TodoStatus) => {
    setActiveTab(newValue);
  };
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
        Cell: ({ row }: { row: { original: ToDo } }) => (
          <TodoActions {...row.original} />
        ),
      },
    ],
    []
  );

  const filteredTodos = memoizedData
    ? memoizedData.filter((todo: ToDo) => {
        if (activeTab === "all") return true;
        return todo.status === activeTab;
      })
    : null;

  return {
    isLoading,
    isError,
    error,
    columns,
    handleChange,
    activeTab,
    filteredTodos,
    data,
  };
};
