import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoutes";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
