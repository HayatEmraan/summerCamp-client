import React from "react";
import useAuth from "../Hooks/useAuth";
import { useInstructor } from "../Hooks/useInstructor";
import DomLoader from "../libs/Loader/DomLoader";
import Not404 from "../pages/Not404/Not404";

const InstructorPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const { isInstructor, isLoading } = useInstructor();
  if (loading || isLoading) {
    return <DomLoader></DomLoader>;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Not404></Not404>;
};

export default InstructorPrivate;
