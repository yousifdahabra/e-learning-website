import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/base/Header";
import AdminNavContainer from "../components/admin/AdminNavContainer";
import ReportHeader from "../components/admin/ReportHeader";
import Boxes from "../components/admin/Boxes";
import ReportBody from "../components/admin/ReportBody";
import UserReportHeader from "../components/admin/UserReportHeader";
import FormModel from "../components/admin/FormModel";

const AdminDashboard = () => {
  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [editData, seteditData] = useState([]);
  const triggerAddForm = () => {
    setisOpenAdd((isOpenAdd) => !isOpenAdd);
  };
  const triggerEditForm = ($data) => {
    setisOpenAdd((isOpenAdd) => !isOpenAdd);
    seteditData($data);
    console.log($data);
  };
  const triggerCloseForm = () => {
    setisOpenAdd(false);
  };

  return (
    <>
      <Header />
      <div className="flex main-container">
        <AdminNavContainer />
        <div className="main">
          <Boxes />
          <div className="report-container">

            <UserReportHeader triggerAdd={triggerAddForm}  />
            <ReportBody isOpen={triggerEditForm} />
          </div>
        </div>
      </div>

      <FormModel isOpen={isOpenAdd} isClose={triggerCloseForm} editData={editData}/>
    </>
  );
};

export default AdminDashboard;
