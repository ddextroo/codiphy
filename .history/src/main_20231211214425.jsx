import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/auth/login.jsx'
import Demo from './pages/quiz/demo/demo.jsx'
import Error from './Error.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
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
    path: "/hero",
    element: <Demo />, 
    errorElement: <Error />,
  },
  {
    path: "/objective",
    element: <Demo />, 
    errorElement: <Error />,
  },
  {
    path: "/language",
    element: <Demo />, 
    errorElement: <Error />,
  },
  {
    path: "/feature",
    element: <Demo />, 
    errorElement: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
