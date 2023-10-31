import React, { useState } from "react";
import Submitbutton from "@/function/submitbutton";

function Questioncom() {
  const [hintText, setHintText] = useState(""); // สร้าง state เพื่อเก็บข้อความที่จะแสดง
  const [isHintVisible, setIsHintVisible] = useState(false); // สร้าง state เพื่อเก็บสถานะของปุ่ม Hint

  const handleHintClick = () => {
    // เมื่อกดปุ่ม Hint ให้สลับสถานะของปุ่ม Hint
    setIsHintVisible(!isHintVisible);
    // ตั้งค่าข้อความที่จะแสดงใน state
    setHintText("ข้อความ Hint ที่คุณต้องการแสดง");
  };

  return (
    <div className="practice-body grid grid-cols-3 gap-4 place-items-center text-base-100 col-span-3">
      <a className="practice-button text-primary place-items-center btn btn-ghost" onClick={() => document.getElementById('my_modal_3').showModal()}>General skill</a>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-primary-content">
          <form method="dialog">
            <button className="btn btn-sm btn-circle bg-red-500 text-base-100 absolute right-2 top-2">✕</button>
          </form>
          <div className="grid grid-cols-3 grid-rows-9">
            <h3 className="font-bold text-lg text-primary col-start-1 col-end-1">General Skills</h3>
            <p className="text-primary text-primary row-start-2">Tags:</p>
            <p className="text-primary text-primary row-start-2 col-start-3 col-end-3">Point :</p>
            <div className="questionunderline card  row-start-3 col-start-1 col-end-4"></div>
            <p className="text-primary text-primary row-start-4 ">Description</p>
            <p className="desc-text text-primary text-primary row-start-5 col-start-1 col-end-4 mb-2">เอาไว้ใส่รายละเอียด</p>
            <div className="questionunderline card  row-start-6 col-start-1 col-end-4"></div>
            <input type="text" placeholder="Apes{FLAG}" className="input input-bordered place-items-center mt-2 mb-2 row-start-7 col-start-1 col-end-3 text-black" />
            <div className=" row-start-7 text-base-100 col-start-3 col-end-4 mt-2 mb-2">
              <Submitbutton />
            </div>
            <div className="questionunderline card  row-start-8 col-start-1 col-end-4"></div>
            
            <button className="hintbutton btn w-full text-base-100 mt-2 " onClick={handleHintClick}>
              {isHintVisible ? 'Hint' : 'Hint'}
            </button>

            <div className={`hint-text text-black row-start-9 col-start-2 col-end-4 ml-2 mt-2 mb-2 ${isHintVisible ? 'visible' : 'hidden'}`}>
              {hintText && <p>{hintText}</p>}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Questioncom;
