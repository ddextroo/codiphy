import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase/config";
import { useEffect, useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../routes/mainRoutes";

import badge1 from "./../../assets/badges/badge1.png";
import badge2 from "./../../assets/badges/badge2.png";
import badge3 from "./../../assets/badges/badge3.png";
import badge4 from "./../../assets/badges/badge4.png";
import badge5 from "./../../assets/badges/badge5.png";
import badge6 from "./../../assets/badges/badge6.png";
import Profile from "./../../assets/profile.png";
const Leaderboards = () => {
  const [userPoints, setUserPoints] = useState([]);
  const { user, authIsReady } = useContext(AuthContext);

  const badges = [
    { points: 10, image: badge1, title: "Novice Coder" },
    { points: 50, image: badge2, title: "Code Explorer" },
    { points: 100, image: badge3, title: "Scripting Enthusiast" },
    { points: 500, image: badge4, title: "Coding Maestro" },
    { points: 1000, image: badge5, title: "Algorithm Ace" },
    { points: 10000, image: badge6, title: "Programming Prodigy" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const usersCollection = collection(db, "users");
          const querySnapshot = await getDocs(usersCollection);

          const pointsArray = [];

          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            const points = {
              username: userData.username,
              points: userData.points,
              photoUrl: userData.photoURL,
              correctAnswers: userData.correctAnswers,
              uid: userData.uid,
            };

            pointsArray.push(points);
          });

          pointsArray.sort((a, b) => b.points - a.points);

          const top10Points = pointsArray.slice(0, 10);

          setUserPoints(top10Points);
        }
      });
    };

    fetchData();
  }, []);
  return authIsReady ? (
    <div className="font-montserrat">
      <div className="font-bold text-3xl text-primaryDark mt-4">
        Leaderboards
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-3 gap-y-5 px-5 lg:gap-x-5">
        <div className="w-full h-auto shadow-xl bg-primaryLight2 rounded-xl">
          <div className="font-medium mt-5">By points earned</div>
          <div className="flex flex-col overflow-y-auto h-full">
            <div className="grid grid-cols-5 gap-x-5 px-4 place-items-center mt-5 mb-5">
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Rank
              </div>
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Profile
              </div>
              <div className="font-semibold  text-sm md:text-md text-primaryDark">
                Username
              </div>
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Badge
              </div>
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Points
              </div>
            </div>
            {userPoints.map((points, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-x-3 place-items-center mx-4 rounded-xl ${points.uid === user.uid ? 'bg-colorAccent' : ""}`}
              >
                <div
                  className={`font-bold text-primaryDark text-md md:text-xl ${points.uid === user.uid ? 'text-primaryLight' : ""} ${
                    index + 1 == 1
                      ? "text-yellow-800"
                      : index + 1 == 2
                      ? "text-blue-gray-600"
                      : index + 1 == 3
                      ? "text-red-500"
                      : "text-primaryDark"
                  }`}
                >
                  {index + 1}
                </div>
                <img
                  src={points.photoUrl ? points.photoUrl : Profile}
                  className={` w-14 h-14 md:w-16 md:h-16`}
                />
                <div className={`font-medium text-sm md:text-md ${points.uid === user.uid ? 'text-primaryLight' : ""}`}>
                  {points.username}
                </div>
                <img
                  src={
                    badges
                      .slice()
                      .reverse()
                      .find((badge) => points.points >= badge.points)?.image ||
                    badges[0]?.image
                  }
                  className={` w-14 h-14 md:w-16 md:h-16 scale-150`}
                />
                <div className={`font-medium text-sm md:text-md ${points.uid === user.uid ? 'text-primaryLight' : ""}`}>
                  {points.points}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto shadow-xl bg-primaryLight2 rounded-xl">
          <div className="font-medium mt-5">By Correct Answers</div>
          <div className="flex flex-col overflow-y-auto h-full">
            <div className="grid grid-cols-5 gap-x-5 px-4 place-items-center mt-5 mb-5 ">
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Rank
              </div>
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Profile
              </div>
              <div className="font-semibold  text-sm md:text-md text-primaryDark">
                Username
              </div>
              <div className="font-semibold text-sm md:text-md text-primaryDark">
                Correct Answers
              </div>
            </div>
            {userPoints.map((points, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-x-3 place-items-center mx-4 rounded-xl ${points.uid === user.uid ? 'bg-colorAccent' : ""}`}
              >
                <div
                  className={`font-bold text-primaryDark text-md md:text-xl ${
                    index + 1 == 1
                      ? "text-yellow-800"
                      : index + 1 == 2
                      ? "text-blue-gray-600"
                      : index + 1 == 3
                      ? "text-red-500"
                      : "text-primaryDark"
                  }`}
                >
                  {index + 1}
                </div>
                <img
                  src={points.photoUrl ? points.photoUrl : Profile}
                  className={` w-14 h-14 md:w-16 md:h-16 `}
                />
                <div className={`font-medium text-sm md:text-md ${points.uid === user.uid ? 'text-primaryLight' : ""}`}>
                  {points.username}
                </div>

                <div className={`font-medium flex justify-center items-center ${points.uid === user.uid ? 'text-primaryLight' : ""}`}>
                  <FaCheckCircle size={20} color="green" className="mr-2" />
                  {points.correctAnswers}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};

export default Leaderboards;
