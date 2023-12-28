import { useContext } from "react";
import { AuthContext } from "../../routes/mainRoutes";
import { useLogout } from "./../../hooks/useLogout";
import { Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { user, authIsReady } = useContext(AuthContext);
  const { logout } = useLogout();

  return authIsReady ? (
      <div className="Home flex font-montserrat">
        {user ? (
          <div className="flex flex-col">
            <h1>{user.email}</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.reloadUserInfo.screenName}</h1>
            <button className="btn login-btn" onClick={logout}>
              Logout
            </button>
            <button className="py-2 w-32 text-primaryLight bg-green-800 font-bold rounded-xl ">
              <Link to="/quiz/start">Take quiz</Link>
            </button>
          </div>
        ) : (
          <Navigate to="/" />
        )}
      </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};

export default Dashboard;
