import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import AdminNavContainer from '../components/admin/AdminNavContainer'
import CourseFormModel from '../components/admin/CourseFormModel'
import CourseReportHeader from '../components/admin/CourseReportHeader'
import Boxes from '../components/admin/Boxes'
import CoursesReportBody from '../components/admin/CoursesReportBody'



const AdminDashboard = () =>{

    const [isOpenAdd, setisOpenAdd] = useState(false);

    const triggerAddForm = () =>{
        setisOpenAdd((isOpenAdd)=> !isOpenAdd)
    }
    const triggerCloseForm = () =>{
        setisOpenAdd(false)
    }

    return (
      <>
        <Header />
        <div className="flex main-container">
          <AdminNavContainer />
          <div className="main">
            <Boxes />
            <div className="report-container">
            
            <CourseReportHeader triggerAdd={triggerAddForm} />
            <CoursesReportBody  />
            </div>
          </div>
        </div>
        <CourseFormModel isOpen={isOpenAdd} isClose={triggerCloseForm} />



      </>
    );
}


export default AdminDashboard;