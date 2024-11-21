import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../../utlis/request.js'
import useForm from "../../../hooks/useForm.js";
 
const InviteCourseFormModel = ({isOpen,isClose,course_id }) =>{
    const [studetnsOptions, setStudetnsOptions] = useState([]);
    const [courseOptions, setCourseOptions] = useState([]);
    const {form,updateForm} = useForm({
        course_id:course_id,
        student_id:0,
        invite_note:'',
    })

    

 

    const getStudetnsOptions = async () =>{
        const result = await requestAPI({
            route:"users/getStudents",
            method:"POST",
            body:'', 
        })
        const studetns = result.result
        setStudetnsOptions(studetns)
    } 

    const getCoursesOptions = async () =>{
        const result = await requestAPI({
            route:"courses/Courses",
            method:"POST",
            body:'', 
        })
        const courses = result.result
        setCourseOptions(courses)
    } 

    useEffect(() => {
        getCoursesOptions()
        getStudetnsOptions();
     }, []); 
 
  
    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
             
            <div className="form flex flex-direction-column">
            <div className="form-group flex flex-wrap-nowrap align-items-start  ">
                    <label for="type">Select  student</label>
                    <select 
                    value={form.course_id}
                    name="course_id"
                    onChange={updateForm}
                     
                    >
                        <option value="0">Select</option>
                        {courseOptions.map((course) => (
                                <option key={course.course_id} value={course.course_id}>
                                    {course.course_name}
                                </option>
                            ))}
                        

                    </select>
                </div>

                <div className="form-group flex flex-wrap-nowrap align-items-start  ">
                    <label for="type">Select  student</label>
                    <select 
                    value={form.student_id}
                    name="student_id"
                    onChange={updateForm}
                     
                    >
                        <option value="0">Select</option>
                        {studetnsOptions.map((studetn) => (
                                <option key={studetn.user_id} value={studetn.user_id}>
                                    {studetn.username}
                                </option>
                            ))}
                        

                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">invite note</label>
                    <textarea 
                    value={form.invite_note}
                    name="invite_note"
                    onChange={updateForm}
                    
                    ></textarea>
                </div>
               

                <div className=" flex flex-wrap-nowrap align-items-start  form-group ">
                    <button onClick={ async ()=>{
                            const result = await requestAPI({
                                route:"courses/entollCourse",
                                method:"POST",
                                body:form,
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


export default InviteCourseFormModel;