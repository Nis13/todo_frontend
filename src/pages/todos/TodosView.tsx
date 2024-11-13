import { Box } from "@mui/material";
import { TodosViewProps } from "./todo.types";
import ReactTable from "../../components/Table";
import AddTodo from "./addTodo/AddTodo";
import CircularProgress from "@mui/joy/CircularProgress";

export const TodosView = ({
  isLoading,
  todoData,
  isError,
  error,
  columns,
}: TodosViewProps) => {
  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (isError && error instanceof Error) return <Box>{error.message}</Box>;
  return (
    <>
      <AddTodo />
      <ReactTable columns={columns} data={todoData} />
    </>
  );
};
