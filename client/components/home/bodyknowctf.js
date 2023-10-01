import React from "react";

function Bodyknowctf() {
    return (
        <div className="bodyknowctf">
            <div className="carousel w-full bg-primary ">
            <div id="item1" className="carousel-item w-full center  justify-center items-center  ">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/skills.png" alt="Album" className="bodyknowctf-image"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">General Skills</h2>
                        <p> เป็นทักษะพื้นฐานที่จำเป็นสำหรับผู้ที่ทำงาน 
                        <br/>ในด้านความปลอดภัยข้อมูลและระบบคอมพิวเตอร์ 
                        <br/>ซึ่งรวมถึงการทำงานที่ดีที่สุดและมีความสามารถ
                        <br/>ในการคิดวิเคราะห์และแก้ไขปัญหาที่เกี่ยวกับความ 
                        <br/>ปลอดภัยทางด้านเทคโนโลยีสารสนเทศ การสื่อสาร
                        <br/>และทักษะการทำงานเป็นที่ต้องการในหมวดนี้.</p>
                    </div>
                </div>
            </div>
            <div id="item2" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/cryptography.png" alt="Album "className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cryptography</h2>
                        <p> เป็นการศึกษาและการปฏิบัติเกี่ยวกับ 
                        <br/>การเข้ารหัสข้อมูลเพื่อปกป้องความลับและ 
                        <br/>ความปลอดภัยของข้อมูลที่ส่งผ่านระบบคอมพิวเตอร์
                        <br/>หรือเครือข่าย. มันเกี่ยวข้องกับการออกแบบ 
                        <br/>ระบบการเข้ารหัสและการทดสอบความ
                        <br/>ปลอดภัยของระบบการเข้ารหัสที่มีอยู่.</p>
                    </div>
                </div>
            </div>
            <div id="item3" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/mobile.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Web/Mobile Exploitation</h2>
                        <p>หมวดนี้เกี่ยวกับการทดสอบความปลอดภัยของ 
                        <br/>แอปพลิเคชันเว็บและมือถือ ผู้เชี่ยวชาญด้านความ 
                        <br/>ปลอดภัยทำการทดสอบโดยการพยายามเจาะระบบ 
                        <br/>เพื่อค้นหาช่องโหว่และข้อบกพร่องในระบบ 
                        <br/>เพื่อแนะนำวิธีการป้องกันและซ่อมแซม. </p>
                    </div>
                </div>
            </div>
            <div id="item4" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/forensics.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Forensics</h2>
                        <p>Forensics ในบริบทของความปลอดภัยคอมพิวเตอร์ 
                        <br/>คือกระบวนการสืบสวนและวิเคราะห์ข้อมูลเพื่อ 
                        <br/>ค้นหาหรือสืบสวนการกระทำที่ผิดกฎหมายหรือ 
                        <br/>การละเมิดความปลอดภัย เช่น การสืบสวนการแฮ็ค 
                        <br/>คอมพิวเตอร์หรือการแพร่กระจายข้อมูลที่เป็นความลับ. </p>
                        
                    </div>
                </div>
            </div>
            <div id="item5" className="carousel-item w-full center flex justify-center items-center py-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/reverseengineering.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Reverse Engineering</h2>
                        <p>เป็นกระบวนการสำหรับการวิเคราะห์ 
                        <br/>โค้ดหรือระบบโดยการทำงานของมันที่มีอยู่เพื่อเข้าใจ 
                        <br/>โครงสร้างและการทำงานของมัน นอกจากนี้ยังเป็นการตรวจสอบหรือ 
                        <br/>ค้นหาช่องโหว่ที่อาจมีอยู่ในระบบ นี้มักใช้ในการทดสอบความปลอดภัย 
                        <br/>หรือในการพัฒนาซอฟต์แวร์ที่มีโครงสร้างและฟังก์ชันที่เป็นความลับ. </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-2 bg-primary">
                <a href="#item1" className="btn ">General Skills</a>
                <a href="#item2" className="btn ">Cryptography</a>
                <a href="#item3" className="btn ">Web/Mobile Exploitation</a>
                <a href="#item4" className="btn ">Forensics</a>
                <a href="#item5" className="btn ">Reverse Engineering</a>
            </div>
        </div>
    );
  }

export default Bodyknowctf;