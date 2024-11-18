export type DeleteViewProps = {
  rowId: string;
  handleDelete: (rowId: string) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  errorResponse: string | null;
  isLoading: boolean;
};
