import React, { useState } from "react";
import { requestAPI } from '../../utlis/request.js'

const Boxes = () =>{
    const [getReport,setReport]= useState({
        'students':0,
        'instructors':0,
        'courses':0,
    });
    const reportInfo = async ()=>{
        const result = await requestAPI({
            route:"users/totalReport",
            method:"POST",
            body:'',
        })
        const report = result.result
        setReport(report)

    }

    return (
        <div className="flex justify-content-evenly align-items-center justify-content-space-around flex-wrap box-container ">
        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2 id="incomes" className="topic-heading ">{getReport.students}</h2>
                <h2 className="topic-title">Students</h2>
            </div>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </div>

        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2 className="topic-heading">{getReport.instructors}</h2>
                <h2 className="topic-title">Instructors</h2>
            </div>
            <i className="fa fa-minus" aria-hidden="true"></i>
        </div>

        <div className="flex align-items-center justify-content-space-between box ">
            <div className="topic">
                <h2   className="topic-heading">{getReport.courses}</h2>
                <h2 className="topic-title">Courses</h2>
            </div>
            <i className="fa fa-balance-scale" aria-hidden="true"></i>
        </div>
    </div>

    )
};

export default Boxes;