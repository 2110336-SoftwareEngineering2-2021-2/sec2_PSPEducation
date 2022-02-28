import React, { useState, useEffect } from "react";
import "./myProfile.css";
import axios from "axios";

export default function MyProfile({ cookie, setCookie, removeCookie }) {
    
    // const [profile, setProfile] = useState({});
    // const [state, setState] = useState(false);
    let data = null;
    
    function fetch(){
        axios
        .get(`http://localhost:3000/auth/user/${cookie.user}`, {
          withCredentials: true,
        })
        .then((response) => {
          data = response.data;
        //   setProfile(data);
          console.log(data)
        })
        .catch((e) => {
          console.log(e);
        });
    }
    useEffect(() => {
        fetch()
      }, [data]);
      return (
          <div className="profilePage">
            <div className="profileTitle"></div>

          </div>
      );
    }