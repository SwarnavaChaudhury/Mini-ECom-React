import React, { useContext, useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { cartContext } from '../MainContext';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";






export default function Home() {

    let { cart, setCart } = useContext(cartContext)

    let [prodt, setProdt] = useState([])

    useEffect(() => {
        productDtls()
    }, [])

    let productDtls = () => {
        axios.get(`https://dummyjson.com/products`)
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                setProdt(finalRes.products)
            })
    }

    // console.log(prodt)





    return (
        <div>

            <Header />

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12">

                <div className="mr-auto place-self-center sm:col-span-7">
                    <h1 className="max-w-2xl mb-4 sm:text-4xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        The experience makes all the difference.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    <div className=" flex">
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-red-500"
                            onClick={() => setCart(cart + 1)}
                        >
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 uppercase">
                            Offers
                        </a>
                    </div>
                </div>
                <div className="hidden lg:mt-0 sm:col-span-5 sm:flex">
                    <img src="/imgs/phone-mockup.png" alt="" />
                </div>
            </div>





            <section className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-3xl xl:text-4xl font-bold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                                Shop By Category
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="/imgs/category-1.png" alt="girl-image" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="/imgs/category-2.png" alt="shoe-image" />
                                    <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                                </div>
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="/imgs/category-3.png" alt="watch-image" /><button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                                </div>
                            </div>
                            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img className="object-center object-cover h-full w-full" src="/imgs/category-4.png" alt="girl-image" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                            <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" /><img className="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" /><button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                        </div>
                        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                            <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" /><img className="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" /><button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>



















            <section className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-3xl xl:text-4xl font-bold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                                Get difference Product
                            </h1>
                        </div>

                        <div className='flex flex-wrap mt-10'>






                            {
                                prodt.map((item, index) => {

                                    let { title, price, thumbnail, brand, rating } = item

                                    return (
                                        <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 " key={index}>
                                            <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                                <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                                    <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                                        {/* <IoMdHeart /> */}
                                                        <FaRegHeart />
                                                    </div>
                                                </div>
                                                <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                                    <div className="relative">
                                                        <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                            <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                                <img src={thumbnail} alt={title} /></div>
                                                        </div>
                                                    </div>
                                                    <div className="relative p-2 box-border overflow-hidden grow">
                                                        <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                            {title}
                                                        </span>
                                                        <div>
                                                            <div className="block w-full text-sm font-bold text-amber-700">Rs {price}</div>
                                                        </div>
                                                        <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">
                                                            {brand}
                                                        </div>
                                                        <div className="min-h-[14px] text-xs flex justify-between">
                                                            <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />

                                                                <span className="align-midle ml-1 text-gray-600">({rating})</span>
                                                            </div>
                                                            <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }











                            {/* 
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-2.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Eyeshadow Palette with Mirror
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 19.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-3.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Powder Canister
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-4.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Red Lipstick
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-5.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Red Nail Polish
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-6.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Calvin Klein CK One
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-7.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Chanel Coco Noir Eau De
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-8.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Dior J'adore
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-9.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Dolce Shine Eau de
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] sm:w-[25%] lg:w-[20%] inline-flex px-2 pb-4 ">
                                <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
                                    <div className="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
                                        <div className="absolute top-0 left-0 m-auto text-[#cc3535] text-2xl cursor-pointer">
                                            <IoMdHeart />
                                        </div>
                                    </div>
                                    <div className="relative shadow-md rounded-lg min-w-full flex flex-col">

                                        <div className="relative">
                                            <div className="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden">
                                                <div className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                                                    <img src="/imgs/products/prod-10.webp" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="relative p-2 box-border overflow-hidden grow">
                                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                                Gucci Bloom Eau de
                                            </span>
                                            <div>
                                                <div className="block w-full text-sm font-bold text-amber-700">Rs 9.99</div>
                                            </div>
                                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">Essence</div>
                                            <div className="min-h-[14px] text-xs flex justify-between">
                                                <div className=" flex items-center my-1 mx-0 text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />

                                                    <span className="align-midle ml-1 text-gray-600">(2.56)</span>
                                                </div>
                                                <button className=" bg-blue-600 text-white px-4 rounded cursor-pointer">ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}





                        </div>

                    </div>
                </div>
            </section>


















            <Footer />

        </div>
    )
}
