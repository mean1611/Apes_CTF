import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.login.user);

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* แสดงข้อมูลผู้ใช้อื่น ๆ ที่คุณเก็บไว้ใน Redux store */}
        </div>
      )}
    </div>
  );
}

export default Profile;
