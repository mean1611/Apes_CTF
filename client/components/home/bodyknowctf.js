import React from "react";

function Bodyknowctf() {
    return (
        <div className="bodyknowctf">
            <div className="carousel w-full bg-primary">
            <div id="item1" className="carousel-item w-full center  justify-center items-center  ">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/skills.png" alt="Album" className="bodyknowctf-image"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">General Skills</h2>
                        <p> นี้เป็นทักษะพื้นฐานที่จำเป็นสำหรับผู้ที่ทำงานในด้านความปลอดภัยข้อมูลและระบบคอมพิวเตอร์ </p>
                        <p> ซึ่งรวมถึงการทำงานที่ดีที่สุดและมีความสามารถในการคิดวิเคราะห์และแก้ไขปัญหาที่เกี่ยวกับความ</p>
                        <p> ปลอดภัยทางด้านเทคโนโลยีสารสนเทศ การสื่อสารและทักษะการทำงานเป็นที่ต้องการในหมวดนี้.</p>
                        <p> นี้เป็นทักษะพื้นฐานที่จำเป็นสำหรับผู้ที่ทำงานในด้านความปลอดภัยข้อมูลและระบบคอมพิวเตอร์ </p>
                        <p> ซึ่งรวมถึงการทำงานที่ดีที่สุดและมีความสามารถในการคิดวิเคราะห์และแก้ไขปัญหาที่เกี่ยวกับความ</p>
                        <p> ปลอดภัยทางด้านเทคโนโลยีสารสนเทศ การสื่อสารและทักษะการทำงานเป็นที่ต้องการในหมวดนี้.</p>
                        <p> นี้เป็นทักษะพื้นฐานที่จำเป็นสำหรับผู้ที่ทำงานในด้านความปลอดภัยข้อมูลและระบบคอมพิวเตอร์ </p>
                    </div>
                </div>
            </div>
            <div id="item2" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/cryptography.png" alt="Album "className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cryptography</h2>
                        <p> สวัสดี</p>
                    </div>
                </div>
            </div>
            <div id="item3" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/mobile.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Web/Mobile Exploitation</h2>
                        <p> สวัสดี</p>
                    </div>
                </div>
            </div>
            <div id="item4" className="carousel-item w-full center flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/forensics.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Forensics</h2>
                        <p> สวัสดี</p>
                    </div>
                </div>
            </div>
            <div id="item5" className="carousel-item w-full center flex justify-center items-center py-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/reverseengineering.png" alt="Album"className="bodyknowctf-image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Reverse Engineering</h2>
                        <p> สวัสดี</p>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="flex justify-center w-full py-3 gap-2">
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