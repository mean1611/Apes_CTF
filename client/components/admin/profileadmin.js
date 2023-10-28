import React from "react";

function  Profileadmin() {

    return (
        
            <div className="profilecard card w-96 bg-base-100 shadow-xl  ">
                <div className="profileimg card card-body items-center pt-10 bg-primary grid flex justify-center ">
                    
                    <img  src="../images/profile.png"  className="rounded-xl place-self-center"/>
                    <h2 className="card-title  text-base-100 text-sm place-self-center">@admin</h2>

                </div>
                    {/* <div className="different-score card-body ">
                        <h2 className="card-title underline underline-offset-2">Progress Tracker</h2>
                        <p>1) General Skills : 2000</p>
                        <p>2) Cryptography : 2000</p>
                        <p>3) Web/Mobile Exploitation : 2000</p>
                        <p>4) Forensics : 2000</p>
                        <p>5) Reverse Engineering : 2000</p>
                    </div> */}
            </div>
       
    )
}

export default Profileadmin; 

