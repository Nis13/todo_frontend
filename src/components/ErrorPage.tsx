import { Box, Button, Typography } from "@mui/material";

const ErrorPage = ({ message }: { message: string }) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Box style={{ textAlign: "center", padding: "50px" }}>
      <Typography variant="h4">Something Went Wrong: {message}</Typography>
      <Box>
        We are sorry, but an error has occurred. Please try again later.
      </Box>
      <Box margin={"2rem"}>
        <Button
          onClick={handleReload}
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
        >
          Reload Page
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
