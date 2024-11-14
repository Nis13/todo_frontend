import { useMutation, useQueryClient } from "react-query";
import deleteTodoApi from "../../../api/deleteTodoApi/deleteTodoApi";

const HandleDelete = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, error } = useMutation(deleteTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  const handleDelete = (id: string) => mutateAsync(id);
  return { isLoading, handleDelete, error };
};

export default HandleDelete;
