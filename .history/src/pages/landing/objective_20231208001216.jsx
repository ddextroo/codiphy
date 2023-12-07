import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";

function objective() {
  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col space-y-6 justify-center">
          <h1 class="text-colorAccent font-bold text-3xl">
            Master Programming Skills with Codiphy
          </h1>
          <p className="text-gray text-xl font-medium">
            Codiphy is your premier destination for enhancing your programming
            skills.
          </p>
          <div className="flex flex-row space-x-6 justify-center items-center">
            <div className="flex flex-row space-x-10 py-10">
              <div className="rounded-lg h-60 p-5 bg-neutral-50 shadow-xl h-96">
                <div className="flex justify-center">
                  <RiCodeSSlashFill className="w-12 h-12 text-colorAccent"/>
                </div>
                <div className="mb-5 text-primaryDark font-bold">
                  Empowering Learners with AI-Generated Challenges
                </div>
                <p>
                  Provide a dynamic platform where learners can access a diverse
                  range of AI-generated programming quizzes and challenges to
                  enhance their coding skills.
                </p>
              </div>
              <div className="rounded-lg h-60 p-5 bg-neutral-50 shadow-xl">
                <div className="mb-5 text-primaryDark font-bold">
                  Personalized Learning Paths for Every Users
                </div>
                <p>
                  Tailor learning experiences by offering customizable learning
                  objectives, allowing users to set their own goals based on
                  their interests and proficiency level.
                </p>
              </div>
              <div className="rounded-lg h-60 p-5 bg-neutral-50 shadow-xl">
                <div className="mb-5 text-primaryDark font-bold">
                  Fostering a Thriving Learning Community
                </div>
                <p>
                  Cultivate a supportive community where learners can connect,
                  share insights, and collaborate on programming challenges,
                  fostering a culture of growth and knowledge-sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default objective;
