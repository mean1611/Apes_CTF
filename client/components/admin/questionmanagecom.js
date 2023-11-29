// QuestionManagementcom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Pagination from '@/function/Pagination'; // Import the Pagination component

function QuestionManagementcom() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    question_title: '',
    question_desc: '',
    answer: '',
    hint: '',
    score: 0,
    question_category_id: '0', // เริ่มต้นเป็น "1"
  });
  const [activeTab, setActiveTab] = useState('create');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const getQuestions = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/question');
      setQuestions(result.data.data.sort((a, b) => a.question_id - b.question_id));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleClickEdit = (question) => {
    setSelectedQuestion(question);
    setActiveTab('edit');
  };

  const handleClickCancel = () => {
    setActiveTab('create');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedQuestion({ ...selectedQuestion, [name]: value });
  };

  const handleNewQuestionChange = (e) => {
    const { name, value } = e.target;

    if (name === 'score' || name === 'question_category_id') {
      setNewQuestion({ ...newQuestion, [name]: parseInt(value, 10) });
    } else {
      setNewQuestion({ ...newQuestion, [name]: value });
    }
  };

  const handleClickDelete = () => {
    const question_id = selectedQuestion?.question_id;
    if (!question_id) {
      Swal.fire('Please select a question to delete', '', 'warning');
      return;
    }

    Swal.fire({
      title: 'Delete Question',
      text: 'Are you sure you want to delete this question?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete('http://localhost:8080/api/question/' + question_id);
          if (response.status === 200) {
            setSelectedQuestion(null);
            setQuestions(questions.filter((question) => question.question_id !== question_id));
            Swal.fire({
              title: 'Success!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'OK',
            });
          } else {
            Swal.fire('Error deleting question', '', 'error');
          }
        } catch (error) {
          console.error('Error deleting question:', error);
          Swal.fire('Error deleting question', '', 'error');
        }
      }
    });
  };

  const handleCreateQuestion = async () => {
    if (
      !newQuestion.question_title ||
      !newQuestion.question_desc ||
      !newQuestion.answer ||
      newQuestion.score === 0 ||
      newQuestion.question_category_id === '0'
    ) {
      Swal.fire('Please fill in all required fields', '', 'warning');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/question', newQuestion);

      if (response.data.status === 201) {
        // Show a success message with the API message
        Swal.fire({
          title: 'Success!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setNewQuestion({
          question_title: '',
          question_desc: '',
          answer: '',
          hint: '',
          score: 0,
          question_category_id: '0', // เริ่มต้นเป็น "1"
        });
        getQuestions();
      } else {
        // Show an error message with the API message
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Show a generic error message if the request fails
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while processing your request',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question_id = selectedQuestion?.question_id;

    try {
      const response = await axios.put('http://localhost:8080/api/question/' + question_id, {
        question_title: selectedQuestion.question_title,
        question_desc: selectedQuestion.question_desc,
        answer: selectedQuestion.answer,
        hint: selectedQuestion.hint,
        score: selectedQuestion.score,
        question_category_id: selectedQuestion.question_category_id,
      });

      if (response.status === 200) {
        Swal.fire('Question data saved successfully', '', 'success');
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      } else {
        Swal.fire('Please fill in all required fields', '', 'warning');
      }
    } catch (error) {
      console.error('Error saving question data:', 'error');
      Swal.fire('Please fill in all required fields', '', 'warning');
    }
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQuestions = questions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="report-component card bg-base-100 shadow-xl">
      <div className="reporttop card bg-primary flex justify-center">
        <h2 className="text-base-100">QUESTION</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Answer</th>
              <th>Hint</th>
              <th>Score</th>
              <th>Category ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentQuestions.length > 0 &&
              currentQuestions.map((question) => (
                <tr key={question.question_id}>
                  <td>{question.question_id}</td>
                  <td>{question.question_title}</td>
                  <td>{question.question_desc}</td>
                  <td>{question.answer}</td>
                  <td>{question.hint}</td>
                  <td>{question.score}</td>
                  <td>{question.question_category_id}</td>
                  <td>
                    <button className="btn btn-warning w-24" onClick={() => handleClickEdit(question)}>
                      EDIT
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination itemsPerPage={itemsPerPage} totalItems={questions.length} paginate={paginate} />

      {activeTab === 'edit' && (
        <div className="card grid grid-rows-1 grid-cols-3 ">
          <div className="reporttop card row-start-1 col-start1 col-span-3 flex justify-center ">
            <h2 className="card text-base-100  bg-primary">EDIT</h2>
          </div>
          <form className="grid grid-cols-3 row-start-2 col-span-3  place-items-center" onSubmit={handleSubmit}>
            
          <div className="ml-5 row-start-2">
            <label className="label">
              <span className="label-text">Question ID</span>
            </label>
            <input type="text" placeholder="Question ID" className="input input-bordered w-full max-w-xs" value={selectedQuestion?.question_id || ""} readOnly />
            </div>

            <div className="ml-5 row-start-2 w-72">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="question_category_id"
                value={selectedQuestion?.question_category_id || ""}
                onChange={handleInputChange}
                className="input input-bordered w-full max-w-xs"
              >
                <option value="1">General Skills</option>
                <option value="2">Cryptography</option>
                <option value="3">Web Exploitation</option>
                <option value="4">Forensics</option>
                <option value="5">Reverse Engineering</option>
              </select>
            </div>

            <div className="ml-5 row-start-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="question_title" value={selectedQuestion?.question_title || ""} onChange={handleInputChange} />
            </div>

            

            <div className="ml-5 row-start-3">
            <label className="label">
              <span className="label-text">Answer</span>
            </label>
            <input type="text" placeholder="Answer" className="input input-bordered w-full max-w-xs" name="answer" value={selectedQuestion?.answer || ""} onChange={handleInputChange} />
            </div>

            <div className="ml-5 row-start-3">
            <label className="label">
              <span className="label-text">Hint</span>
            </label>
            <input type="text" placeholder="Hint" className="input input-bordered w-full max-w-xs" name="hint" value={selectedQuestion?.hint || ""} onChange={handleInputChange} />
            </div>

            <div className="ml-5 row-start-3">
            <label className="label">
              <span className="label-text">Score</span>
            </label>
            <input type="number" placeholder="Score" className="input input-bordered w-full max-w-xs" name="score" value={selectedQuestion?.score || 0} onChange={handleInputChange} />
            </div>

            <div className="ml-5 row-start-4 col-start-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" style={{ resize: "none", width: "400px", height: "200px" }}  name="question_desc" value={selectedQuestion?.question_desc || ""} onChange={handleInputChange} />
            </div>
            
          </form>
          <div className=" grid grid-cols-3 row-start-3 col-start-2  mt-5 mb-2 gap-4">
           <button className="btn btn-success " onClick={handleSubmit} type="submit">
            SAVE
            </button>
            
            <button className="btn btn-error " onClick={handleClickDelete}>
            DELETE
            </button>

            <button className="btn bg-base-300 " onClick={handleClickCancel} type="button">
              CANCEL
            </button>
          </div>
        </div>
      )}

      {activeTab === 'create' && (
        <div className="card grid grid-cols-1 grid-cols-3">
          <form className="grid grid-cols-3 row-start-1 col-span-3 ">
          <div className="reporttop card row-start-1 col-span-3 flex justify-center">
              <h2 className="card text-base-100 bg-primary">CREATE</h2>                    
          </div>

          <div className="ml-5 row-start-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="question_category_id"
              value={newQuestion.question_category_id}
              onChange={handleNewQuestionChange}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="0">Select Category</option>
              <option value="1">General Skills |  ID: 1</option>
              <option value="2">Cryptography |  ID: 2</option>
              <option value="3">Web Exploitation |  ID: 3</option>
              <option value="4">Forensics |  ID: 4</option>
              <option value="5">Reverse Engineering |  ID: 5</option>
            </select>
            </div>

          <div className="ml-5 ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="question_title" value={newQuestion.question_title} onChange={handleNewQuestionChange} />
            </div>

            

            <div className="ml-5 ">
            <label className="label">
              <span className="label-text">Answer</span>
            </label>
            <input type="text" placeholder="Answer" className="input input-bordered w-full max-w-xs" name="answer" value={newQuestion.answer} onChange={handleNewQuestionChange} />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Hint</span>
            </label>
            <input type="text" placeholder="Hint" className="input input-bordered w-full max-w-xs" name="hint" value={newQuestion.hint} onChange={handleNewQuestionChange} />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Score</span>
            </label>
            <input type="number" placeholder="Score" className="input input-bordered w-full max-w-xs" name="score" value={newQuestion.score} onChange={handleNewQuestionChange} />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered col-span-3"
              name="question_desc"
              value={newQuestion.question_desc}
              onChange={handleNewQuestionChange}
              style={{ resize: "none", width: "400px", height: "200px" }} // Set the width and height
            />
          </div>


            </form>
          <div className="flex items-center grid grid-cols-4 row-start-2 col-start-1 col-span-3 mt-5 mb-2">
            <button className="btn btn-success col-start-2" type="button" onClick={handleCreateQuestion}>
                Create
              </button>
              <button className="btn bg-base-300 ml-2" type="button" onClick={() => setNewQuestion({
              question_title: "",
              question_desc: "",
              answer: "",
              hint: "",
              score: 0,
              question_category_id: "0",
            })}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionManagementcom;
