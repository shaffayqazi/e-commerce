import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [auth] = useAuth(); // Destructure only the necessary value from useAuth
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        console.log(auth.token);

        // Use template literals for the URL and avoid hardcoding the base URL
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/user-auth`,
          {
            headers: {
              Authorization: auth?.token,
            },
          }
        );

        if (res.data.isAuth) {
          console.log(res.data.isAuth);
          setIsAuth(true);
        } else {
          setIsAuth(false);
          console.log("false");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuth(false);
      }
    };

    if (auth?.token) {
      authCheck();
      console.log(auth.token);
    }
    //eslint-disable-next-line
  }, [auth]);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
