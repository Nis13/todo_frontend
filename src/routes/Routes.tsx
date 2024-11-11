import Login from "../pages/login/Login";

export const Routes = {
  publicRoutes: [{ id: 1, path: "login", element: <Login /> }],
  protectedRoutes: [{}],
};
