import React from "react";

function Bodywhatisctf() {
    return (
      <div className="bodywhatisctf bg-primary">
        <img
          src="/images/ctf.png" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
          alt="bodywhatisctf Image"
          className="bodywhatisctf-image"
        />
        <div className="bodywhatisctf-text text-base-200">
          <h1 className="text-base-200">CTF คืออะไร ?</h1>
          <p className="text-base-200">CTF หรือ "Capture The Flag" เป็นแข่งขันทางคอมพิวเตอร์ที่เป็นที่นิยมในวงการคอมพิวเตอร์และความปลอดภัยข้อมูล (cybersecurity).
          <br/>การแข่งขัน CTF มีจุดประสงค์ในการทดสอบและพัฒนาทักษะทางคอมพิวเตอร์ที่เกี่ยวกับการเจาะระบบ (penetration testing), 
          <br/>การค้นหาช่องโหว่ (vulnerability assessment), การแก้ไขปัญหาทางความปลอดภัย, และการเรียนรู้เทคนิคใหม่ ๆ ในด้านความปลอดภัยข้อมูล.</p>
        </div>
      </div>
    );
  }
  
  export default Bodywhatisctf;