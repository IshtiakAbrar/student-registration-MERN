import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center justify-center w-full sm:w-fit flex-shrink-0 text-white mr-6">
                    <span className=" text-2xl font-bold tracking-tight text-black">Student <span className="text-orange-600">Register</span></span>
                </div>
                <div className="w-full  flex-grow sm:flex sm:items-center sm:w-auto ">
                    <div className="text-xl sm:flex-grow flex justify-center showActive">
                        <NavLink to="/" className="block mt-4 px-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </NavLink>
                        <NavLink to="/save-page" className="block mt-4 px-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Form
                        </NavLink>
                    </div>
                </div>
            </nav>
            

    );
};

export default Navbar;