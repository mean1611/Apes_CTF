import React from "react";

function  Profileuser() {

    return (
        
            <div className="profilecard card w-96 bg-base-100 shadow-xl  ">
                <div className="profileimg card card-body items-center pt-10 bg-primary grid flex justify-center ">
                    
                    <img  src="../images/profile.png"  className="rounded-xl place-self-center"/>
                    <h2 className="card-title  text-base-100 text-sm place-self-center">@username</h2>

                    <div className="prosumscore place-self-center">
                        <a  className="prosumscore btn  bg-green-500 " data-tip="Sum score">
                            <img src="/images/sumscore.png" style={{ width: '30px', height: '30px' }} />  
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}></span>
                            <p>10000</p>
                        </a>
                    </div>
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

export default Profileuser; 

