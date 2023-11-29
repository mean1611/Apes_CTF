import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "@/function/Pagination";

function usermangecom() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Show 10 items per page

  const getUser = async () => {
    let result = await axios.get('http://localhost:8080/api/user');
    setUsers(result.data.data.sort((a, b) => a.user_id - b.user_id));
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClickAdd = () => {
    // TODO: Add new user
  };

  const handleClickEdit = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleClickDelete = () => {
    const user_id = selectedUser?.user_id;

    if (!user_id) {
      Swal.fire('Please select a user to delete', '', 'warning');
      return;
    }

    Swal.fire({
      title: 'Delete user',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete('http://localhost:8080/api/user/' + user_id);
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
        if (response.status === 200) {
          setSelectedUser(null);
          setUsers(users.filter(user => user.user_id !== user_id));
        } else {
          Swal.fire('Error deleting user', '', 'error');
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_id = selectedUser?.user_id;

    if (!selectedUser) {
      Swal.fire('Please fill in all required fields', '', 'warning');
      return;
    }

    if (!selectedUser.username || !selectedUser.password) {
      Swal.fire('Please fill in all required fields', '', 'error');
      return;
    }

    const response = await axios.put('http://localhost:8080/api/user/' + user_id, {
      username: selectedUser.username,
      password: selectedUser.password,
    });

    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(function(){
        window.location.reload();
      }, 1500);
    } else {
      alert('Error!');
    }
  };

  // Get current users
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="report-component card bg-base-100 shadow-xl">
      <div className="reporttop card bg-primary flex justify-center">
        <h2 className="text-base-100">USER</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* render users data */}
            {currentUsers.length > 0 &&
              currentUsers.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-warning w-24" onClick={() => handleClickEdit(user)}>EDIT</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
<Pagination
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        paginate={paginate}
      />
      <div className="card grid grid-rows-1 grid-cols-4">
        <form className="grid grid-cols-4 row-start-1 col-span-4" >
          <div className="reporttop card row-start-1 col-span-4 flex justify-center ">
            <h2 className="card text-base-100 bg-primary">EDIT</h2>
          </div>
          <div className="ml-5">
            <label className="label">
              <span className="label-text">ID</span>
            </label>
            <input type="text" placeholder="ID" className="input input-bordered w-full max-w-xs" value={selectedUser?.user_id || ""} readOnly />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" value={selectedUser?.email || ""} readOnly />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" name="username" value={selectedUser?.username || ""} onChange={handleInputChange} />
            </div>

            <div className="ml-5">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" name="password" value={selectedUser?.password || ""} onChange={handleInputChange} />
            </div>
          
          </form>
        <div className="flex items-center grid grid-cols-3 row-start-2 col-start-2 col-span-3 mt-5 mb-2 gap-4">
          <button className="btn btn-success" type="submit" onClick={handleSubmit}>SAVE</button>
          <button className="btn btn-error" onClick={handleClickDelete}>DELETE</button>
        </div>
      </div>
      
    </div>
  );
}

export default usermangecom;
