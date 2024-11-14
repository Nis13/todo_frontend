import { Box, Tab, Tabs } from "@mui/material";
import { TodosViewProps } from "./todo.types";
import ReactTable from "../../components/Table";
import AddTodo from "./addTodo/AddTodo";
import CircularProgress from "@mui/material/CircularProgress";

export const TodosView = ({
  isLoading,
  isError,
  error,
  columns,
  activeTab,
  handleChange,
  filteredTodos,
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
      <Tabs value={activeTab} onChange={handleChange} aria-label="todo tabs">
        <Tab label="All" value="all" />
        <Tab label="Pending" value="pending" />
        <Tab label="Completed" value="completed" />
      </Tabs>
      <ReactTable columns={columns} data={filteredTodos} />
    </>
  );
};
