
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'
import { useNavigate } from "react-router-dom";


const ReportBody = ({isOpen}) =>{
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();


     
     
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
            {courses?.map((c) => (
              <tr>
                <td>{c.course_name}</td>
                <td>{c.username}</td>
                <td>{c.description}</td>

                <td>{c.craete_date}</td>
                <td>
                  <button
                    className="  delete-btn view"
                    onClick={() => {
                        navigate(`/Posts?course_id=${c.course_id}`);
                    }}
                  >
                    Post
                  </button>
                  <button
                    className="  delete-btn view"
                    onClick={
                      () => {
                          isOpen(c)
                      }}
                  >
                    Invite Students
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ReportBody;