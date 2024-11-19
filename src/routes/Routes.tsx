import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import TodoPage from '../pages/todos/TodoPage';

export const allRoutes = {
  publicRoutes: [
    { id: 1, path: 'login', element: <Login /> },
    { id: 2, path: 'signup', element: <Signup /> },
    { id: 3, path: '/', element: <Home /> }
  ],
  protectedRoutes: [{ id: 4, path: '/todos', element: <TodoPage /> }]
};
