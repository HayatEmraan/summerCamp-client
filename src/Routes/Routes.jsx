import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Not404 from "../pages/Not404/Not404";
import SignIn from "../SEC/SignIn";
import SignUp from "../SEC/SignUp";
import Courses from "../pages/Courses/Courses";
import About from "../pages/About/About";
import Instructors from "../pages/Instructors/Instructors";
import Instructor from "../pages/Instructor/Instructor";
import DashBoard from "../pages/Dashboard/DashBoard";
import Payment from "../pages/Payment/Payment";
import MyCourses from "../pages/My Courses/MyCourses";
import Reviews from "../pages/Reviews/Reviews";
import MyCart from "../pages/My Cart/MyCart";
import MyProfile from "../pages/My Profile/MyProfile";
import PrivateUser from "./PrivateUser";
import Checkout from "../pages/Checkout/Checkout";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/instructor/:name",
        element: <Instructor />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateUser>
            <DashBoard></DashBoard>
          </PrivateUser>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateUser>
                <MyCourses />
              </PrivateUser>
            ),
          },
          {
            path: "/dashboard/payment",
            element: (
              <PrivateUser>
                <Payment />
              </PrivateUser>
            ),
          },
          {
            path: "/dashboard/reviews",
            element: (
              <PrivateUser>
                <Reviews />
              </PrivateUser>
            ),
          },
          {
            path: "/dashboard/cart",
            element: (
              <PrivateUser>
                <MyCart />
              </PrivateUser>
            ),
          },
          {
            path: "/dashboard/checkout",
            element: (
              <PrivateUser>
                <Checkout />
              </PrivateUser>
            ),
          },
          {
            path: "/dashboard/profile",
            element: (
              <PrivateUser>
                <MyProfile />
              </PrivateUser>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Not404 />,
  },
]);
