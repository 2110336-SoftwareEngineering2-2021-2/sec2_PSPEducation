import React, { useState, useEffect } from "react";
import "./myProfile.css";
import { CloseOutlined, AddCircle } from "@mui/icons-material";
import ManageProfile from "./ManageProfile";
import axios from "axios";

export default function MyProfile({ cookie, setCookie, removeCookie }) {
    
    // const [profile, setProfile] = useState({});
    // const [state, setState] = useState(false);
  const [displayState, setDisplayState] = useState(false);

    const [data, setData] = useState({});

    function EditPopup(props) {
        // console.log(props)
        return props.trigger ? (
          <div className="viewEditPopup">
            <div className="viewEditPopupContainer">
              <button
                className="closeEditPopup"
                onClick={() => props.setTrigger(false)}
              >
                <CloseOutlined />
              </button>
              <ManageProfile
                id={props.id}
                data={props.data}
                setTrigger={props.setTrigger}
              />
            </div>
          </div>
        ) : (
          ""
        );
      }
     function fetch(){
        axios
        .get(`http://localhost:3000/auth/user/${cookie.user}`, {
          withCredentials: true,
        })
        .then((response) => {
          setData(response.data)
          console.log(data)
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // const fetch = async () => {
    //     try {
    //         axios
    //         .get(`http://localhost:3000/auth/user/${cookie.user}`, {
    //           withCredentials: true,
    //         })
    //         .then((response) => {
    //           setData(response.data)
    //           console.log(data)
    //         })
    //         .catch((e) => {
    //           console.log(e);
    //         });
    //     } catch(err) {
    //       // error handling code
    //     } 
    //   }

    useEffect(() => {
        fetch()
        console.log(data)
      }, []);



    return (
    <div>
    <button
        className="editButton"
        onClick={() => {
        setDisplayState(true);
    }}>Edit</button>

    <EditPopup
        className=""
        trigger={displayState}
        setTrigger={setDisplayState}
        data={data}
        id={cookie.user}
      />
    </div>
  );
}