import React, { useEffect, useState } from "react";
import Navbaruser from "@/components/user/navbarUser.js";
import axios from 'axios';
import Categoryfilter from "../components/user/categoryFilter.js";
import Swal from 'sweetalert2';
// import Profileuser from '../components/user/profileuser';

function index() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userdata, setUserdata] = useState([]);
  const [userscore, setScore] = useState([]);
  const questionIdToCheck = currentQuestion ? String(currentQuestion.question_id) : ''; // กำหนดค่า questionIdToCheck ให้เป็น String ของ currentQuestion.question_id หรือให้ว่างไว้หากไม่มี currentQuestion

  const hasQuestionId = userscore && userscore.completequestion_id && userscore.completequestion_id.includes(questionIdToCheck);
  
  console.log(hasQuestionId);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userdata = localStorage.getItem("user");
      setUserdata(JSON.parse(userdata));
      console.log("Username from localStorage:", userdata);
    }

  }, []);
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/solve/userscore/${userdata.user_id}`);
        setScore(result.data);
      } catch (error) {
        console.error("Error fetching user score:", error);
      }
    };

    if (userdata && userdata.user_id) {
      fetchData();
    }
  }, [userdata]);

  const handlePlayClick = (question) => {
    let question_info = {
      question_id: question.question_id,
      score: question.score,
    }
  
    console.log(question);
    console.log("test info:",question_info)
    setCurrentQuestion(question);
    
    setShowPopup(true);
  };

  const handleHintClick = () => {
    setIsHintVisible(!isHintVisible);
  };

  const handleSubmit = async (question) => {
    if (answer === currentQuestion.answer) {

      const question_info = {
        completequestion_id: String(currentQuestion.question_id),
        score: currentQuestion.score,
        user_id: String(userdata.user_id),
        username: userdata.username,
      }
      console.log("test info:",question_info)
    
      try {
        const response = await axios.post("http://localhost:8080/api/solve", question_info);
        console.log(response);
  
        const data = response;
        console.log('Success:', data);
        if (response.status === 200){
          Swal.fire({
            title: 'Answer is correct!',
            icon: 'success',

          });
          setTimeout(function(){
            window.location.reload();
         }, 1500);
        }
        else if (response.status === 201){
          Swal.fire({
            title: 'You have solved this challenge correctly again.',
            icon: 'info',
            confirmButtonText: 'ตกลง'
          });
          
        }
      } catch (error) {

        console.error('Error:', error);
      }
    } else {
      Swal.fire({
        title: 'The answer is incorrect.',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
    setAnswer("");
  };

  const handleKeyPress = (event) => {
    // ถ้าผู้ใช้กดปุ่ม Enter (keyCode คือ 13) และ input ไม่ว่าง
    if (event.key === "Enter" && answer.trim() !== "") {
      handleSubmit();
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/question")
      .then((response) => response.json())
      .then((data) => {
        if (selectedCategory) {
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
  console.log("Test User completequestion:",userscore.completequestion_id)

  return (
    console.log("APESCTF{c0ns0l3.l0g_1s_y0ur_fr13nd}"),
    <div className="bg-primary">
      <Navbaruser userData={userdata} />
      <div className="banner-practice">
        <div className="practice-column">
          <div className="practice-banner-text">
            <h1>Practice</h1>
            <p>เพราะความรู้เป็นสิ่งสำคัญ</p>
            <p>และไม่ยากอย่างที่คิด</p>
          </div>
        </div>
        <div className="practice-column">
          <img
            src="/images/hackerpt.png"
            alt="Banner Image"
            className="banner-image"
          />
        </div>
      </div>
      <div className="learn-body grid grid-cols-1 lg:grid-cols-5 bg-primary text-base-100">
        <div className="col-start-1 col-end-2 lg:col-start-1 lg:col-end-2">
          <Categoryfilter onSelectCategory={setSelectedCategory} />
        </div>
        <div className="card-container place-items-center mt-5 col-start-1 lg:col-start-2 lg:col-end-6">

          <div className="card row-start-1 col-start-1 col-span-3 ">  
          <div className="rounded-lg bg-green-500 btn-active flex btn-lg" data-tip="Sum score">
            <img className="mt-2 mr-2" src="/images/sumscore.png" style={{ width: '50px', height: '50px' }} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}></span>
            <p className="text-5xl	text-base-100 mt-2">Your score: {userscore.score}</p>
          </div>
          </div>

          {questions.map((question) => (
            <div key={question.question_id} className="card-question card w-full lg:w-96 mb-10 lg:mb-0 lg:mr-5">
              <div className="card-body w-full">
                      <h2 className="card-title">
                        <span className="text-black mt-14">{question.question_title}</span>
                      </h2>
                      <p className="text-black">Score:{question.score}</p>
                      <div className="card-actions justify-between">
                      <div className="badge badge-outline text-black">
                      {getCategoryName(question.question_category_id)}
                        </div>
                        {/* แสดงข้อความตามการทำแต่ละข้อ */}
                        {userscore && userscore.completequestion_id && userscore.completequestion_id.includes(String(question.question_id)) ? (
                          <span className="text-green-500">Completed</span>
                        ) : (
                          <span className="text-red-500">Not Completed</span>
                        )}
                      </div>
                        <button
                          className="btn btn-primary mb-6"
                          onClick={() => handlePlayClick(question)}
                        >
                          Play
                        </button>
                      </div>
                    </div>
          ))}
        </div>
      </div>

      {showPopup && currentQuestion && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-4xl bg-primary-content">
          <div className=" question-content grid grid-rows-9 grid-cols-3">
            <h3 className="font-bold text-lg  text-primary  row-start-1 col-start-1 col-span-2">
              {currentQuestion.question_title}
            </h3>
            <p className="text-primary text-primary row-start-2 col-start-1 col-end-3 mt-3">
              {getCategoryName(currentQuestion.question_category_id)}
            </p>
            <p className="text-primary text-primary row-start-2 col-start-3 mt-3 text-right ">
              Point : {currentQuestion.score}
            </p>
            <div className="questionunderline card  row-start-3 col-start-1 col-end-4"></div>
            <p className="text-primary text-primary row-start-4 col-start-1 col-end-4 mb-2">
              Description : {currentQuestion.question_desc}
            </p>
            <div className="questionunderline card  row-start-5 col-start-1 col-end-4"></div>
            <input
              type="text"
              placeholder="APESCTF{FLAG}"
              className="input input-bordered place-items-center mt-2 3 text-black row-start-8 col-start-1 col-end-3"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="submitbutton btn  text-base-100 row-start-8 col-start-3 col-end-4 mt-2  ml-2 "
              onClick= {() => handleSubmit(questions)}
            >
              Submit
      </button>
            <div className="questionunderline card  row-start-7 col-start-1 col-end-4"></div>
            <button
              className="hintbutton btn  text-base-100 mt-2 row-start-6 col-start-1 col-end-2 mb-2"
              onClick={handleHintClick}
            >
              Hint
            </button>
            {isHintVisible && (
              <p className="hint-text text-black row-start-6 col-start-2 col-end-4 ml-2 mt-2 mb-2 ">
                Hint: {currentQuestion.hint}
              </p>
            )}
            {isAnswerCorrect === true && <p className="text-success">คำตอบถูกต้อง!</p>}
            {isAnswerCorrect === false && <p className="text-error">คำตอบไม่ถูกต้อง</p>}
            <button
              className="btn btn-sm btn-circle bg-red-500 text-base-100 absolute right-2 top-2"
              onClick={() => {
                setShowPopup(false);
                setIsHintVisible(false); // ปิด Hint เมื่อปิด Card
              }}
            >
              X
            </button>
            {/*<a><a href="https://drive.google.com/uc?export=download&id=1ZNNlA4pq--cW6wPaW_gHdoCQ_hllbRTw" target="_blank" rel="noopener noreferrer">ดาวน์โหลดไฟล์</a></a>*/}
          </div>
        </div>
      </div>
    )}
    
    </div>
  );
}

export default index;