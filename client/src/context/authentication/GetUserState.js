import React, { useState } from 'react'
import GetUserContext from './GetUserContext'


const GetUserState = (props) => {
    const [state, setstate] = useState()
    const FetchUserData = async ()=>{
        
        
        
        console.log("this is a token="+localStorage.getItem("auth-token"))
    
        // Fetch user data
        const userResponse = await fetch("http://localhost:3001/api/auth/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token") // Include the auth token in the headers
          },
        });
    
        const userData = await userResponse.json();
        setstate(userData)
        console.log(userData);
        console.log(state);
    
        // Redirect to home page // Assuming "/" is the path for the home page
      
    }
  return (
    <GetUserContext.Provider value={{state,FetchUserData}}>
        {props.children}
    </GetUserContext.Provider>
  )
}

export default GetUserState