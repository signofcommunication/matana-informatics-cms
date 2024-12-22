import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../Navbar/Navbar";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PrivateRoute;
