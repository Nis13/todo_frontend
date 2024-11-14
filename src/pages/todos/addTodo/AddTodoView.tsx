import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import { AddTodoViewProps } from "./addTodo.types";
import { addSchema } from "./addTodo.schema";

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
  handleAddTask,
  openModal,
  handleOpen,
  handleClose,
  isLoading,
  response,
  isError,
}: AddTodoViewProps) => {
  return (
    <Container sx={{ margin: "1rem 0" }}>
      <Box alignContent={"center"}>
        <Button variant="contained" onClick={handleOpen} size="large">
          Add Task
        </Button>
      </Box>
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
            color="primary.main"
          >
            Add Task
          </Typography>
          <Formik
            initialValues={{
              title: "",
            }}
            validationSchema={addSchema}
            onSubmit={async (values) => {
              handleAddTask(values);
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
                        sx={{ backgroundColor: "primary.main" }}
                        disabled={isLoading || isSubmitting || isError}
                      >
                        Add Task
                      </Button>
                    </Box>
                    <Box>
                      <WarningText message={response} />
                    </Box>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddTodoView;
