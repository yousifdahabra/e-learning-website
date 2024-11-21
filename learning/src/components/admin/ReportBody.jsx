
import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'


const ReportBody = () =>{
    const [users, setUsers] = useState([]);


    const desactiveUser = async (user_id,is_active) => {
        const data = new FormData();
        data.append("user_id", user_id);
        data.append("is_active", is_active);
        const result = await requestAPI({
            route:"users/Desactive",
            method:"POST",
            body:data,
        })


        
        getUsers()
      }
     
    const getUsers = async () => {
        const data = new FormData();

        const result = await requestAPI({
            route:"users/Users",
            method:"POST",
            body:'',
        })
        setUsers(result.result)
         
     }
     useEffect(() => {
        getUsers();
      }, []);
     
    return (
        <div className="report-body">


        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>is active</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {                    
                    users?.map((u) => (
                        <tr   >
                            <td>{u.username}</td>
                            <td>{u.role}</td>
                             
                            <td>{u.is_active}</td>
                            <td>{u.create_date}</td>
                            <td>
                                <button className="delete-btn view"
                                onClick={() => {
                                    
                                    desactiveUser(u.user_id,u.is_active)
                                     
                                }}
                                  
                                
                                >Desactive</button>
                            </td>
                        </tr>            
                    ))

               
                }
            </tbody>
    
        </table>
    </div>
    )
}

export default ReportBody;