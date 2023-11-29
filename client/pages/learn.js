import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser.js";
import Navbaradmin from '@/components/admin/navbarAdmin.js';
import Navbar from "../components/home/navbar.js";
import Menulearn from "@/components/home/menu-learn.js";
import Footer from "../components/home/footer.js";

function index() {
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
        <div className="banner-practice">
            <div class="learn-column">
                <div className="learn-banner-text">
                    <h1>Learn</h1>
                    <p>การเรียนรู้ไม่มีที่สิ้นสุด</p>
                    <p>มันคือการผจญภัยที่ไม่มีปลาย</p>
                </div>
            </div>
            <div class="learn-column">
            <img
                id="item1" src="/images/learn-pageicon.png" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
                alt="Banner Image"
                className="banner-image"
            />
            </div>
            
        </div>
        <div className="learn-body grid grid-cols-5  bg-primary text-base-100">
            <Menulearn/>
            <div className="learn-content menu bg-primary w-56 text-base-100 col-span-4 w-full mb-10">
              
              <h1 className="learn-title   ">CTF คืออะไร</h1>
              <img src="/images/csaw-2016.jpg "  className="place-self-start   mt-5 rounded-lg"/>
              <p id="item2" className="  ">CTF (Capture The Flag) คือการแข่งขันทางไซเบอร์ที่เน้นการทดสอบและปรับปรุงทักษะทางความปลอดภัยของผู้เข้าแข่งขัน 
                <br/>โดยผู้เข้าแข่งขันจะต้องแก้ไขปัญหาทางความปลอดภัยที่หลากหลาย, เช่นการค้นหาช่องโหว่ในระบบ, การแก้ไขโปรแกรมที่ถูกคอมไพล์แล้ว,
                <br/> และการตรวจสอบการป้องกันระบบ. การค้นหาธง (flag) เป็นวัตถุประสงค์หลักๆ ที่ถูกซ่อนอยู่ในระบบเพื่อแสดงว่าผู้เข้าแข่งขันได้ทำภารกิจนั้นเสร็จสิ้น.</p>

              <h1 className="mt-100px   ">รูปแบบการแข่งขัน CTF</h1>
              <p className="mt-5   ">รูปแบบการแข่งขัน CTF สามารถแบ่งออกเป็นหลายๆ ประเภท โดยบางประเภทอาจจะมีหลายรูปแบบย่อยภายในนั้นด้วย ต่อไปนี้คือหลายๆ หมวดการแข่งขัน CTF ที่พบบ่อย:</p>

              <h2 className="text-error   ">Jeopardy-style CTF</h2><img src="/images/dashboard.png "  className="place-self-start mt-5 rounded-lg"/>
              <p className="  ">ในรูปแบบนี้, มีหลายหมวดหมู่ที่แตกต่างกันเป็นข้อย่อย ๆ (category) เช่น Cryptography, Web, Forensics, Reverse Engineering, Pwn (Exploitation), และอื่น ๆ.
              <br/>ทีมที่แข่งขันต้องแก้ไขปัญหาในแต่ละหมวดหมู่เพื่อที่จะได้ธง (flag) ที่เป็นข้อความหรือรหัสที่เป็นบอกว่าทีมนั้นได้แก้ไขปัญหานั้น.</p>

              <h2 className="text-blue-600   ">Attack-Defense CTF</h2>
              <img src="/images/attackdefend.png"  className="place-self-start mt-5 rounded-lg   "/>
              <p className="  ">ในลักษณะนี้, ทีมแต่ละทีมจะมีเซิร์ฟเวอร์ของตัวเองที่เรียกว่า "attack box" และ "defense box."
              <br/>ทีมต้องป้องกันเซิร์ฟเวอร์ของตนเองจากการโจมตี (defense) และพยายามโจมตีเซิร์ฟเวอร์ของทีมอื่น (attack).
              <br/>การป้องกันและโจมตีนั้นส่วนใหญ่จะเกี่ยวข้องกับการค้นหาช่องโหว่และการปรับแต่งระบบความปลอดภัย.</p>
              
              <h2 className="text-green-600   ">King of the Hill (KoTH) CTF</h2>
              <img src="/images/CTFkingofthehill.png "  className="place-self-start mt-5 rounded-lg "/>
              <p id="item3" class>เป็นหนึ่งในรูปแบบของการแข่งขันทางความปลอดภัยที่นิยมและท้าทาย. ในรูปแบบนี้, 
              <br/>ทีมหรือผู้เข้าแข่งขันต้องพยายามครอบครอง (capture) หรือควบคุม "ธง" (flag) ที่อยู่บนระบบหรือเครือข่าย. 
              <br/>การครอบครองธงนั้นอาจมีลักษณะการแข่งขันแบบ "คิงออฟเดอะฮิล" โดยทีมที่ครอบครองธงได้มากที่สุดจะได้รับคะแนนมากที่สุด.</p>

              <h1 className="learn-title ">หมวดการแข่งขัน CTF</h1>

              {/*<img src="/images/cryptography.png"  className="learn-image"/>*/}
              <h2  className="learn-title text-blue-600">Cryptography</h2>
              <p >Cryptography เป็นหมวดหมู่ที่เกี่ยวข้องกับการเข้ารหัส (Encryption), การถอดรหัส (Decryption), และการทำงานกับข้อมูล
                <br/>ที่เกี่ยวข้องกับความมั่นคงของข้อมูล. หมวดหมู่นี้เน้นการป้องกันข้อมูลที่ส่งหรือเก็บในระบบโดยทำให้มีความลับและปลอดภัย. 
                <br/>กลไกหลักของ Cryptography รวมถึงการใช้ Key (คีย์) เพื่อความปลอดภัยในการเข้ารหัสและถอดรหัสข้อมูล.</p>

              
              {/*<img src="/images/mobile.png"  className="learn-image"/>*/}
              <h2 className="learn-title text-orange-600">Web Exploitation</h2>
              <p >Web/Mobile Exploitation เป็นหมวดหมู่ของการแข่งขันทางความปลอดภัย (CTF) ที่เน้นการค้นหาและการใช้ช่องโหว่
                <br/>ทางความปลอดภัยในเว็บและแอปพลิเคชันมือถือเพื่อทำลายความปลอดภัยของระบบ. หมวดหมู่นี้เน้นทักษะในการทดสอบ
                <br/>และค้นหาช่องโหว่ที่เกี่ยวข้องกับเว็บแอปพลิเคชัน (Web Exploitation) และแอปพลิเคชันบนโทรศัพท์มือถือ (Mobile Exploitation).</p>
              
              {/*<img src="/images/forensics.png"  className="learn-image"/>*/}
              <h2 className="learn-title text-grey-100">Forensics</h2>
              <p >Forensics เป็นหมวดหมู่ของการแข่งขันทางความปลอดภัย (CTF) ที่เน้นการค้นหาและการวิเคราะห์ข้อมูลเพื่อตรวจสอบหรือ
                <br/>สืบค้นการกระทำที่เกี่ยวข้องกับความมั่นคงของระบบหรือข้อมูล. หมวดหมู่นี้บ่งบอกถึงการใช้เทคนิค Forensic ในการสืบสวน
                <br/>และวิเคราะห์ข้อมูลเพื่อค้นหาหลักฐานที่สามารถใช้ในการแก้ไขปัญหาหรือหาผู้กระทำผิด.</p>
              
              {/*<img src="/images/reverseengineering.png"  className="learn-image"/>*/}
              <h2 className="learn-title text-pink-600">Reverse Engineering</h2>
              <p id="item4">Reverse Engineering เป็นหมวดหมู่ของการแข่งขันทางความปลอดภัย (CTF) ที่เน้นการวิเคราะห์และทำความเข้าใจกับโค้ด
              <br/>หรือโปรแกรมที่ถูกคอมไพล์แล้วเพื่อค้นหาความมั่นคงของระบบหรือหาวิธีการทำงานที่ถูกซ่อน. ใน Reverse Engineering, 
              <br/>ผู้เข้าแข่งขันจะต้องทำความเข้าใจกับโครงสร้างของโปรแกรม, โค้ดเครื่องจักรเสมือน (machine code), และบทบาทของแต่ละส่วนของโปรแกรม.</p>
              
              <h1 className="mt-100px ">แล้วเราเล่น CTF เพื่ออะไร?</h1>

              <h3 className="knowgood">เข้าใจในพื้นฐานของการแข่งขัน CTF </h3>
              <p>วัตถุประสงค์หลักของ CTF คือการค้นหาคำตอบหรือ "ธง" (flags) ที่ซ่อนอยู่ในระบบหรือโจทย์ต่าง ๆ ที่ถูกกำหนดไว้ล่วงหน้า. 
              <br/>ธงสามารถเป็นข้อความที่ถูกเข้ารหัส, ไฟล์ที่ซ่อนเอาไว้, หรือข้อมูลที่ต้องการในทุกกรณี.</p>

              <h3>เพื่อได้รับความรู้พื้นฐานความรู้ด้าน Cybersecurity </h3>
              <p>เข้าใจพื้นฐานของความมั่นคงปลอดภัย ความสำคัญของความมั่นคงปลอดภัยในโลกดิจิทัล.ประเภทของการละเมิดความมั่นคงปลอดภัย</p>

              <h3>หลังจากที่ได้เข้าร่วมกิจกรรม มีความตระหนักรู้ด้าน Cybersecurity </h3>
              <p>สริมความเข้าใจในพื้นฐาน:ทำความเข้าใจเกี่ยวกับความสำคัญของความมั่นคงปลอดภัยในการใช้ชีวิตประจำวัน.
                <br/>รู้จักกับความหลากหลายของการละเมิดความมั่นคงปลอดภัยที่อาจเจอ.</p>
              </div>
            </div>
            <Footer/>
        </div>

    
    
  );
}

export default index;