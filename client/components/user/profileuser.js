import React from "react";

function Profileuser({ userData }) {
    
    const { username, email, user_role_id } = userData;
  return (
    <div className="profilecard card w-96 bg-base-100 shadow-xl">
      <div className="profileimg card card-body items-center pt-10 bg-primary grid flex justify-center">
        <img src="../images/profile.png" className="rounded-xl place-self-center" />
        <h2 className="card-title text-base-100 text-sm place-self-center">@{username}</h2>

        <div className="prosumscore place-self-center">
          <a className="prosumscore btn bg-green-500" data-tip="Sum score">
            <img src="/images/sumscore.png" style={{ width: '30px', height: '30px' }} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}></span>
            <p>10000</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profileuser;
