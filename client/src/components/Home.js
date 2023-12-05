import React, {useEffect, useContext } from "react";
import GetUserContext from "../context/authentication/GetUserContext";

function Home() {
  const a = useContext(GetUserContext)
  useEffect(() => {
    a.FetchUserData()
      // eslint-disable-next-line 
  }, []);


  return (
    <div className=" bg-yellow-400 text-black">
      this is application Home
    </div>
  );
}

export default Home