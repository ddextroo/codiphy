import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdSpaceDashboard, MdOutlineDashboard } from "react-icons/md";
import { MdLeaderboard, MdOutlineLeaderboard } from "react-icons/md";
import { FaUser, FaRegUser } from "react-icons/fa";
import Dashboard from "./../../../components/home/dashboard";
import Leaderboards from "./../../../components/home/leaderboards";
import Profile from "./../../../components/home/profile";
import logo from "./../../../assets/logo.png";

const Quiz = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const DashboardComponent = () => <Dashboard open={open} />;
  const LeaderboardComponent = () => <Leaderboards />;
  const ProfileComponent = () => <Profile />;

  const menuItems = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard size={20} className="ml-2" />,
      outlineIcon: <MdOutlineDashboard size={20} className="ml-2" />,
      component: <DashboardComponent />,
    },
    {
      title: "Leaderboards",
      icon: <MdLeaderboard size={20} className="ml-2" />,
      outlineIcon: <MdOutlineLeaderboard size={20} className="ml-2" />,
      component: <LeaderboardComponent />,
    },
    {
      title: "Profile",
      icon: <FaUser size={20} className="ml-2" />,
      outlineIcon: <FaRegUser size={20} className="ml-2" />,
      component: <ProfileComponent />,
    },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="flex font-montserrat min-h-screen items-stretch">
      <div
        className={`${
          open ? "w-72 xl:h-[60rem]" : "w-[5rem]"
        } duration-200 bg-gradient-to-b from-colorAccent to-black h-[99rem] md:h-[60rem] xl:h-screen relative`}
      >
        <div
          className={`absolute cursor-pointer rounded-full -right-4 top-10 border-2 border-colorAccent p-2 -mt-4 bg-primaryLight ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaArrowLeft size={15} color="red" />
        </div>
        <div className="flex flex-row gap-x-4 items-center p-5">
          <img
            src={logo}
            className={` w-10 h-10 duration-300 ${open && "rotate-[360deg]"}`}
            alt="Logo"
          />
          <div
            className={`text-primaryLight text-2xl font-bold duration-300 ${
              !open && "scale-0"
            }`}
          >
            Codiphy
          </div>
        </div>
        <ul className="pt-6">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`text-primaryLight text-medium text-md flex items-center gap-x-4 cursor-pointer p-5 hover:bg-colorAccent duration-300 ${
                index === selectedItem && "bg-colorAccent"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {index === selectedItem ? menu.icon : menu.outlineIcon}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-medium ml-2`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">{menuItems[selectedItem].component}</div>
    </div>
  );
};

export default Quiz;
