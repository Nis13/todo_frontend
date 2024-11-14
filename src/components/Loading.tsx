import { Box, CircularProgress } from "@mui/material";
const Loading = ({ height = "100vh" }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={height}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
