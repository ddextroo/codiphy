
import Logo from './../assets/logo.png'

const Loading = () => {
  return (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl">
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto">
        <div className="modal-content p-5 flex flex-col justify-center items-center backdrop-filter bg-transparent rounded-xl max-h-full h-full font-poppins overflow-auto overflow-x-hidden ml-20 mr-20 max-w-3xl">
          <img src={Logo} className=" w-20 h-20 animate-bounce"/>
          <div className='mt-5 font-medium text-primaryLight'>Please wait...</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
