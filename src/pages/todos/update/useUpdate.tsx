import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useUpdateTodoApi from "../../../api/updateTodoApi/useUpdateTodoApi";
import checkErrorType from "../../../utils/checkErrorType";
import { UpdateTodoApiProps } from "./update.types";

export const useUpdate = () => {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const [errorResponse, setErrorResponse] = useState("");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isLoading, isError, error, mutateAsync } = useMutation(
    useUpdateTodoApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        handleClose();
      },
      onError: (error: Error) => {
        const message = checkErrorType(error);
        setErrorResponse(message);
      },
    }
  );

  const handleSubmit = (values: UpdateTodoApiProps) => mutateAsync(values);
  return {
    isLoading,
    openModal,
    handleClose,
    handleOpen,
    isError,
    error,
    handleSubmit,
    errorResponse,
  };
};
