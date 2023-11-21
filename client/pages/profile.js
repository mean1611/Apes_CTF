'use client'
import { useEffect,useState } from 'react';
import Navbaruser from "../components/user/navbarUser.js";
import Navbaradmin from '@/components/admin/navbarAdmin.js';
import Navbar from "../components/home/navbar.js";
import axios from 'axios';
import Profileuser from '../components/user/profileuser';



function Profile() {
  const [userdata, setUserdata] = useState([]);
  const [userscore, setScore] = useState([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userdata = localStorage.getItem("user");
      setUserdata(JSON.parse(userdata));
      console.log("Username from localStorage:", userdata);
    }

  }, []);



  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/solve/userscore/${userdata.user_id}`);
        setScore(result.data);
      } catch (error) {
        console.error("Error fetching user score:", error);
      }
    };

    if (userdata && userdata.user_id) {
      fetchData();
    }
  }, [userdata]);


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
          <p>id: {userdata.user_id}</p>
          <p>Score: {userscore.score}</p>
          {/* Add other user information here */}
          
        </div>

      

      )}
      <Profileuser userData={userdata} UserScore={userscore.score} />
    </div>
  );
}

export default Profile;
