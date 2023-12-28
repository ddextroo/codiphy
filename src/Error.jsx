import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "./assets/error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primaryLight p-4 font-montserrat">
      <div className="text-center max-w-2xl w-full">
        <div className="text-4xl text-primaryDark mb-8 font-bold">
          Oops! Something went wrong.
        </div>
        <div className="text-lg text-gray mb-10">
          We apologize, but it seems there's been an error. Please try
          refreshing the page or contact support.
        </div>
        <Player
          autoplay
          loop
          src={errorAnimation}
          style={{ width: "100%", maxWidth: "300px", marginBottom: "30px" }}
        />
        <Link to="/">
          <div className="border border-solid border-gray hover:border-primaryDark font-bold text-primaryDark text-xl px-6 py-2 rounded-xl inline-block">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
