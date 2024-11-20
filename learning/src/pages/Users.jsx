import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import NavContainer from "../components/users/NavContainer";
import ReportBody from "../components/users/ReportBody";

const Users = () =>{

    return <>
    <Header/>
    <div className="flex main-container">
        <NavContainer/>
        <div className="main">
        <div className="report-container">
            <ReportBody/>
        </div>

        </div>


    </div>
    </>;
}



export default Users;