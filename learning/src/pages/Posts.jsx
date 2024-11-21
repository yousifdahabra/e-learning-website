import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/base/Header";
import NavContainer from "../components/users/NavContainer";
import PostsReportBody from "../components/users/posts/ReportBody";
import PostsReportHeader from "../components/users/posts/PostsReportHeader";
import PostsCourseFormModel from "../components/users/posts/PostsCourseFormModel";
const Posts = () =>{
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
    return <>
    <Header/>
    <div className="flex main-container">
        <NavContainer/>

         <div className="main">
            <div className="report-container">
                <PostsReportHeader triggerAdd={triggerAddForm} />
                <PostsReportBody isOpen={triggerEditForm}/>
            </div>
        </div>
    </div>

    <PostsCourseFormModel isOpen={isOpenAdd} isClose={triggerCloseForm} editData={editData}  />
    </>;
}



export default Posts;