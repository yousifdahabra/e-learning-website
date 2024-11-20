import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import NavContainer from "../components/users/NavContainer";

const Users = () =>{

    return <>
    <Header/>
    <div className="flex main-container">

        <NavContainer/>
    </div>
    </>;
}



export default Users;