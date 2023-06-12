import React from "react";
import { useAdmin } from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import DomLoader from "../libs/Loader/DomLoader";

const AdminPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  if (loading || isLoading) {
    return <DomLoader></DomLoader>;
  }
  if (user && isAdmin) {
    return children;
  }
};

export default AdminPrivate;
