import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../../utlis/request.js'
import useForm from "../../../hooks/useForm.js";
import { useSearchParams } from "react-router-dom";

const InviteCourseFormModel = ({isOpen,isClose}) =>{
     
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('course_id');
 
 
    const {form,updateForm,setFieldValue} = useForm({
        course_id:courseId,
        student_ids:[],
        invite_note:'',
    })
 
  
    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                
                <div className="form-group flex flex-wrap-nowrap align-items-start  ">
                    <label for="type">Select  type</label>
                    <select 
                    value={form.student_ids}
                    name="student_ids"
                    onChange={updateForm}
                     
                    >
                        <option value="0">Select</option>
                        <option value="announcement">announcement</option>
                        <option value="assignment">assignment</option>
                        

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