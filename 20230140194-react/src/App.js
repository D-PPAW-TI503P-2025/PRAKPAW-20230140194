import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* 🔹 Navigasi (opsional, bisa kamu hapus kalau mau fullscreen view) */}
        <nav className="p-4 bg-white shadow-sm flex justify-center gap-6">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 font-medium hover:text-green-600 transition duration-200"
          >
            Register
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 font-medium hover:text-purple-600 transition duration-200"
          >
            Dashboard
          </Link>
        </nav>

        {/* 🔹 Routing Halaman */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
