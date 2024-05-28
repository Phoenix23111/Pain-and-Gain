import React, { useContext, useEffect } from "react";
import GetUserContext from "../../context/authentication/GetUserContext";

const Homepage = () => {
  const a = useContext(GetUserContext);
  useEffect(() => {
    a.FetchUserData();
    // eslint-disable-next-line
  }, []);
  console.log("this is pikachu state", a.state);
  return (
    <div className="pt-16">
      <h2>Welcome to the Home Page</h2>
      {a.state ? (
        <div>
          <p>User Name: {a.state.name}</p>
          <p>User Email: {a.state.email}</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Homepage;
