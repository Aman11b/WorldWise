import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/fakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAutheticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAutheticated) navigate("/");
    },
    [isAutheticated, navigate],
  );
  return isAutheticated ? children : null;
}

export default ProtectedRoute;
