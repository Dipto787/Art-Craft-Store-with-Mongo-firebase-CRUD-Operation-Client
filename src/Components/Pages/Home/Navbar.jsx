import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let Links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allArtItems'>All Art & craft Items</NavLink></li>
    <li><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
    <li><NavLink to='/myArtCraft'>My Art&Craft List</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             {Links}
                        </ul>
                    </div>
                    <a className="btn font-bold bg-clip-text text-transparent  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block   btn-ghost text-3xl">Art & Craft Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                  <button  className='btn mr-2  px-8 text-white font-bold bg-[#008000]'>Login</button>
                  <button className='btn text-white font-bold px-7 hover:bg-transparent hover:border-2 hover:text-black duration-100  bg-[#d90429] '>Register</button> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;