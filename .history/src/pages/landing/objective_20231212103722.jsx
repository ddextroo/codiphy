import { RiCodeSSlashFill } from "react-icons/ri";
import { FaRoad } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";

function objective() {
  return (
    <section id="objective">
      <div>
        <div className="mt-10 max-h-full md:mt-52 md:h-fit lg:h-screen flex flex-col space-y-6 justify-center">
          <h1 className="text-colorAccent text-xl font-bold text-center md:text-3xl">
            Master Programming Skills with Codiphy
          </h1>
          <div className="text-md text-gray md:text-lg">
            Codiphy is your premier destination for enhancing your programming
            skills.
          </div>
          <div className="h-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            <div className="rounded-lg h-96 p-5 bg-neutral-50 shadow-xl">
              <div className="flex justify-center">
                <RiCodeSSlashFill className="w-12 h-12 mb-3 text-colorAccent" />
              </div>
              <div className="mb-5 text-primaryDark font-bold text-md md:text-lg">
                Empowering Learners with AI-Generated Challenges
              </div>
              <div className="text-sm sm:text-md">
                Provide a dynamic platform where learners can access a diverse
                range of AI-generated programming quizzes and challenges to
                enhance their coding skills.
              </div>
            </div>
            <div className="rounded-lg h-72 p-5 bg-neutral-50 shadow-xl">
              <div className="mb-5 text-primaryDark font-bold">
                <div className="flex justify-center">
                  <FaRoad className="w-12 h-12 mb-3 text-colorAccent" />
                </div>
                <div className="mb-5 text-primaryDark font-bold text-md md:text-lg">
                  Personalized Learning Paths for Every Users
                </div>
              </div>
              <div className="text-sm sm:text-md">
                Tailor learning experiences by offering customizable learning
                objectives, allowing users to set their own goals based on their
                interests and proficiency level.
              </div>
            </div>
            <div className="rounded-lg h-72 p-5 bg-neutral-50 shadow-xl">
              <div className="mb-5 text-primaryDark font-bold">
                <div className="flex justify-center">
                  <RiSpeakFill className="w-12 h-12 mb-3 text-colorAccent" />
                </div>
                <div className="mb-5 text-primaryDark font-bold text-md md:text-lg">
                  Fostering a Thriving Learning Community
                </div>
              </div>
              <div className="text-sm sm:text-md">
                Cultivate a supportive community where learners can connect,
                share insights, and collaborate on programming challenges,
                fostering a culture of growth and knowledge-sharing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default objective;
