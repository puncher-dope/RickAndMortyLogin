import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (JSON.stringify(auth.user) === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (typeof auth.user !== 'string') {
  return <Navigate to="/login" state={{ from: location }} replace />;
}
  
  return children;
};