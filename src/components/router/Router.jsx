import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BookService from "../CheckOut/BookService";
import Bookings from "../Bookings/Bookings";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/chackout/:id',
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`https://car-doctor-server-gold.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>
        },
      ]
    },
  ]);