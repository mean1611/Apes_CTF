import React, { useState, useEffect } from "react";
import axios from "axios";

function Usermanage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUser = async() => {
    let result = await axios.get('http://localhost:8080/api/user')
    setUsers(result.data.data.sort((a, b) => a.user_id - b.user_id))
    console.log(result.data.data)
  };

  useEffect(() => {
    getUser()
  }, []);

  const handleClickAdd = () => {
    // TODO: เพิ่มผู้ใช้ใหม่
  };

  const handleClickEdit = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleClickDelete = () => {
    // TODO: ลบผู้ใช้
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_id = selectedUser?.user_id;

    const response = await axios.put('http://localhost:8080/api/user/' + user_id, {
      username: selectedUser.username,
      password: selectedUser.password,
    });

    if (response.status === 200) {
      alert('บันทึกข้อมูลเรียบร้อย');
      // รีโหลดหน้า
      window.location.reload();
    } else {
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* render users data */}
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-warning" id={user.user_id} onClick={() => handleClickEdit(user)}>แก้ไข</button>
                    <button className="btn btn-error" id={user.user_id} onClick={handleClickDelete}>ลบ</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <div className="card-header">
          แก้ไขข้อมูลผู้ใช้
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="รหัสผู้ใช้" className="input input-bordered w-full max-w-xs" value={selectedUser?.user_id || ""} />
            <input type="text" placeholder="อีเมล" className="input input-bordered w-full max-w-xs" value={selectedUser?.email || ""} />
            <input type="text" placeholder="ชื่อผู้ใช้" className="input input-bordered w-full max-w-xs" name="username" value={selectedUser?.username || ""} onChange={handleInputChange} />
            <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" name="password"value={selectedUser?.password || ""} onChange={handleInputChange} />
            <button className="btn btn-success" type="submit">บันทึก</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usermanage;
