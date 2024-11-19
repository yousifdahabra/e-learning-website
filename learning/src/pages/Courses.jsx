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
  const [editData, seteditData] = useState([]);

    const triggerAddForm = () =>{
      setisOpenAdd((isOpenAdd)=> !isOpenAdd)
  }
    const triggerEditForm = ($data) =>{
      setisOpenAdd((isOpenAdd)=> !isOpenAdd)
      seteditData($data);
      console.log($data)
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

              <CoursesReportBody isOpen={triggerEditForm} />

            </div>
          </div>
        </div>
        <CourseFormModel isOpen={isOpenAdd} isClose={triggerCloseForm} editData={editData}  />



      </>
    );
}


export default AdminDashboard;