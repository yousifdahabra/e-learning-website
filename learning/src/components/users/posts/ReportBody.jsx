
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../../utlis/request.js'
import { useNavigate } from "react-router-dom";


const PostsReportBody = ({isOpen}) =>{
    const [coursePosts, setCoursePosts] = useState([]);
    const navigate = useNavigate();


     
     
    const getCoursesPosts = async () => {

        const result = await requestAPI({
            route:"posts/coursesPosts",
            method:"POST",
            body:'',
        })
        console.log('result')
        console.log(result)
        setCoursePosts(result.result)
         
     }
     useEffect(() => {
        getCoursesPosts();
      }, []);
     
    return (
      <div className="report-body">
        <table>
          <thead>
            <tr>
              <th>course name</th>
              <th>Title</th>
              <th>Type</th>
              <th>Content</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coursePosts?.map((c) => (
              <tr>
                <td>{c.course_name}</td>
                <td>{c.username}</td>
                <td>{c.description}</td>

                <td>{c.craete_date}</td>
                <td>
                  <button
                    className="  view"
                    onClick={() => {
                        navigate(`/Posts?course_id=${c.course_id}`);
                    }}
                  >
                    Post
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default PostsReportBody;