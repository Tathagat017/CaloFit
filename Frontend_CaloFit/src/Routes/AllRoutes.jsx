import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../Pages/SignUpPage";
import DairyPage from "../Pages/DairyPage";
import DashboardPage from "../Pages/DashboardPage";
import FoodsPage from "../Pages/FoodsPage";
import LoginPage from "../Pages/LoginPage";
import PlansPage from "../Pages/PlansPage";
import SettingPage from "../Pages/SettingPage";
import AdminPage from "./../Pages/Admin/AdminPage";
import HomePage from "../Pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../Pages/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/diary"
        element={
          <ProtectedRoute>
            <DairyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/foods"
        element={
          <ProtectedRoute>
            <FoodsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/plans"
        element={
          <ProtectedRoute>
            <PlansPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
