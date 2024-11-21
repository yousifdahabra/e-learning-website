import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestAPI } from '../../../utlis/request.js'
import useForm from "../../../hooks/useForm.js";

const PostsCourseFormModel = ({isOpen,isClose,editData = {}}) =>{

   

    const {form,updateForm} = useForm({
        material_title:'',
        material_type:'',
        material_content:'',
        course_id:0,
    })

  
    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="course_name">material title</label>
                    <input 
                    value={form.material_title}
                    name="material_title"
                    onChange={updateForm}
                    type="text"/>
                </div>
                
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select Cours</label>
                    <select 
                    value={form.course_id}
                    name="course_id"
                    onChange={updateForm}
                    >
                        <option value="0">Select</option>
                        

                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="type">Select  type</label>
                    <select 
                    value={form.material_type}
                    name="material_type"
                    onChange={updateForm}
                    >
                        <option value="0">Select</option>
                        <option value="announcement">announcement</option>
                        <option value="assignment">assignment</option>
                        

                    </select>
                </div>
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">material content</label>
                    <textarea 
                    value={form.material_content}
                    name="material_content"
                    onChange={updateForm}
                    
                    ></textarea>
                </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button onClick={ async ()=>{
                            const result = await requestAPI({
                                route:"courses/mangeCourse",
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


export default PostsCourseFormModel;