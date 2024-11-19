import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import AdminNavContainer from '../components/admin/AdminNavContainer'
import ReportHeader from '../components/admin/ReportHeader'
import Boxes from '../components/admin/Boxes'
import axios from "axios";



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
                <h1 className="recent-Articles">Users Report</h1>
                <div className="report-btn flex flex-wrap align-content-center justify-content-center align-items-center">
                  <button id="transaction_btn" className="view">
                    Add
                  </button>
                </div>
              </div>




            </div>
          </div>
        </div>
      </>
    );
}


export default AdminDashboard;