import React from "react";

function Profileuser({ userData , UserScore}) {
    
    const { username, email, user_role_id } = userData;
    

  return (
    <div className="profilecard card w-96 bg-base-100 shadow-xl">
      <div className="profileimg card card-body items-center pt-10 bg-primary grid flex justify-center">
        <img src="../images/profile.png" className="rounded-xl place-self-center" />
        <h2 className="card-title text-base-100 text-sm place-self-center">@{username}</h2>
        <h2 className="card-title text-base-100 text-sm place-self-center">{email}</h2>
        <div className="card ">  
        <div className="card bg-green-500 btn-active  flex btn-lg" data-tip="Sum score">
            <img className="place-self-center" src="/images/sumscore.png" style={{ width: '40px', height: '40px' }} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}></span>
            <p className="text-5xl place-self-center	text-base-100 mt-5">Your score: {UserScore}</p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Profileuser;
