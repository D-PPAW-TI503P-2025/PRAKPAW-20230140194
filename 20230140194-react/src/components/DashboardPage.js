import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex flex-col items-center justify-center text-white">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg text-center w-[90%] max-w-lg">
                <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                <p className="text-lg mb-6 text-blue-100">
                    Selamat datang di aplikasi <span className="font-semibold text-white">Pengembangan Aplikasi Web</span>
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={handleLogout}
                        className="py-2 px-8 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
