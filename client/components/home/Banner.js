import React from "react";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/images/hacker.png" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
        alt="Banner Image"
        className="banner-image"
      />
      <div className="banner-text">
        <h1>Apes CTF</h1>
        <p>เริ่มต้นการเรียนรู้ Cyber Security </p>
        <p>ไม่ยากอย่างที่คิด</p>
      </div>
    </div>
  );
}

export default Banner;
