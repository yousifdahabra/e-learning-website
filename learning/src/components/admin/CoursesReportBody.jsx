
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'


const CoursesReportBody = ({isOpen}) =>{
    const [courses, setCourses] = useState([]);


    const deleteCourse = async (course_id) => {
        const data = new FormData();
        data.append("course_id", course_id);
        const result = await requestAPI({
            route:"courses/deleteCourse",
            method:"POST",
            body:data,
        })
        getCourses()
      }
     
    const getCourses = async () => {

        const result = await requestAPI({
            route:"courses/Courses",
            method:"POST",
            body:'',
        })
        setCourses(result.result)
         
     }
     useEffect(() => {
        getCourses();
      }, []);
     
    return (
        <div className="report-body">


        <table>
            <thead>
                <tr>
                    <th>course name</th>
                    <th>user name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {                    
                    courses?.map((c) => (
                        <tr   >
                            <td>{c.course_name}</td>
                            <td>{c.username}</td>
                            <td>{c.description}</td>
                             
                            <td>{c.craete_date}</td>
                            <td>
                                <button className="delete-btn view"
                                onClick={() => {
                                    
                                    deleteCourse(c.course_id)
                                     
                                }}
                                  
                                
                                >Delete</button>
                                <button className="delete-btn view"
                                onClick={
                                    () => {
                                        isOpen(c)
                                    }
                                }
                                  
                                
                                >Edit</button>
                            </td>
                        </tr>            
                    ))

               
                }
            </tbody>
    
        </table>
    </div>
    )
}

export default CoursesReportBody;