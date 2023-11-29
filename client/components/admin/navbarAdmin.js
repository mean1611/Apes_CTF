import React from "react";

function Navbaradmin() {

    return (
        <nav className="navbar bg-primary text-neutral-content fixed top-0 w-full z-10" >
        <div className="flex-1 ">
          <a href="/" className="btn btn-ghost " >
          <img
            src="/images/smiley.png"
            style={{ width: '50px', height: '50px' }} // กำหนดความกว้างและความสูง
            />  
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '20px' ,fontWeight: 'bold'}}>APES</span>
            <span style={{ fontSize: '16px' ,fontWeight: 'bold' }}>CTF</span>
          </span>     
          </a>
          
          <a className="btn btn-ghost" href="/questionmanage">
          <img
            src="/images/practice.png"
            style={{ width: '50px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Question</span>
          </span>      
          </a>

          <a className="btn btn-ghost" href="/usermange">
          <img
            src="/images/usermange.png"
            style={{ width: '50px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>User management</span>
          </span>      
          </a>

          <a className="btn btn-ghost" href="/adminreport">
          <img
            src="/images/search.png"
            style={{ width: '50px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Bug report</span>
          </span>      
          </a>

        </div>
        <h1>Admin</h1>
        <div className="dropdown dropdown-end flew-none">
          
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            
            <div className="w-10 rounded-full">
              <img src="/images/profile.png" />
            </div>
          </label>
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
            <li>
              <a href="/profile" className="justify-between">
                Profile
              </a>
            </li>
            <li><a onClick={() => {
          if (typeof window !== 'undefined') {
            localStorage.removeItem("user");
            window.location.href = "/";
          }
        }}>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbaradmin; 

