import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import AdminNavContainer from '../components/admin/AdminNavContainer'
import ReportHeader from '../components/admin/ReportHeader'
import Boxes from '../components/admin/Boxes'
import CoursesReportBody from '../components/admin/CoursesReportBody'



const AdminDashboard = () =>{
    return (
      <>
        <Header />
        <div className="flex main-container">
          <AdminNavContainer />
          <div className="main">
            <Boxes />
            <div className="report-container">
            
              <div className="report-header">
                <h1 className="recent-Articles">Courses Report</h1>
                <div className="report-btn flex flex-wrap align-content-center justify-content-center align-items-center">
                  <button id="transaction_btn" className="view">
                    Add
                  </button>
                </div>
              </div>
              <CoursesReportBody  />




            </div>
          </div>
        </div>
      </>
    );
}


export default AdminDashboard;