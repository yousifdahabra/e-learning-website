import React from "react";
const ReportHeader =({triggerAdd}) => {

    return (
    <div className="report-header">
        <h1 className="recent-Articles">User Report</h1>
        <div className="report-btn flex flex-wrap align-content-center justify-content-center align-items-center">
            <button  className="view" onClick={triggerAdd} >Add</button>
        </div>

    </div>

    )
}


export default ReportHeader