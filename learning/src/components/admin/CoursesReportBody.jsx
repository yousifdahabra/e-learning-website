
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'


const CoursesReportBody = () =>{
    const [courses, setCourses] = useState([]);


    const deleteCourse = async (user_id) => {
        const data = new FormData();
        data.append("user_id", user_id);
        const result = await requestAPI({
            route:"courses/deleteCourse",
            method:"POST",
            body:data,
        })
        console.log(result)
        getCourses()
      }
     
    const getCourses = async () => {

        const result = await requestAPI({
            route:"courses/Courses",
            method:"POST",
            body:'',
        })
        console.log('result')
        console.log(result)
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
                    <th>user id</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {                    
                    courses?.map((c) => (
                        <tr   >
                            <td>{c.course_name}</td>
                            <td>{c.user_id}</td>
                             
                            <td>{c.craete_date}</td>
                            <td>
                                <button className="delete-btn view"
                                onClick={() => {
                                    
                                    deleteCourse(c.course_id)
                                     
                                }}
                                  
                                
                                >Delete</button>
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