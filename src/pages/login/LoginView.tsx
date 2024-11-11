import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { LoginViewProps } from "./login.types";
import WarningText from "../../components/WarningText";
import { loginSchema } from "./login.schema";

export const LoginView: React.FC<LoginViewProps> = ({
  isLoading,
  mutate,
  response,
}) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "2rem",
          width: "30rem",
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{ padding: "1rem" }}
          color="#90caf9"
        >
          Login
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            mutate(values);
          }}
        >
          {(props) => {
            const { values, handleChange, errors, touched } = props;
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
                    label="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <WarningText message={errors.email} />
                  ) : null}

                  <TextField
                    label="password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <WarningText message={errors.password} />
                  ) : null}
                  <Box alignSelf={"center"}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: "#90caf9" }}
                      disabled={isLoading}
                    >
                      Login
                    </Button>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
        <Box color={"red"}>{isLoading ? "Loading...." : response}</Box>
      </Paper>
    </Container>
  );
};
