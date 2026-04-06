import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links = (
        <>
            <NavLink
                to={"/"}
                className={({ isActive }) => `font-semibold mr-1 hover:bg-transparent ${isActive ? "text-green-500 border border-green-500 rounded-lg py-2 px-2 font-semibold" : "py-2 px-2"}`}
            >
                Home
            </NavLink>
            <NavLink to={"/books"}
                className={({ isActive }) => `font-semibold mr-1 hover:bg-transparent ${isActive ? "text-green-500 border border-green-500 rounded-lg py-2 px-2 font-semibold" : "py-2 px-2"}`}
            >
                Listed Books</NavLink>
            <NavLink to={"/page-to-read"}
                className={({ isActive }) => `font-semibold mr-1 hover:bg-transparent ${isActive ? "text-green-500 border border-green-500 rounded-lg py-2 px-2 font-semibold" : "py-2 px-2"}`}
            >
                Page to Read</NavLink>

        </>
    )

    return (
        <div className='bg-base-100 shadow-sm py-3'>
            <div className="navbar w-11/12 lg:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <h2 className="text-2xl font-bold">Book Vibe</h2>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal gap-2 items-center">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="bg-[#23BE0A] py-2 px-3 rounded-lg text-white font-semibold">Sign In</a>
                    <a className="bg-[#59C6D2] py-2 px-3 rounded-lg text-white font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;