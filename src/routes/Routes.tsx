import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

export const allRoutes = {
  publicRoutes: [
    { id: 1, path: "login", element: <Login /> },
    { id: 2, path: "signup", element: <Signup /> },
  ],
  protectedRoutes: [{ id: 3, path: "/home", element: <Home /> }],
};
