import React, { useContext } from 'react';
import { AuthContext } from '../../routes/mainRoutes';
import { useLogout } from './../../hooks/useLogout';
import { Navigate, Link } from 'react-router-dom';

const Profile = () => {
  const { user, authIsReady } = useContext(AuthContext);
  const logout = useLogout();

  const handleEditProfile = () => {
    // Implement edit profile functionality
    return <Navigate to="/" />;
  };

  const handleChangePassword = () => {
    // Implement change password functionality (send email)
    return <Navigate to="/" />;
  };

  return authIsReady ? (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      {/*Profile info*/}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 flex items-center justify-between w-3/4">
        <div className="flex items-center">
          {/* <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div> Profile Photo */}
          <img
            src={userData.profilePhoto}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-4 shadow-md border-4 border-primaryLight hover:border-colorAccent transition duration-300"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray">{user.email}</p>
            <button onClick={handleEditProfile} className="text-sm text-primaryLight bg-colorAccent hover:bg-red-900 focus:outline-none">Edit Profile</button>
            <p className="text-sm">UID: {user.UID}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button onClick={logout} className="text-sm text-colorAccent border-gray font-semibold focus:outline-none mb-4">Log Out</button>
          <button onClick={handleChangePassword} className="text-gray text-sm border-gray hover:bg-colorAccent font-semibold focus:outline-none">Change Password</button>
        </div>
      </div>
      
      {/*Achievements */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-3/4">
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        
        {/* Badges Here */}
        <div className="flex space-x-4">
        </div>
      </div>
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment.</h1>
  );
};

export default Profile;