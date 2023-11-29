import React, { useState, useEffect } from "react";
import Navbaradmin from "../components/admin/navbarAdmin";
import Usermangecom from "../components/admin/usermangecom";
import Footer from "../components/home/footer";

function Index() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const parsedData = JSON.parse(storedData);
    if (parsedData && parsedData.user_role_id === 1) {
      setUserData(parsedData);
    } else {
      window.location.href = "/"
      console.log("Permission denied!");
    }
  }, []);

  return (
    <div>
      {userData && userData.user_role_id === 1 && <Navbaradmin />}
      {userData && userData.user_role_id === 1 && (
        <div className="userreport ">
          <div className="justify">
            <Usermangecom />
            <Footer />
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Index;
