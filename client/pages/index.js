import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser.js";
import Navbaradmin from '@/components/admin/navbarAdmin.js';
import Navbar from "../components/home/navbar.js";
import Banner from "../components/home/Banner.js";
import Bodywhatisctf from "../components/home/bodywhatisctf.js";
import Bodyknowctf from "../components/home/bodyknowctf.js";
import Bodyjob from "../components/home/bodyjob.js";
import Footer from "../components/home/footer.js";
import Getstart from "../components/home/getstart.js";

function Index() {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      setUserdata(storedData);
    }
  }, []);

  return (
    <div>
      {userdata && userdata.user_role_id === 1 && <Navbaradmin />}
      {userdata && userdata.user_role_id === 2 && <Navbaruser userData={userdata} />}
      {!userdata && <Navbar />}
      <Banner />
      <Bodywhatisctf />
      <Bodyknowctf />
      <Bodyjob />
      <Getstart />
      <Footer />
    </div>
  );
}

export default Index;
