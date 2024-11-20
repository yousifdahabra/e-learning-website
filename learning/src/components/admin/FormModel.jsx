import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'

const CourseFormModel = ({isOpen,isClose,editData = {}}) =>{

    const [formData,setFormData] = useState({
        'username':'',
        'password':'',
    })

    useEffect(() => {
        if (editData) {
            setFormData({
                username: editData.username || "",
            });
        }
    }, [editData]);

    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="username">User Name</label>
                    <input 
                    value={formData.username}

                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            username:e.target.value
                        })
                    }}

                    type="text"/>
                </div>
                
                
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">password</label>

                    <input type="password"
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                password:e.target.value
                            })
                        }}
                    
                    />
                 </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button onClick={ async ()=>{
                            const result = await requestAPI({
                                route:"users/addInstructor",
                                method:"POST",
                                body:formData,
                            })
                            isClose()
                            console.log(result)
                     
                    
                    }} 
                    className="view" type="button">Submit</button>
                    <button onClick={isClose} id="close_form_model" className="view" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default CourseFormModel;