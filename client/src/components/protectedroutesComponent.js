import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  let isValid = false;

  // Check if token exists
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      isValid = decodedToken.exp * 1000 > Date.now(); // Validate expiration
    } catch (error) {
      isValid = false;
    }
  }

  if (!isValid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
