import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from '../Pages/SignUpPage'
import DairyPage from '../Pages/DairyPage'
import DashboardPage from '../Pages/DashboardPage'
import FoodsPage from '../Pages/FoodsPage'
import LoginPage from '../Pages/LoginPage'
import PlansPage from '../Pages/PlansPage'
import SettingPage from '../Pages/SettingPage'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<HomePage/>} /> */}
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path="/diary" element={<DairyPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/foods" element={<FoodsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/plans" element={<PlansPage/>} />
        <Route path="/setting" element={<SettingPage/>} />
    </Routes>
  )
}

export default AllRoutes