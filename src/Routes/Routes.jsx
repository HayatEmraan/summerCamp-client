import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Not404 from "../pages/Not404/Not404";
import SignIn from "../SEC/SignIn";
import SignUp from "../SEC/SignUp";
import Courses from "../pages/Courses/Courses";
import About from "../pages/About/About";
import Instructors from "../pages/Instructors/Instructors";

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
        path: "/about",
        element: <About />,
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
