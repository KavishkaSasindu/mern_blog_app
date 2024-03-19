import React from "react";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user avatars from backend API
    fetch("http://localhost:3000/api/user")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.user) {
          setUsers(data.user);
        }
      })
      .catch((error) => console.error("Error fetching user avatars:", error));
  }, []);
  console.log(users);
  return (
    <div>
      <h1>User Avatars</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <img src={`http://localhost:3000/${user.avatar}`} alt={user.name} />
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatePost;
