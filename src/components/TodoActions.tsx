import { Box } from '@mui/material';
import Update from '../pages/todos/update/Update';
import { ToDo } from '../pages/todos/view/todos.types';
import Delete from '../pages/todos/delete/Delete';

const TodoActions = (row: ToDo) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Update {...row} />
      <Delete dataId={row.id} />
    </Box>
  );
};

export default TodoActions;
