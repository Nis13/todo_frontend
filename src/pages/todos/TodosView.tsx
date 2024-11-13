import { Box } from "@mui/material";
import { TodosViewProps } from "./todo.types";
import ReactTable from "../../components/Table";
import AddTodo from "./addTodo/AddTodo";
export const TodosView = ({
  isLoading,
  todoData,
  isError,
  error,
  columns,
}: TodosViewProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (isError && error instanceof Error) return <Box>{error.message}</Box>;
  return (
    <>
      <ReactTable columns={columns} data={todoData} />
      {/* <Button onClick={handleClick}>Add</Button> */}
      <AddTodo />
    </>
  );
};
