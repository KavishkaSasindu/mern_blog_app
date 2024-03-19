import React from "react";
import { useEffect, useState } from "react";

const Author = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user avatars from backend API
    fetch("localhost:3000/api/user")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.user) {
          setUsers(data.user);
        }
      })
      .catch((error) => console.error("Error fetching user avatars:", error));
  }, []);
  return (
    <div>
      <div>Author</div>
    </div>
  );
};

export default Author;
