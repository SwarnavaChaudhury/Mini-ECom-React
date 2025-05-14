import React, { useContext } from 'react'
import { Link } from 'react-router'
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { cartContext } from '../MainContext';






export default function Header() {

    // consumer 
    // use global variable
    // let obj = useContext(cartContext);
    let {cart} = useContext(cartContext);

    return (
        // <div className='shadow-lg mx-auto sticky top-0 z-[99999]'>
        <div className='shadow-lg mx-auto'>
            <header>

                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to={'/'} className='flex gap-2'>
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Mini E-Com
                            </span>
                        </Link>
                        {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a> */}
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to={'/'} className='flex justify-center items-center gap-2'>
                                        <IoHomeOutline />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/products'} className='flex justify-center items-center gap-2'>
                                        <FaStore />
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/cart'} className='flex justify-center items-center gap-2'>
                                        <IoCartOutline />
                                        Cart ({cart.length})
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/register'} className='flex justify-center items-center gap-2'>
                                        <LuUserRoundPlus />
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/login'} className='flex justify-center items-center gap-2'>
                                        <IoLogInOutline />
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    )
}
