import React, { useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'

const CourseFormModel = ({isOpen,isClose}) =>{
    const [formData,setFormData] = useState({
        'course_name':'',
        'user_id':0,
        'description':'',
    })

    return (
        <div id="form_model" className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="course_name">course name</label>
                    <input 
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            course_name:e.target.value
                        })
                    }}
                    type="text"/>
                </div>
                
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select User</label>
                    <select 
                    
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            user_id:e.target.value
                        })
                    }}

                    >
                        <option value="0">Select</option>
                        <option value="1">user 1</option>
                        <option value="2">user 2</option>
                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">Note</label>
                    <textarea 
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            description:e.target.value
                        })
                    }}
                    
                    ></textarea>
                </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button onClick={ async ()=>{
                            formData['course_id'] = 0;
                            const result = await requestAPI({
                                route:"courses/mangeCourse",
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