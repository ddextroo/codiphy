import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../routes/mainRoutes";
import { useLogout } from "./../../hooks/useLogout";
import { Navigate } from "react-router-dom";
import profile_pic from "./../../assets/profile.png";
import { db, auth } from "../../firebase/config";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { Helmet } from "react-helmet";
import { getDoc, doc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import badge1 from "./../../assets/badges/badge1.png";
import badge2 from "./../../assets/badges/badge2.png";
import badge3 from "./../../assets/badges/badge3.png";
import badge4 from "./../../assets/badges/badge4.png";
import badge5 from "./../../assets/badges/badge5.png";
import badge6 from "./../../assets/badges/badge6.png";

const Profile = () => {
  const { user, authIsReady } = useContext(AuthContext);
  const { logout } = useLogout();
  const [data, setData] = useState("");

  const badges = [
    { points: 10, image: badge1, title: "Novice Coder" },
    { points: 50, image: badge2, title: "Code Explorer" },
    { points: 100, image: badge3, title: "Scripting Enthusiast" },
    { points: 500, image: badge4, title: "Coding Maestro" },
    { points: 1000, image: badge5, title: "Algorithm Ace" },
    { points: 10000, image: badge6, title: "Programming Prodigy" },
  ];

  const success = () =>
    toast.success("✔️ Password reset email sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: "success",
    });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await getDoc(doc(db, "users", user.uid));
        setData(snapshot.data());
      }
    });
  }, []);

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, user.email);
    success();
  };

  const achievements = badges.filter((badge) => data.points >= badge.points);

  return authIsReady ? (
    <div className="bg-primaryLight font-montserrat p-5">
      {user ? (
        <div className=" flex flex-col justify-center h-auto items-center mt-10">
          <div className="font-bold text-3xl text-primaryDark">Profile</div>
          <Helmet>
            <title>Codiphy :: Profile</title>
          </Helmet>
          <div className="bg-primaryLight2 w-full h-auto m-3 shadow-xl grid grid-cols-1 md:grid-cols-cols-3 place-items-start rounded-xl p-6">
            <div className="flex flex-col items-center md:flex-row text-center md:text-left w-full">
              <img
                src={user.photoURL ? user.photoURL : profile_pic}
                className="w-24 h-24"
              />
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-center md:justify-between items-center w-full">
                  <div className="font-bold text-2xl text-colorAccent">
                    {user.displayName}
                  </div>
                  <div className="flex">
                    <button
                      onClick={logout}
                      className="hidden md:block bg-colorAccent w-36 py-2 px-3 text-primaryLight rounded-xl font-bold"
                    >
                      Log out
                    </button>
                    <button
                      onClick={triggerResetEmail}
                      className="hidden md:block ml-2 bg-green-600 w-48 py-2 px-3 text-primaryLight rounded-xl font-bold"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className=" font-medium text-lg text-primaryDark">
                    {user.email}
                  </div>
                </div>
                <div className="font-medium text-lg text-gray">User ID: {user.uid}</div>
              </div>

              <button
                onClick={logout}
                className=" block md:hidden bg-colorAccent w-36 mt-3 py-2 px-3 text-primaryLight rounded-xl font-bold"
              >
                Log out
              </button>
              <button
                onClick={triggerResetEmail}
                className="block md:hidden mt-2 bg-green-600 w-48 py-2 px-3 text-primaryLight rounded-xl font-bold"
              >
                Change Password
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full text-left first-letter:bg-primaryLight2 shadow-xl m-3 rounded-xl bg-primaryLight2">
            <div className="w-full text-primaryDark font-bold text-3xl p-6 rounded-xl">
              Achievement
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full auto-cols-auto place-items-center p-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center m-2">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-[8rem] h-[8rem] lg:w-[9rem] lg:h-[9rem] mix-blend-multiply scale-150"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment.</h1>
  );
};
//wwwwwwwddfdwwwwwewww
export default Profile;
