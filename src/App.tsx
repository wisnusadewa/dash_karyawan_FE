import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './app/auth/Login';
import Register from './app/auth/Register';
import Dashboard from './app/dashboard';
import Edit from './app/edit';
import Employees from './app/employees';
import Profile from './app/profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/employees',
      element: <Employees />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/edit/:id',
      element: <Edit />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
