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
import Loading from "../../components/Loading";

export const LoginView: React.FC<LoginViewProps> = ({
  isLoading,
  handleLogin,
  errorResponse,
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
          color="primary"
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
            handleLogin(values);
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
                    label="email"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
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
                    disabled={isLoading}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  {errors.password && touched.password ? (
                    <WarningText message={errors.password} />
                  ) : null}
                  <Box alignSelf={"center"}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: "primary.main" }}
                      disabled={isLoading || isSubmitting}
                    >
                      Login
                    </Button>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
        <Box>
          {isLoading ? <Loading height="2rem" /> : null}
          <WarningText message={errorResponse} />
        </Box>
      </Paper>
    </Container>
  );
};
