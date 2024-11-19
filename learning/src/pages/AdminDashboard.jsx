import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import AdminNavContainer from '../components/admin/AdminNavContainer'
import Boxes from '../components/admin/Boxes'
import axios from "axios";



const AdminDashboard = () =>{
    return (
        <>
        <Header/>
        <div className="flex main-container">

        <AdminNavContainer/>
        <div className="main">
        <Boxes/>

        </div>

        </div>
        </>
    );
}


export default AdminDashboard;