import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function DashboardPage() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let role = "";

    if (token) {
        try {
            const decoded = jwtDecode(token);
            role = decoded.role;
        } catch (err) {
            console.error("Token error:", err);
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex flex-col items-center justify-center text-white">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg text-center w-[90%] max-w-lg">

                <h1 className="text-4xl font-bold mb-2">
                    {role === "admin" ? "Dashboard Admin" : "Dashboard User"}
                </h1>

                {/* Badge putih */}
                <p className="text-md mb-4">
                    <span className="bg-white text-black px-3 py-1 rounded-lg shadow capitalize">
                        Role: {role || "unknown"}
                    </span>
                </p>

                <p className="text-lg mb-6 text-blue-100">
                    Selamat datang di aplikasi <span className="font-semibold text-white">Pengembangan Aplikasi Web</span>
                </p>
            </div>
        </div>
    );
}

export default DashboardPage;
