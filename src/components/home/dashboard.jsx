import { useContext } from "react";
import { AuthContext } from "../../routes/mainRoutes";
import { useLogout } from "./../../hooks/useLogout";
import { Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { user, authIsReady } = useContext(AuthContext);
  const { logout } = useLogout();

  return authIsReady ? (
    <div className="font-montserrat min-h-screen">
      {user ? (
        <div className="flex flex-col space-y-2 mt-2">
          <h1>{user.email}</h1>
          <h1>{user.displayName}</h1>
          <h1>{user.reloadUserInfo.screenName}</h1>
          <div>
            <button className="py-2 w-32 text-primaryLight bg-colorAccent font-bold rounded-xl " onClick={logout}>
              Logout
            </button>
          </div>
          <div>
            <button className="py-2 w-32 text-primaryLight bg-green-800 font-bold rounded-xl ">
              <Link to="/quiz/start">Take quiz</Link>
            </button>
          </div>
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
