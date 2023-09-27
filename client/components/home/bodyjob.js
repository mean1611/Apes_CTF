import React from "react";

function Bodyjob() {
    return (
        <div className="bodywhatisctf">
          <img
            src="/images/ctf.png" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
            alt="bodywhatisctf Image"
            className="bodywhatisctf-image"
          />
          <div className="bodywhatisctf-text">
            <h1>CTF คืออะไร ?</h1>
            <p>CTF หรือ "Capture The Flag" เป็นแข่งขันทางคอมพิวเตอร์ที่เป็นที่นิยมในวงการคอมพิวเตอร์และความปลอดภัยข้อมูล (cybersecurity).</p>
            <p>การแข่งขัน CTF มีจุดประสงค์ในการทดสอบและพัฒนาทักษะทางคอมพิวเตอร์ที่เกี่ยวกับการเจาะระบบ (penetration testing), </p>
            <p>การค้นหาช่องโหว่ (vulnerability assessment), การแก้ไขปัญหาทางความปลอดภัย, และการเรียนรู้เทคนิคใหม่ ๆ ในด้านความปลอดภัยข้อมูล.</p>
          </div>
        </div>
      );
    }
  export default Bodyjob;