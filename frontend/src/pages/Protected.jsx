import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLogedIn = () => {
        const user_id = localStorage.getItem('user_id');
        if(user_id == null || !user_id){
          navigate('/signup')
        }
    }
    checkUserLogedIn()
  }, []);


  return (

    <div>
        <Component />
    </div>
  );
}

export default Protected;
