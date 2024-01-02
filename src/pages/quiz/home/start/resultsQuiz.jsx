import Claim from './../../../../hooks/useClaim'
const ResultQuiz = ({type, score, length, topic}) => {
  return (
    <div>
      <button className="py-3 px-10 w-32 bg-colorAccent text-primaryLight font-bold" onClick={Claim(score, type)}>
        Claim Reward
      </button>
    </div>
  );
};

export default ResultQuiz;
