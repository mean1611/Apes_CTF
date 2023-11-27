import React from "react";

function Getstart() {
  return (
    <div className="getstart">
      <div className="getstart-text">
          <h1>เริ่มต้นการเรียนรู้กับเรา</h1>
        </div>
      <div className="getstart-column columns-3 ">

        <a href="/learn" className="getstart-button flex justify-center w-full py-3 gap-2">
          <button className="btn btn-lg bg-green-400">Learn</button>
        </a>
        <a className="getstart-text flex justify-center w-full py-3 gap-2">OR</a>
        <a href="/practice " className="getstart-button flex justify-center w-full py-3 gap-2">
          <button className="getstart-btn btn btn-lg bg-primary">Practice</button>
        </a>

      </div>
    </div>
  );
}


export default Getstart;