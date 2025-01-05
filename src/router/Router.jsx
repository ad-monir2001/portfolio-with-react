import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../components/Details";
import Error from "../pages/Error";

export  const router = createBrowserRouter(
   [
      {
         path: '/',
         element: <Home></Home>,
         errorElement: <Error></Error>,
         
      },
      {
         path: 'details/:id',
         element:<Details></Details>

      }
   ]
)