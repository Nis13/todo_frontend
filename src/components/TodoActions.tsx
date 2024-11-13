import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HandleDelete from "../pages/todos/handleDelete/useHandleDelete";
import Update from "../pages/todos/update/Update";
import { JSX } from "react/jsx-runtime";
import { ToDo } from "../pages/todos/todo.types";

const TodoActions = (row: { original: JSX.IntrinsicAttributes & ToDo }) => {
  const { handleDelete } = HandleDelete();
  return (
    <Box sx={{ display: "flex" }}>
      <Update {...row.original} />
      <Button
        key={row.original.id}
        onClick={() => {
          handleDelete(row.original.id);
        }}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
};

export default TodoActions;
