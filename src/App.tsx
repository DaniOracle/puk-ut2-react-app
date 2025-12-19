/* React Router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* Pages */
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'home',
        element: <Home />
      },      

    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;