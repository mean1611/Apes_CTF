import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.login.user);

  // แสดงค่า username ใน Console
  console.log("Username from Redux store:", user && user.username);

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add other user information here */}
        </div>
      )}
    </div>
  );
}

export default Profile;
