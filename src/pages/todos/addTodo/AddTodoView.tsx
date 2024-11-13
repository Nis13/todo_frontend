import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import { AddTodoViewProps } from "./addTodo.types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTodoView = ({
  mutateAsync,
  openModal,
  handleOpen,
  handleClose,
}: AddTodoViewProps) => {
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ padding: "1rem" }}
            color="#90caf9"
          >
            Add Task
          </Typography>
          <Formik
            initialValues={{
              title: "",
            }}
            onSubmit={async (values) => {
              console.log("submit", values);
              console.log(values);
              mutateAsync(values);
            }}
          >
            {(props) => {
              const { values, handleChange, errors, touched, isSubmitting } =
                props;
              return (
                <Form>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <TextField
                      label="title"
                      type="title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    {errors.title && touched.title ? (
                      <WarningText message={errors.title} />
                    ) : null}
                    <Box alignSelf={"center"}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "#90caf9" }}
                        disabled={isSubmitting}
                      >
                        Add Task
                      </Button>
                    </Box>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTodoView;
