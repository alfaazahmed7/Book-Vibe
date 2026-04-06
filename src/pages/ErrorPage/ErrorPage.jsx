import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="text-center max-w-xl relative">
                {/* 404 Title */}
                <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                    404
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 flex justify-center items-center">
                    <div className="w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
