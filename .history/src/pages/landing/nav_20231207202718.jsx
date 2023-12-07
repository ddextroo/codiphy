import React from "react";
import Hamburger from 'hamburger-react'

function nav() {


  return (
    <div>
      <div className="flex flex-row justify-between space-x-5">
        <div>Codiphy</div>
        <div className="flex flex-row justify-center space-x5">
          <div className="font-medium cursor-pointer">About</div>
          <div className="font-medium cursor-pointer">Languages</div>
          <div className="font-medium cursor-pointer">Features</div>
        </div>
        <div>
          <div>
          <Hamburger size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nav;
