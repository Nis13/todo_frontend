import { useMutation, useQueryClient } from "react-query";
import useDeleteTodoApi from "../../../api/deleteTodoApi/useDeleteTodoApi";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";

const useDelete = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(useDeleteTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
      handleClose();
    },
    onError: (error: Error) => {
      const message = checkErrorType(error);
      setErrorResponse(message);
    },
  });

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDelete = (id: string) => mutateAsync(id);
  return {
    isLoading,
    handleDelete,
    openModal,
    handleClose,
    handleOpen,
    errorResponse,
  };
};

export default useDelete;
