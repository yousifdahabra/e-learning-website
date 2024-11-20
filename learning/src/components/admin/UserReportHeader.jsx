import React from "react";
const UserReportHeader =({triggerAdd}) => {

    return (
        <div className="report-header">
        <h1 className="recent-Articles">Users Report</h1>
        <div className="report-btn flex flex-wrap align-content-center justify-content-center align-items-center">
          <button id="transaction_btn" onClick={triggerAdd} className="view">
            Add Instructor
          </button>
        </div>
      </div>


    )
}


export default UserReportHeader