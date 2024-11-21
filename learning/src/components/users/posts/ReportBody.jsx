
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../../utlis/request.js'
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const PostsReportBody = ({triggerAdd}) =>{
    const [coursePosts, setCoursePosts] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const course_id = searchParams.get('course_id');


      
      
    const getCoursesPosts = async () => {

        const result = await requestAPI({
            route:"posts/coursesPosts",
            method:"POST",
            body:{course_id:course_id},
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
              <th>Attach</th>
              <th>Date</th>
             </tr>
          </thead>
          <tbody>
            {coursePosts?.map((c) => (
              <tr>
                <td>{c.course_name}</td>
                <td>{c.material_title}</td>
                <td>{c.material_type}</td>
                
                <td>{c.material_content}</td>
                <td>
                  {c.material_file != null &&  <a href={`http://localhost/learning/back/upload/assignments/${c.material_file}`}  download >Attach</a>}
                  
                  
                  </td>
                <td>{c.create_date}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default PostsReportBody;