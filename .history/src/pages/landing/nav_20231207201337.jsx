import React from "react";

function nav() {
  return (
    <div>
      <div className="flex flex-row justify-center space-x-5">
        <div className="flex flex-row justify-center">
          <div className="font-medium cursor-pointer">About</div>
          <div className="font-medium cursor-pointer">Languages</div>
          <div className="font-medium cursor-pointer">Features</div>
        </div>
      </div>
    </div>
  );
}

export default nav;
