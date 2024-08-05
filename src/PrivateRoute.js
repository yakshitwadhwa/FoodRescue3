import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;