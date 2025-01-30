import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './app/auth/Login';
import Register from './app/auth/Register';
import Dashboard from './app/dashboard';
import Employees from './app/employees';

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
