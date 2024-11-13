import axios from "axios";

const checkErrorType = (error: Error) => {
  if (axios.isAxiosError(error) && error.response) {
    return `Error:${error.response.data.message}`;
  } else if (error instanceof Error) return `Error: ${error.message}`;
};

export default checkErrorType;
