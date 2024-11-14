import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { allRoutes } from "./Routes";
import Layout from "../layout/Layout";
import Notfound from "../pages/notFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {allRoutes.publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
        <Route path="/" element={<ProtectedRoute />}>
          {allRoutes.protectedRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
