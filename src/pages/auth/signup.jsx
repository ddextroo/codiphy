import { useState, useEffect, useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { Player } from "@lottiefiles/react-lottie-player";
import signupAnimate from "./../../assets/signup.json";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../main";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Signup() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const inputBorderStyle = (value) => {
    return value ? "border-black" : "border-gray";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form submission here
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Link to="/quiz" />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-montserrat">
      {/* Left side */}
      <div className="flex-1 bg-primaryLight flex flex-col justify-center items-center p-8">
        <div className="text-5xl font-bold mb-4 md:text-5xl">Sign Up</div>
        <div className="text-gray mb-4">Create a Codiphy account</div>
        <button className="p-3 flex w-full max-w-sm justify-center font-semibold  items-center bg-black text-primaryLight mb-4 rounded-lg ">
          {data.isLoading ? (
            <AiOutlineLoading3Quarters
              size={25}
              className="animate-spin animate-infinite"
            />
          ) : (
            <>
              <a
                className="login-link flex flex-row"
                href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                onClick={() => {
                  setData({ ...data, errorMessage: "" });
                }}
              >
                <FaGithub size={25} className="mr-3" />
                Sign up github
              </a>
            </>
          )}
        </button>
        <div className="flex flex-row justify-center items-center space-x-3 mb-4  ">
          <div className="w-16 h-0.5 bg-gray rounded-xl"></div>
          <div className="text-gray">or sign up with</div>
          <div className="w-16 h-0.5 bg-gray rounded-xl"></div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="text-sm  font-medium mb-2 flex flex-row justify-start"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className={`border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputBorderStyle(
                formData.fullname
              )}`}
              placeholder="Juan Dela Cruz"
              value={formData.fullname}
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
    </div>
  );
}

export default Signup;
