import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path:'/create',
      element:<Create/>
    },
    {
      path:'/update/:id',
      element:<Update/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
