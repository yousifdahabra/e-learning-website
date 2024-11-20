import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../utlis/request.js'

const CourseFormModel = ({isOpen,isClose,editData = {}}) =>{
    const [instructorOptions, setInstructorOptions] = useState([]);

    const [formData,setFormData] = useState({
        'course_name':'',
        'user_id':0,
        'description':'',
        'course_id':0,
    })

    const getInstructorOptions = async () =>{
        const result = await requestAPI({
            route:"courses/instructorCourse",
            method:"POST",
            body:formData,
        })
        const instructors = result.result
        setInstructorOptions(instructors)
    } 
    useEffect(() => {
        getInstructorOptions();
        if (editData) {
            setFormData({
                course_name: editData.course_name || "",
                user_id: editData.user_id || 0,
                description: editData.description || "",
                course_id: editData.course_id || 0,
            });
        }
    }, [editData]);

    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="course_name">course name</label>
                    <input 
                    value={formData.course_name}

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
                    value={formData.user_id}

                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            user_id:e.target.value
                        })
                    }}

                    >
                        <option value="0">Select</option>
                        {instructorOptions.map((instructor) => (
                                <option key={instructor.user_id} value={instructor.user_id}>
                                    {instructor.username}
                                </option>
                            ))}

                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">Note</label>
                    <textarea 
                    value={formData.description}
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