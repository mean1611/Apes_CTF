import React from "react";

function Getstart() {
  return (
    <div className="getstart">
        <div className="getstart-text">
            <h1>เริ่มต้นการเรียนรู้กับเรา</h1>
        </div>
        <div className="getstart-button flex justify-center w-full py-3 gap-2">
            <button className="btn btn-lg bg-green-400">Learn</button>
            <h1>OR</h1>
            <button className="getstart-btn btn btn-lg bg-primary">Practice</button>
        </div>
  </div>
  );
}

export default Getstart;