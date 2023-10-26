import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Usermanage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUser = async () => {
    let result = await axios.get('http://localhost:8080/api/user');
    setUsers(result.data.data.sort((a, b) => a.user_id - b.user_id));
    console.log(result.data.data);
  };

  useEffect(() => {
    getUser();
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
    const user_id = selectedUser?.user_id;

    // ตรวจสอบว่า selectedUser มีค่าหรือไม่
    if (!user_id) {
      // แสดงข้อความแจ้งเตือน
      Swal.fire('กรุณาเลือกผู้ใช้ที่ต้องการลบก่อน', '', 'warning');
      return;
    }

    Swal.fire({
      title: 'ต้องการลบข้อมูลผู้ใช้',
      text: 'ต้องการลบข้อมูลผู้ใช้หรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ใช่, ลบ',
      cancelButtonText: 'ยกเลิก',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // ลบผู้ใช้จาก database
        const response = await axios.delete('http://localhost:8080/api/user/' + user_id);

        if (response.status === 200) {
          // ลบข้อมูลออกจาก state
          setSelectedUser(null);

          // อัปเดตรายการผู้ใช้หลังจากลบ
          setUsers(users.filter(user => user.user_id !== user_id));
        } else {
          Swal.fire('เกิดข้อผิดพลาดในการลบข้อมูล', '', 'error');
        }
      }
    });
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
                    <button className="btn btn-warning" onClick={() => handleClickEdit(user)}>เลือก</button>
                    <button className="btn btn-error" onClick={handleClickDelete}>ลบ</button>
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
            <input type="text" placeholder="รหัสผู้ใช้" className="input input-bordered w-full max-w-xs" value={selectedUser?.user_id || ""} readOnly />
            <input type="text" placeholder="อีเมล" className="input input-bordered w-full max-w-xs" value={selectedUser?.email || ""} readOnly />
            <input type="text" placeholder="ชื่อผู้ใช้" className="input input-bordered w-full max-w-xs" name="username" value={selectedUser?.username || ""} onChange={handleInputChange} />
            <input type="text" placeholder="รหัสผ่าน" className="input input-bordered w-full max-w-xs" name="password" value={selectedUser?.password || ""} onChange={handleInputChange} />
            <button className="btn btn-success ml-2" type="submit">บันทึก</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usermanage;
