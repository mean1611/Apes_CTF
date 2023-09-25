import React from "react";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/images/373371936_6847142781973054_6626210144729276960_n.jpg" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
        alt="Banner Image"
        className="banner-image"
      />
      <div className="banner-text">
        <h1>Apes CTF</h1>
        <p>Kuy Nuno (ถ้ามี)</p>
      </div>
    </div>
  );
}

export default Banner;
