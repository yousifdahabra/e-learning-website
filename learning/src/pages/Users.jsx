import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import NavContainer from "../components/users/NavContainer";
import ReportBody from "../components/users/ReportBody";
import InviteCourseFormModel from "../components/users/posts/InviteCourseFormModel";
const Users = () =>{

     
    const [isOpenAdd, setisOpenAdd] = useState(false);
    const triggerAddForm = () =>{
        setisOpenAdd((isOpenAdd)=> !isOpenAdd)
    }
    const triggerCloseForm = () =>{
        setisOpenAdd(false)
    }

    return <>
    <Header/>
    <div className="flex main-container">
        <NavContainer/>
        <div className="main">
        <div className="report-container">
            <ReportBody isOpen={triggerAddForm}/>
        </div>

        </div>
    </div>
    <InviteCourseFormModel isOpen={isOpenAdd} isClose={triggerCloseForm}   />

    </>;
}



export default Users;