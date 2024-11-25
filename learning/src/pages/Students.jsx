import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import CourseFormModel from '../components/admin/CourseFormModel'
import CourseReportHeader from '../components/admin/CourseReportHeader'
import Boxes from '../components/admin/Boxes'
import CoursesReportBody from '../components/admin/CoursesReportBody'
import StudentsNavContainer from '../components/students/StudentsNavContainer'
import CoursesReportBodyStu from "../components/students/CoursesReportBody";



const AdminDashboard = () =>{

  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [editData, seteditData] = useState([]);

    const triggerAddForm = () =>{
      setisOpenAdd((isOpenAdd)=> !isOpenAdd)
  }
    const triggerEditForm = ($data) =>{
      setisOpenAdd((isOpenAdd)=> !isOpenAdd)
      seteditData($data);
    }
  const triggerCloseForm = () =>{
        setisOpenAdd(false)
    }

    return (
      <> 
        <Header />
        <div className="flex main-container">
          <StudentsNavContainer />
          <div className="main">
             <div className="report-container">
                <CoursesReportBodyStu/> 
              {/* <CourseReportHeader triggerAdd={triggerAddForm} />

              <CoursesReportBody isOpen={triggerEditForm} /> */}

            </div>
          </div>
        </div>
 


      </>
    );
}


export default AdminDashboard;