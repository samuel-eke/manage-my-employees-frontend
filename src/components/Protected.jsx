import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

export default function Protected({ children }) {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}
