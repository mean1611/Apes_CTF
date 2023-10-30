import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function QuestionManagement() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    question_title: "",
    question_desc: "",
    answer: "",
    hint: "",
    score: 0,
    question_category_id: "1", // เริ่มต้นเป็น "1"
  });

  const getQuestions = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/question");
      setQuestions(result.data.data.sort((a, b) => a.question_id - b.question_id));
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const handleClickEdit = (question) => {
    setSelectedQuestion(question);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedQuestion({ ...selectedQuestion, [name]: value });
  }

  const handleNewQuestionChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "score" || name === "question_category_id") {
      setNewQuestion({ ...newQuestion, [name]: parseInt(value, 10) });
    } else {
      setNewQuestion({ ...newQuestion, [name]: value });
    }
  }

  const handleClickDelete = () => {
    const question_id = selectedQuestion?.question_id;

    if (!question_id) {
      Swal.fire("Please select a question to delete", "", "warning");
      return;
    }

    Swal.fire({
      title: "Delete Question",
      text: "Are you sure you want to delete this question?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete("http://localhost:8080/api/question/" + question_id);
          if (response.status === 200) {
            setSelectedQuestion(null);
            setQuestions(questions.filter((question) => question.question_id !== question_id));
          } else {
            Swal.fire("Error deleting question", "", "error");
          }
        } catch (error) {
          console.error("Error deleting question:", error);
          Swal.fire("Error deleting question", "", "error");
        }
      }
    });
  }

  const handleCreateQuestion = async () => {
    if (!newQuestion.question_title || !newQuestion.question_desc || !newQuestion.answer || newQuestion.score === 0 || newQuestion.question_category_id === "0") {
      Swal.fire("Please fill in all required fields", "", "warning");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/question", newQuestion);

      if (response.data.status === 201) {
        // Show a success message with the API message
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
        setNewQuestion({
          question_title: "",
          question_desc: "",
          answer: "",
          hint: "",
          score: 0,
          question_category_id: "1", // เริ่มต้นเป็น "1"
        });
        getQuestions();
      } else {
        // Show an error message with the API message
        Swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Show a generic error message if the request fails
      Swal.fire({
        title: "Error!",
        text: "An error occurred while processing your request",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question_id = selectedQuestion?.question_id;

    try {
      const response = await axios.put("http://localhost:8080/api/question/" + question_id, {
        question_title: selectedQuestion.question_title,
        question_desc: selectedQuestion.question_desc,
        answer: selectedQuestion.answer,
        hint: selectedQuestion.hint,
        score: selectedQuestion.score,
        question_category_id: selectedQuestion.question_category_id,
      });

      if (response.status === 200) {
        Swal.fire("Question data saved successfully", "", "success");
        window.location.reload();
      } else {
        Swal.fire("Error saving question data", "", "error");
      }
    } catch (error) {
      console.error("Error saving question data:", error);
      Swal.fire("Error saving question data", "", "error");
    }
  }

  return (
    <div>
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
            {questions.length > 0 &&
              questions.map((question) => (
                <tr key={question.question_id}>
                  <td>{question.question_id}</td>
                  <td>{question.question_title}</td>
                  <td>{question.question_desc}</td>
                  <td>{question.answer}</td>
                  <td>{question.hint}</td>
                  <td>{question.score}</td>
                  <td>{question.question_category_id}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleClickEdit(question)}>Edit</button>
                    <button className="btn btn-error" onClick={handleClickDelete}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <div className="card-header">
          Edit Question
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Question ID" className="input input-bordered w-full max-w-xs" value={selectedQuestion?.question_id || ""} readOnly />
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="question_title" value={selectedQuestion?.question_title || ""} onChange={handleInputChange} />
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" name="question_desc" value={selectedQuestion?.question_desc || ""} onChange={handleInputChange} />
            <input type="text" placeholder="Answer" className="input input-bordered w-full max-w-xs" name="answer" value={selectedQuestion?.answer || ""} onChange={handleInputChange} />
            <input type="text" placeholder="Hint" className="input input-bordered w-full max-w-xs" name="hint" value={selectedQuestion?.hint || ""} onChange={handleInputChange} />
            <input type="number" placeholder="Score" className="input input-bordered w-full max-w-xs" name="score" value={selectedQuestion?.score || 0} onChange={handleInputChange} />
            <select
              name="question_category_id"
              value={selectedQuestion?.question_category_id || ""}
              onChange={handleInputChange}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
            <button className="btn btn-success ml-2" type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          Create Question
        </div>
        <div className="card-body">
          <form>
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="question_title" value={newQuestion.question_title} onChange={handleNewQuestionChange} />
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" name="question_desc" value={newQuestion.question_desc} onChange={handleNewQuestionChange} />
            <input type="text" placeholder="Answer" className="input input-bordered w-full max-w-xs" name="answer" value={newQuestion.answer} onChange={handleNewQuestionChange} />
            <input type="text" placeholder="Hint" className="input input-bordered w-full max-w-xs" name="hint" value={newQuestion.hint} onChange={handleNewQuestionChange} />
            <input type="number" placeholder="Score" className="input input-bordered w-full max-w-xs" name="score" value={newQuestion.score} onChange={handleNewQuestionChange} />
            <select
              name="question_category_id"
              value={newQuestion.question_category_id}
              onChange={handleNewQuestionChange}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
            <button className="btn btn-success ml-2" type="button" onClick={handleCreateQuestion}>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuestionManagement;
