'use client'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react';



function Profile() {
  const [userdata, setUserdata] = useState([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      let userdata = localStorage.getItem("user");
      setUserdata(JSON.parse(userdata));
      console.log("Username from localStorage:", userdata);

    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {userdata && (
        <div>
          <p>Username: {userdata.username}</p>
          <p>Email: {userdata.email}</p>
          {/* Add other user information here */}
          <button onClick={() => {
          if (typeof window !== 'undefined') {
            localStorage.removeItem("user");
            window.location.href = "/";
          }
        }}>Logout</button>
        </div>



      )}
    </div>
  );
}

export default Profile;
