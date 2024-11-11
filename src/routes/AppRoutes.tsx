import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRoutes;
