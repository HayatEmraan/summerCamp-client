import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import DomLoader from "../libs/Loader/DomLoader";

const PrivateUser = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <DomLoader></DomLoader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateUser;
