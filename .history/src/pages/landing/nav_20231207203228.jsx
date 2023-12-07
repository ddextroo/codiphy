import {useState} from "react";
import Hamburger from "hamburger-react";

function nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between space-x-5">
        <div>Codiphy</div>
        <div className="hidden justify-center space-x-5 md:flex md:flex-row">
          <div className="font-medium cursor-pointer">About</div>
          <div className="font-medium cursor-pointer">Languages</div>
          <div className="font-medium cursor-pointer">Features</div>
        </div>
        <div>
          <div>
            {/* <Hamburger size={20} color="#3a3a3a" toggled={isOpen} toggle={setOpen} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default nav;
