import { Box } from "@mui/material";
interface WarningTextProps {
  message: string | null;
  boxSX?: React.CSSProperties;
}

const WarningText = ({ message, boxSX }: WarningTextProps) => {
  return (
    <Box color={"red"} sx={{ ...boxSX }}>
      {message}
    </Box>
  );
};

export default WarningText;
