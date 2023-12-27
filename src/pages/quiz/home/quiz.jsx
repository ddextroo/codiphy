import { useContext } from "react";
import { AuthContext } from "../../../routes/mainRoutes";
import { useLogout } from "./../../../hooks/useLogout";
import { Navigate, Link } from "react-router-dom";
function Quiz() {
  const { user, authIsReady } = useContext(AuthContext);
  const { logout } = useLogout();

  return authIsReady ? (
    <div className="App">
      {user ? (
        <div className="flex flex-col">
          <h1>{user.email}</h1>
          <h1>{user.displayName}</h1>
          <h1>{user.reloadUserInfo.screenName}</h1>
          <button className="btn login-btn" onClick={logout}>
            Logout
          </button>
          <button className="w-32 py-4 bg-green-800 flex flex-row justify-center rounded-xl items-center space-x-3">
            <Link to="/start">Take quiz</Link>
          </button>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
}

export default Quiz;
