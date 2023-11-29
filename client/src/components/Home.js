import React, { useState, useEffect } from "react";

function Home() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("auth-token");

      if (!token) {
        console.error("No token found. User not authenticated.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/api/auth/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token")
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUserData(user);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {userData ? (
        <div>
          <p>User Name: {userData.name}</p>
          <p>User Email: {userData.email}</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Home