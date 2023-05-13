
import React from 'react';
import './adminpage.css'
import Sidebar from '../../Components/Admin SideBar Section/Sidebar';
import Body from '../../Components/Admin Body Section/Body';
const AdminPage = () => {
  return (
    <div className='adminContainer'>
       <Sidebar/>
      <Body/>
    </div>
  );
}

export default AdminPage;

