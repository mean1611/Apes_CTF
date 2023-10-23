import React from "react";

function  SendReport() {

    return (
        
            <div className="report-component card  bg-base-100 shadow-xl  ">
                <div className="reporttop card  bg-primary  flex justify-center">
                    <h2 className="  text-base-100  ">Report</h2>                    
                </div>
                    <div className="report-bar card-body ">
                    <label className="label">
                        <h2 className="label-text">Report</h2>
                    </label>
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs " />
                        
                        <textarea type="text" placeholder="Detail" className="report-detail  w-full h-full appearance-none block eounded-lg bg-base-100 border py-4 px-3 focus:outline-none   " />
                        <button className="btn bg-green-500">Submit</button>
                    </div>
            </div>
    )
}

export default SendReport; 

