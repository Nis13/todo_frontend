import { useMutation, useQueryClient } from "react-query";
import deleteTodoApi from "../../../api/deleteTodoApi/deleteTodoApi";
import checkErrorType from "../../../utils/checkErrorType";

const HandleDelete = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, error } = useMutation(deleteTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
    onError: (error: Error) => {
      const errorMessage = checkErrorType(error);
      console.log(errorMessage);
    },
  });
  return { isLoading, mutateAsync, error };
};

export default HandleDelete;
