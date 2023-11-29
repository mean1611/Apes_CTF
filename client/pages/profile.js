import React, { useEffect, useState } from 'react';
import Navbaruser from '../components/user/navbarUser.js';
import Navbaradmin from '@/components/admin/navbarAdmin.js';
import Navbar from '../components/home/navbar.js';
import axios from 'axios';
import Profileuser from '../components/user/profileuser';
import Swal from "sweetalert2";

function Profile() {
  const [userdata, setUserdata] = useState([]);
  const [userscore, setScore] = useState([]);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      setUserdata(JSON.parse(userData));
      console.log('Username from localStorage:', userData);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/solve/userscore/${userdata.user_id}`);
        setScore(result.data);
      } catch (error) {
        console.error('Error fetching user score:', error);
      }
    };

    if (userdata && userdata.user_id) {
      fetchData();
    }
  }, [userdata]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      Swal.fire('Please fill in all fields.', '', 'warning');
      return;
    }

    // เพิ่มเงื่อนไขตรวจสอบความยาวของ password
    if (newPassword.length < 8) {
      Swal.fire('Password must be at least 8 characters long.', '', 'warning');
      return;
    }

    try {
      const result = await axios.get(`http://localhost:8080/api/userprofile/${userdata.user_id}`);

      if (oldPassword !== result.data.data.password) {
        Swal.fire('Incorrect old password.', '', 'warning');
        return;
      }

      if (newPassword !== confirmPassword) {
        Swal.fire('New password and confirm password do not match.', '', 'warning');
        return;
      }

      const passwordChangeResult = await axios.put(`http://localhost:8080/api/userprofile/password/${userdata.user_id}`, {
        password: newPassword,
      });

      if (passwordChangeResult.data.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: passwordChangeResult.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setPasswordError('');
      } else {
        setPasswordError(passwordChangeResult.data.message);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      Swal.fire('An error occurred while changing the password.', '', 'warning');
      setTimeout(function(){
        window.location.reload();
     }, 1500);
    }
  };

  return (
    <div className="bg-primary">
      {userdata && userdata.user_role_id == 1 && <Navbaradmin />}
      {userdata && userdata.user_role_id == 2 && <Navbaruser userData={userdata} />}
      {!userdata && <Navbar />}
      <div className="banner-learn">
        <div className="practice-column ">
          <Profileuser userData={userdata} UserScore={userscore.score} />
        </div>
      </div>
      {userdata && (
        <div>
          <div className="reporttop card  bg-primary  flex justify-center">
            <h2 className="  text-base-100  ">Reset Password</h2>
          </div>
          <div className="card ">
            <form className="body-profile  bg-primary grid grid-cols-1 place-justify-item" onSubmit={handleChangePassword}>
              <div className='place-self-center' >
                <label className="label">
                  <span className="label-text text-base-100">Old Password</span>
                </label>
                <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Old Password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={handleInputChange}/>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-base-100">New Password</span>
                </label>
                <input className="input input-bordered w-full max-w-xs" type="password" placeholder="New Password" id="newPassword" name="newPassword" value={newPassword} onChange={handleInputChange}/>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-base-100">Confirm Password</span>
                </label>
                <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleInputChange}/>
              </div>

              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
              <button className="btn btn-success w-56 mt-5" type="submit">Change Password</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
