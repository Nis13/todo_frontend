import { Box, Tab, Tabs } from "@mui/material";
import { TodosViewProps } from "./todos.types";
import ReactTable from "../../../components/Table";
import CircularProgress from "@mui/material/CircularProgress";
import NoTask from "../../../components/NoTask";

export const TodosView = ({
  isLoading,
  isError,
  error,
  columns,
  activeTab,
  handleChange,
  filteredTodos,
  data,
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
  console.log(data);
  if (data.length == 0) return <NoTask />;

  if (isError && error instanceof Error) return <Box>{error.message}</Box>;

  return (
    <>
      <Tabs value={activeTab} onChange={handleChange} aria-label="todo tabs">
        <Tab label="All" value="all" />
        <Tab label="Pending" value="pending" />
        <Tab label="Completed" value="completed" />
      </Tabs>

      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"60%"}
        margin={"auto"}
        gap={"2rem"}
      >
        {filteredTodos.length == 0 ? (
          <NoTask />
        ) : (
          <ReactTable columns={columns} data={filteredTodos} />
        )}
      </Box>
    </>
  );
};
