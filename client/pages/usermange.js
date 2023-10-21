import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.js";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

function Usermange() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    prisma.user
      .findMany()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            {/* สร้างส่วนหัวของตาราง */}
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Date Created</th>
              </tr>
            </thead>
            {/* สร้างส่วนเนื้อหาของตาราง */}
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Usermange;
