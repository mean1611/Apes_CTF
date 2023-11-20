'use client'
import { useEffect,useState } from 'react';
import Navbaruser from "../components/user/navbarUser.js";
import Navbaradmin from '@/components/admin/navbarAdmin.js';
import Navbar from "../components/home/navbar.js";
import Profileuser from '../components/user/profileuser';



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
      {userdata && userdata.user_role_id == 1 && (<Navbaradmin />)} 
      {userdata && userdata.user_role_id == 2 && (<Navbaruser />)} 
      {!userdata && (<Navbar />)}
      <h1>Profile Page</h1>
      {userdata && (
        <div>
          <p>Username: {userdata.username}</p>
          <p>Email: {userdata.email}</p>
          {/* Add other user information here */}
          
        </div>

      

      )}
      <Profileuser userData={userdata} />
    </div>
  );
}

export default Profile;
