import React, { useState } from 'react';
import logo from '../../asset/logo-1_300x300.avif'
// import { AiOutlineSearch } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineUser, AiFillCloseCircle } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const pathName = useLocation()
    const [toggleBar, setToggleBar] = useState(false)
    return (
        <div className='lg:sticky lg:top-0 lg:z-40 lg:bg-white'>
            <div className='flex items-center py-4 lg-hidden'>
                <ul className='flex justify-evenly w-full items-center'>
                    {/* <li><img className='w-28 h-28' src={logo} alt="" /></li> */}
                    <li className='text-xl'>
                        <NavLink className={pathName.pathname === '/' ? 'text-[#5EC49D] ' : ''} to='/'>HOME</NavLink>
                    </li>
                    <li className='text-xl'>
                        <NavLink to='/shop' className={pathName.pathname === '/shop' ? 'text-[#5EC49D]' : ''}>
                            SHOP
                        </NavLink>
                    </li>
                    <li className='text-xl'>BLOG</li>
                    <li className='text-xl'>CONTACT</li>
                    <li className='text-xl'>ABOUT US</li>
                </ul>
                <ul className='flex w-full justify-evenly items-center'>
                    <li><img className='w-28 h-28' src={logo} alt="" /></li>
                    <li className=''>
                        <input className='search-input' type="search" name="" id="" placeholder='Enter Your keywords'

                        />
                    </li>
                    <li className='lg:ml-[-125px]'><FiSearch className='end-search-bar'></FiSearch></li>
                    <li >
                        <HiOutlineShoppingBag className='search-bar h-8 w-8'></HiOutlineShoppingBag>
                    </li>
                    <li onClick={() => navigate('/login')} className='ml-[-50px]'><AiOutlineUser className='search-bar h-8 w-8'></AiOutlineUser>
                    </li>

                </ul>
                <div>

                </div>
            </div>

            <div className='lg:hidden'>

                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <img className='w-10 h-10' src={logo} alt="" />
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;