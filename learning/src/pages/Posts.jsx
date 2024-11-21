import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/base/Header";
import NavContainer from "../components/users/NavContainer";
import PostsReportBody from "../components/users/posts/ReportBody";
import PostsReportHeader from "../components/users/posts/PostsReportHeader";
const Posts = () =>{

    return <>
    <Header/>
    <div className="flex main-container">
        <NavContainer/>

         <div className="main">
            <div className="report-container">
                <PostsReportHeader/>

            </div>
        </div>
    </div>
    </>;
}



export default Posts;