import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser.js";
import Categoryfilter from "../components/user/categoryFilter.js";
import Swal from 'sweetalert2';


function index() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // เพิ่ม state สำหรับเก็บหมวดหมู่ที่เลือก

  // ฟังก์ชันสำหรับเปิด Popup เพื่อเล่นคำถาม
  const handlePlayClick = (question) => {
    setCurrentQuestion(question);
    setShowPopup(true);
  };

  // ฟังก์ชันสำหรับแสดงหรือซ่อน Hint
  const handleHintClick = () => {
    setIsHintVisible(!isHintVisible);
  };


  // ฟังก์ชันสำหรับส่งคำตอบ
  const handleSubmit = () => {
    if (answer === currentQuestion.answer) {
      Swal.fire({
        title: 'คำตอบถูกต้อง!',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
    } else {
      Swal.fire({
        title: 'คำตอบไม่ถูกต้อง',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/question")
      .then((response) => response.json())
      .then((data) => {
        if (selectedCategory) {
          // ถ้ามีหมวดหมู่ที่เลือก กรองโจทย์เฉพาะที่ตรงกับหมวดหมู่นี้
          const filteredQuestions = data.data.filter(
            (question) => question.question_category_id === selectedCategory
          );
          setQuestions(filteredQuestions);
        } else {
          setQuestions(data.data);
        }
      });
  }, [selectedCategory]);

  function getCategoryName(categoryId) {
    switch (categoryId) {
      case 1:
        return <h1 className="text-cate text-green-600">General Skills</h1>;
      case 2:
        return <h1 className="text-cate text-blue-600">Cryptography</h1>;
      case 3:
        return <h1 className="text-cate text-orange-600">Web Exploitation</h1>;
      case 4:
        return "Forensics";
      case 5:
        return <h1 className="text-cate text-pink-600">Reverse Engineering</h1>;
      default:
        return "Unknown";
    }
  }

  return (
    <div>
      <Navbaruser />
      <div className="banner-practice">
        <div className="practice-column">
          <div className="practice-banner-text">
            <h1>Practice</h1>
            <p>เพราะความรู้เป็นสิ่งสำคัญ</p>
            <p>ไม่ยากอย่างที่คิด</p>
          </div>
        </div>
        <div className="practice-column">
          <img
            src="/images/practice-pageicon.png"
            alt="Banner Image"
            className="banner-image"
          />
        </div>
      </div>
      <div className="learn-body grid grid-cols-4 bg-primary text-base-100">
        <div className="col-start-1 col-end-2">
          <Categoryfilter onSelectCategory={setSelectedCategory} />
        </div>
        <div className=" card-container place-items-center mt-5 ">
          {questions.map((question) => (
            <div key={question.question_id} className="card-question card w-96   mb-10 mr-5">
              <div className="card-body w-full">
                <h2 className="card-title">
                  <span className="text-black mt-12">{question.question_title}</span>
                </h2>
                <p className="text-black">Score:{question.score}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline text-black">
                  {getCategoryName(question.question_category_id)}
                </div>
                  <button
                    className="btn btn-primary mb-6"
                    onClick={() => handlePlayClick(question)}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && currentQuestion && (
        <div className="modal modal-open">

          <div className="modal-box  bg-primary-content">
          <div className=" question-content grid grid-rows-9 grid-cols-3">
            <h3 className="font-bold text-lg  text-primary  row-start-1 col-start-1 col-span-2"> {currentQuestion.question_title}</h3>
            <p className="text-primary text-primary row-start-2 col-start-1 col-end-3 mt-3">{getCategoryName(currentQuestion.question_category_id)}</p>
            <p className="text-primary text-primary row-start-2 col-start-3 mt-3">Point : {currentQuestion.score}</p>
            <div className="questionunderline card  row-start-3 col-start-1 col-end-4"></div>
            <p className="text-primary text-primary row-start-4 col-start-1 col-end-4 mb-2">Description : {currentQuestion.question_desc}</p>
            <div className="questionunderline card  row-start-5 col-start-1 col-end-4"></div>
            <input
              type="text" 
              placeholder="Apes{FLAG}" 
              className="input input-bordered place-items-center mt-2 mb-2 3 text-black row-start-6 col-start-1 col-end-3"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}

            />
            <button className="submitbutton btn  text-base-100 row-start-6 col-start-3 col-end-4 mt-2 mb-2 " onClick={handleSubmit}>Submit</button>
            <div className="questionunderline card  row-start-7 col-start-1 col-end-4"></div>
            <button className="hintbutton btn  text-base-100 mt-2 row-start-8 col-start-1 col-end-2" onClick={handleHintClick}>Hint</button>
            {isHintVisible && <p className="hint-text text-black row-start-8 col-start-2 col-end-4 ml-2 mt-2 mb-2 ">Hint: {currentQuestion.hint}</p>}
            {isAnswerCorrect === true && <p className="text-success">คำตอบถูกต้อง!</p>}
            {isAnswerCorrect === false && <p className="text-error">คำตอบไม่ถูกต้อง</p>}
            <button className="btn btn-sm btn-circle bg-red-500 text-base-100 absolute right-2 top-2" onClick={() => setShowPopup(false)}>X</button>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default index;