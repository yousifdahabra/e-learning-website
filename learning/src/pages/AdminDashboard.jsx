import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/base/Header'
import AdminNavContainer from '../components/AdminNavContainer'
import axios from "axios";



const AdminDashboard = () =>{
    return (
        <>
        <Header/>
        <div className="flex main-container">

        <AdminNavContainer/>
        </div>
        </>
    );
}


export default AdminDashboard;