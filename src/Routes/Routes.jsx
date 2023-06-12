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
import DashAdmin from "../pages/Dashboard/AdminPanel/DashAdmin/DashAdmin";
import Users from "../pages/Dashboard/AdminPanel/Users/Users";
import Orders from "../pages/Dashboard/AdminPanel/Orders/Orders";
import ClassesList from "../pages/Dashboard/AdminPanel/Classes/Classes";
import CoursesList from "../pages/Dashboard/AdminPanel/CoursesList/CoursesList";
import AddAClass from "../pages/Dashboard/InstructorPanel/AddAClass/AddAClass";
import MyClass from "../pages/Dashboard/InstructorPanel/MyClass/MyClass";
import AdminPrivate from "./AdminPrivate";

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
            path: "/dashboard/courses",
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
          {
            path: "/dashboard/admin",
            element: (
              <AdminPrivate>
                <DashAdmin />
              </AdminPrivate>
            ),
          },
          {
            path: "/dashboard/users",
            element: (
              <AdminPrivate>
                <Users />
              </AdminPrivate>
            ),
          },
          {
            path: "/dashboard/orders",
            element: (
              <AdminPrivate>
                <Orders />
              </AdminPrivate>
            ),
          },
          {
            path: "/dashboard/classes",
            element: (
              <AdminPrivate>
                <ClassesList />
              </AdminPrivate>
            ),
          },
          {
            path: "/dashboard/courses/list",
            element: (
              <AdminPrivate>
                <CoursesList />
              </AdminPrivate>
            ),
          },
          {
            path: "/dashboard/addaclass",
            element: <AddAClass />,
          },
          {
            path: "/dashboard/myclass",
            element: <MyClass />,
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
