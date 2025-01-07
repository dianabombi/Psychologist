import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode"; 

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");
  const location = useLocation();
  let isValid = false;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken); 
      isValid = decodedToken.exp * 1000 > Date.now();
      console.log("Token valid:", isValid);
    } catch (error) {
      console.error("Error decoding token:", error);
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
