import { RiCodeSSlashFill } from "react-icons/ri";
import { FaRoad } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";

function objective() {
  return (
    <>
      <div>
        <div className="mt-10 min-h-screen max-h-sm flex flex-col space-y-6 justify-center">
          <h1 className="text-colorAccent font-bold text-1xl md:text-3xl">
            Master Programming Skills with Codiphy
          </h1>
          <div className="text-md text-gray md:text-lg">
            Codiphy is your premier destination for enhancing your programming
            skills.
          </div>
          <div className="h-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* <div className="flex flex-col space-x-10 py-10"> */}
            <div className="rounded-lg h-72 p-5 bg-neutral-50 shadow-xl">
              <div className="flex justify-center">
                <RiCodeSSlashFill className="w-12 h-12 text-colorAccent" />
              </div>
              <div className="mb-5 text-primaryDark font-bold text-lg">
                Empowering Learners with AI-Generated Challenges
              </div>
              <div className="text-md">
                Provide a dynamic platform where learners can access a diverse
                range of AI-generated programming quizzes and challenges to
                enhance their coding skills.
              </div>
            </div>
            <div className="rounded-lg h-72 p-5 bg-neutral-50 shadow-xl">
              <div className="mb-5 text-primaryDark font-bold">
                <div className="flex justify-center">
                  <FaRoad className="w-12 h-12 text-colorAccent" />
                </div>
                <div className="mb-5 text-primaryDark font-bold text-lg">
                  Personalized Learning Paths for Every Users
                </div>
              </div>
              <div className="text-md">
                Tailor learning experiences by offering customizable learning
                objectives, allowing users to set their own goals based on their
                interests and proficiency level.
              </div>
            </div>
            <div className="rounded-lg h-72 p-5 bg-neutral-50 shadow-xl">
              <div className="mb-5 text-primaryDark font-bold">
                <div className="flex justify-center">
                  <RiSpeakFill className="w-12 h-12 text-colorAccent" />
                </div>
                <div className="mb-5 text-primaryDark font-bold text-lg">
                  Fostering a Thriving Learning Community
                </div>
              </div>
              <div className="text-md">
                Cultivate a supportive community where learners can connect,
                share insights, and collaborate on programming challenges,
                fostering a culture of growth and knowledge-sharing.
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default objective;
