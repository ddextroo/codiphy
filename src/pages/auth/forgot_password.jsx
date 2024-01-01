import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import forgotpassAnimate from "./../../assets/forgotpass.json";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../components/loading";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function ForgotPassword() {
  const [showLoading, setshowLoading] = useState(false);
  const openLoading = () => {
    setshowLoading(true);
  };

  const closeLoading = () => {
    setshowLoading(false);
  };
  const success = () =>
    toast.success("😊 Email verification sent successfully!", {
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
  const failed = () =>
    toast.error("😔 Verification failed", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: "failed",
    });
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const inputBorderStyle = (value) => {
    return value ? "border-black" : "border-gray";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        console.log("Email to send verification:", email);
        success();
        closeLoading();
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 3000);
      });
    } catch (err) {
      failed();
      closeLoading();
      console.log("Error", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-montserrat">
      {/* Left side */}
      <Helmet>
        <title>Codiphy :: Forgot Password</title>
      </Helmet>
      <div className="flex-1 bg-primaryLight flex flex-col justify-center items-center p-8">
        <div className="text-2xl font-bold mb-4 md:text-5xl">
          Forgot Password
        </div>
        <div className="text-gray mb-4">
          Enter your email to reset your password
        </div>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-sm">
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
                email
              )}`}
              placeholder="juandelacruz@example.com"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-colorAccent hover:bg-red-900 text-primaryLight font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            onClick={openLoading}
          >
            Reset Password
          </button>
        </form>
        <div className="text-gray mt-4 text-sm">
          Remembered your password?{" "}
          <span className="text-colorAccent font-bold cursor-pointer">
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 hidden lg:flex md:items-center md:justify-center bg-gradient-to-b from-colorAccent to-black">
        <div className="text-center ">
          <Player
            src={forgotpassAnimate}
            className="player w-[23rem]"
            loop
            autoplay
          />
          <div className="text-primaryLight text-2xl font-bold mb-2 mt-10">
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

export default ForgotPassword;
