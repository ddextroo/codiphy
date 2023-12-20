import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/auth/login.jsx";
import Signup from "./pages/auth/signup.jsx";
import Demo from "./pages/quiz/demo/demo.jsx";
import Error from "./Error.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initialState, reducer } from "./controller/authContext.jsx";
import { useReducer, createContext } from "react";

const AppContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  ]);

  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

export const AuthContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(<AppContainer />);
