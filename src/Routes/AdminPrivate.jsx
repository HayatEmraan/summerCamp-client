import React from "react";
import { useAdmin } from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import DomLoader from "../libs/Loader/DomLoader";
import Not404 from "../pages/Not404/Not404";

const AdminPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  if (loading || isLoading) {
    return <DomLoader></DomLoader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Not404></Not404>;
};

export default AdminPrivate;
