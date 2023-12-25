import { useState, useContext, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import signupAnimate from "./../../assets/signup.json";
import { auth } from "./../../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/mainRoutes";
import { createUserDocumentEmail } from "../../firebase/createUserDocument";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../components/loading";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [showLoading, setshowLoading] = useState(false);
  const openLoading = () => {
    setshowLoading(true);
  };

  const closeLoading = () => {
    setshowLoading(false);
  };
  const success = () =>
    toast.success("😊 Login successfully!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const failed = () =>
    toast.error("😔 Login failed", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setTimeout(() => {
          navigate("/quiz");
        }, 3000);
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, [navigate]);

  const inputBorderStyle = (value) => {
    return value ? "border-black" : "border-gray";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        closeLoading();
        dispatch({ type: "LOGIN", payload: user });
        await createUserDocumentEmail(
          user,
          formData.username,
          formData.displayName
          );
          success();
          setTimeout(() => {
            navigate("/quiz");
          }, 3000);
        })
        .catch((error) => {
          failed();
          closeLoading();
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-montserrat">
      {/* Left side */}
      <div className="flex-1 bg-primaryLight flex flex-col justify-center items-center p-8">
        <div className="text-5xl font-bold mb-4 md:text-5xl">Sign Up</div>
        <div className="text-gray mb-4">Create a Codiphy account</div>
        {/* <button className="p-3 flex w-full max-w-sm justify-center font-semibold  items-center bg-black text-primaryLight mb-4 rounded-lg" onClick={login}>
          <FaGithub size={25} className="mr-3" />
          Sign up github
        </button>
        <div className="flex flex-row justify-center items-center space-x-3 mb-4  ">
          <div className="w-16 h-0.5 bg-gray rounded-xl"></div>
          <div className="text-gray">or sign up with</div>
          <div className="w-16 h-0.5 bg-gray rounded-xl"></div>
        </div> */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="displayName"
              className="text-sm  font-medium mb-2 flex flex-row justify-start"
            >
              Full Name
            </label>
            <input
              type="text"
              id="displayName"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(
                formData.displayName
              )}`}
              placeholder="Juan Dela Cruz"
              value={formData.displayName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Username Name */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-sm  font-medium mb-2 flex flex-row justify-start"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(
                formData.username
              )}`}
              placeholder="Juan Dela Cruz"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium mb-2 flex flex-row justify-start"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(
                formData.email
              )}`}
              placeholder="juandelacruz@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="text-sm font- mb-medium mb-2 flex flex-row justify-start"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(
                formData.password
              )}`}
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-colorAccent hover:bg-red-900 text-primaryLight font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            onClick={openLoading}
          >
            Create Account
          </button>
        </form>
        <div className="text-gray mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-colorAccent font-bold cursor-pointer">
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 hidden lg:flex md:items-center md:justify-center bg-gradient-to-b from-colorAccent to-black">
        <div className="text-center ">
          <Player
            src={signupAnimate}
            className="player w-auto h-auto"
            loop
            autoplay
          />
          <div className="mt-0 text-primaryLight text-2xl font-bold mb-2">
            Codiphy
          </div>
          <div className="text-primaryLight">
            Code Made Simple, Now Enhance with AI
          </div>
        </div>
      </div>
      <Outlet />
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
      {showLoading && <Loading />}
    </div>
  );
}

export default Signup;
