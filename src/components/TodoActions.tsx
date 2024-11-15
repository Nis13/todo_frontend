import { Box } from "@mui/material";
import Update from "../pages/todos/update/Update";
import { JSX } from "react/jsx-runtime";
import { ToDo } from "../pages/todos/view/todos.types";
import Delete from "../pages/todos/delete/Delete";

const TodoActions = (row: { original: JSX.IntrinsicAttributes & ToDo }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Update {...row.original} />
      <Delete dataId={row.original.id} />
    </Box>
  );
};

export default TodoActions;
