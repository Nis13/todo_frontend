import { useMutation, useQueryClient } from "react-query";
import useDeleteTodoApi from "../../../api/deleteTodoApi/useDeleteTodoApi";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";

const useDelete = () => {
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, error, isError } = useMutation(
    useDeleteTodoApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        handleClose();
      },
      onError: (error: Error) => {
        const message = checkErrorType(error);
        setResponse(message);
      },
    }
  );

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDelete = (id: string) => mutateAsync(id);
  return {
    isLoading,
    handleDelete,
    error,
    openModal,
    handleClose,
    handleOpen,
    isError,
    response,
  };
};

export default useDelete;
