import React from "react";
import styles from "./adminpage.module.css";
import Sidebar from "../../Components/Admin SideBar Section/Sidebar";
import Body from "../../Components/Admin Body Section/Body";
const AdminPage = () => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <Body />
    </div>
  );
};

export default AdminPage;
