import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser.js";
import Categoryfilter from "../components/user/categoryFilter.js";



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
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
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
        return "General Skill";
      case 2:
        return "Cryptography";
      case 3:
        return "Web Exploitation";
      case 4:
        return "Forensics";
      case 5:
        return "Reverse Engineering";
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
        <div className="place-items-center col-start-2 col-end-5">
          {questions.map((question) => (
            <div key={question.question_id} className="card w-96 bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <h2 className="card-title">
                  <span className="text-black">{question.question_title}</span>
                </h2>
                <p className="text-black">Score:{question.score}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline text-black">
                  {getCategoryName(question.question_category_id)}
                </div>
                  <button
                    className="btn btn-primary"
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
        <div className="popup-card">
          <div className="popup-content">
            <h3>คำถาม: {currentQuestion.question_title}</h3>
            <p>คำอธิบาย: {currentQuestion.question_desc}</p>
            <p>คะแนน: {currentQuestion.score}</p>
            <p>ประเภท: {getCategoryName(currentQuestion.question_category_id)}</p>
            <button onClick={handleHintClick}>แสดง Hint</button>
            {isHintVisible && <p>Hint: {currentQuestion.hint}</p>}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="กรอกคำตอบของคุณ"
            />
            {isAnswerCorrect === true && <p className="text-success">คำตอบถูกต้อง!</p>}
            {isAnswerCorrect === false && <p className="text-error">คำตอบไม่ถูกต้อง</p>}
            <button className="btn btn-primary" onClick={handleSubmit}>
              ส่งคำตอบ
            </button>
            <button className="btn btn-primary" onClick={() => setShowPopup(false)}>
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default index;
