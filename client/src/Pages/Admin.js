import React, { useState, useEffect } from 'react';
import axios from "axios";

function Admin(props) {
    const [user, setUser] = useState({});
  
    useEffect(() => {
    if (localStorage.getItem("user")) {
      //console.log("User is here!");
      const userObj = JSON.parse(localStorage.getItem("user"));
        axios.get(`/api/users/get/${userObj.email}`).then(res => {
          console.log(res);
          setUser(res.data);
        }).catch(err => console.log(err));
    }
  }, [])

  return (
      <div>
        <h1>Admin Pages</h1>
        <p>Hello {user.name}! You are a {user.role}. Your email is {user.email} and your password is {user.password}.</p>
      </div>
  )
}


export default Admin; 