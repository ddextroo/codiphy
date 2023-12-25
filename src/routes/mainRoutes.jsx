import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./../App.jsx";
import Login from "./../pages/auth/login.jsx";
import Signup from "./../pages/auth/signup.jsx";
import ForgotPass from "./../pages/auth/forgot_password.jsx";
import Demo from "./../pages/quiz/demo/demo.jsx";
import Quiz from "./../pages/quiz/home/quiz.jsx";
import Error from "./../Error.jsx";
import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const AppContainer = () => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <Error />,
    },
    {
      path: "/demo",
      element: <Demo />,
      errorElement: <Error />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
      errorElement: <Error />,
    },
    {
      path: "/forgotpass",
      element: <ForgotPass />,
      errorElement: <Error />,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    return unsubscribe;
  }, []);

  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </React.StrictMode>
  );
};
export const AuthContext = createContext();

export default AppContainer;
