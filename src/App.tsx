import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/queryClient";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
