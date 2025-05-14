import React, { useContext, useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import { cartContext } from '../MainContext';
import { ToastContainer, toast } from 'react-toastify';








export default function Products() {

    // Store Sample
    // https://product-listings.vercel.app/men

    // Category
    // https://wscubetech.co/ecommerce-api/categories.php

    // Brands
    // https://wscubetech.co/ecommerce-api/brands.php

    // Products
    // https://wscubetech.co/ecommerce-api/products.php


    let [dropdownBtn, setDropdownBtn] = useState(-1)

    let [count, setCount] = useState(1)
    let [count1, setCount1] = useState(1)
    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])
    let [product, setProduct] = useState([])
    let [sorting, setSorting] = useState(null)
    let [categoryFilter, setCategoryFilter] = useState([])
    let [brandFilter, setBrandFilter] = useState([])
    let [rating, setRating] = useState(null)
    let [pricing, setPricing] = useState(null)
    let [discount, setDiscount] = useState(null)



    let getProduct = () => {
        // console.log("Product Data")

        axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
            params: {
                page: 1,
                limit: 12,
                categories: categoryFilter.join(","),
                brands: brandFilter.join(","),
                // price_from: null,
                // price_to: null,
                price_from: String(pricing).split(",")[0],
                price_to: String(pricing).split(",")[1],
                // discount_from: null,
                // discount_to: null,
                discount_from: String(discount).split(",")[0],
                discount_to: String(discount).split(",")[1],
                rating: rating,
                sorting: sorting
            }
        })
            .then((apiData) => apiData.data)
            .then((finalRes) => {

                // console.log(finalRes)
                // console.log(finalRes.data)
                setProduct(finalRes.data)

            })

    }


    // 1. Clear‐all handler
    const clearFilters = () => {
        setSorting(null)
        setCategoryFilter([])
        setBrandFilter([])
        setRating(null)
        setPricing(null)
        setDiscount(null)
    }



    let getCategory = () => {
        // console.log("Category Data")

        // axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
        // .then((apiData) => {
        //     console.log( apiData )
        //     console.log( apiData.data )
        // })
        axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                // console.log(finalRes)
                // console.log(finalRes.data)

                setCategory(finalRes.data)

            })

    }

    let getBrand = () => {
        // console.log("Brand Data")

        axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                // console.log(finalRes.data)
                setBrand(finalRes.data)
            })

    }

    // getProduct();
    // getCategory();
    // getBrand();


    useEffect(() => {

        // getProduct();
        getCategory();
        getBrand();

    }, [])
    // useEffect --> need arrow function, dependencies
    // dependency --> that is, by changing useState will call functions
    // [] --> blank array refers ==> call function single time


    // useEffect(() => {

    //     getProduct();

    // }, [count, count1])

    useEffect(() => {
        getProduct();
    }, [sorting, categoryFilter, brandFilter, rating, pricing, discount])



    let getAllCheckCategoryValue = (event) => {

        // console.log(event.target.value)
        let cate = event.target.value

        if (event.target.checked) {
            if (!categoryFilter.includes(cate)) {
                setCategoryFilter([...categoryFilter, cate])
            }
        } else {
            // console.log(categoryFilter, cate)
            categoryFilter = categoryFilter.filter((item) => {
                return item != cate
            })
            setCategoryFilter([categoryFilter])
        }

    }

    let getAllCheckBrandValue = (event) => {

        // console.log(event.target.value)
        let cate = event.target.value

        if (event.target.checked) {
            if (!brandFilter.includes(cate)) {
                setBrandFilter([...brandFilter, cate])
            }
        } else {
            // console.log(brandFilter, cate)
            brandFilter = brandFilter.filter((item) => {
                return item != cate
            })
            setBrandFilter([brandFilter])
        }

    }




    return (

        <section>



            <Header />

            <div className=''>
                <ToastContainer />
            </div>

            {/* <button className='bg-red-500 text-white font-bold p-3 mr-3' onClick={() => setCount(count + 1)}> Change Count {count} </button>
            <button className='bg-green-500 text-white font-bold p-3 mr-3' onClick={() => setCount1(count1 + 1)}> Change Count {count1} </button> */}

            <div className='mb-5 ml-5 mt-5'>
                Home / <a href="javascript:void(0)" className='font-bold'> Products </a>
            </div>
            <div className='mb-5 ml-5'>
                <span className='font-bold'> Men T-shirts </span> - 126446 items
            </div>
            <div className='ml-5 flex justify-between items-center'>
                <div className='w-[20%] flex justify-start gap-20'>
                    <span className='font-bold cursor-pointer'> FILTERS </span>
                    <button
                        className='text-red-500 font-bold cursor-pointer'
                        onClick={clearFilters}
                    >
                        CLEAR ALL
                    </button>
                </div>
                <div className='w-[80%] flex justify-end pr-40'>


                    <div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center" type="button" onClick={() => setDropdownBtn(dropdownBtn == 1 ? -1 : 1)}>
                            Sort By: Recommended
                            <IoIosArrowDown className='pl-1 font-bold' />
                        </button>

                        {
                            dropdownBtn == 1 && <div id="dropdown" className={`
                                z-[999] absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-50 dark:bg-gray-700
                            `}>
                                <ul className="py-2 text-sm text-gray-700">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(1)}>
                                            Name: A to Z
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(2)}>
                                            Name: Z to A
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(3)}>
                                            Price: Low to High
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(4)}>
                                            Price: High to Low
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(5)}>
                                            Discounted: Low to High
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(6)}>
                                            Discounted: High to Low
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(7)}>
                                            Rating: Low to High
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setSorting(8)}>
                                            Rating: High to Low
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>


                </div>
            </div>

            <div className='flex justify-start items-start'>

                <div className='w-[20%] py-5'>

                    <div className='
                        border-1 py-5 pl-5 max-h-[200px] overflow-y-auto 
                        [&::-webkit-scrollbar]:w-[3px] 
                        [&::-webkit-scrollbar-thumb]:bg-pink-500
                        '>
                        <h3 className='text-[16px] font-bold uppercase mb-2'> categories </h3>
                        <ul>
                            {
                                category.map((items, index) => {

                                    if (items.name != '')

                                        return (
                                            <li key={items.id}>
                                                <input type="checkbox" value={items.slug} name={items.slug} id={items.slug} className='mr-2' onChange={getAllCheckCategoryValue} checked={categoryFilter.includes(items.slug)} />
                                                <label htmlFor={items.slug} className='cursor-pointer'>
                                                    {items.name}
                                                </label>
                                            </li>
                                        )
                                })
                            }
                        </ul>

                    </div>
                    <div className='
                        border-1 py-5 pl-5 max-h-[200px] overflow-y-auto 
                        [&::-webkit-scrollbar]:w-[3px] 
                        [&::-webkit-scrollbar-thumb]:bg-pink-500
                        '>
                        <h3 className='text-[16px] font-bold uppercase mb-2'> Brand </h3>
                        <ul>
                            {
                                brand.map((items, index) => {

                                    if (items.name != '')

                                        return (
                                            <li key={items.id}>
                                                <input type="checkbox" name={items.slug} id={items.slug} value={items.slug} className='mr-2' onChange={getAllCheckBrandValue} checked={brandFilter.includes(items.slug)} />
                                                <label htmlFor={items.slug} className='cursor-pointer'>
                                                    {items.name}
                                                </label>
                                            </li>
                                        )
                                })
                            }
                        </ul>
                        {/* <ul>
                            <li>
                                <input type="checkbox" name="essence" id="essence" className='mr-2' />
                                <label htmlFor="essence" className='cursor-pointer'>
                                    Essence
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="glamour_beauty" id="glamour_beauty" className='mr-2' />
                                <label htmlFor="glamour_beauty" className='cursor-pointer'>
                                    Glamour Beauty
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="velvet_touch" id="velvet_touch" className='mr-2' />
                                <label htmlFor="velvet_touch" className='cursor-pointer'>
                                    Velvet Touch
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="chic_cosmetics" id="chic_cosmetics" className='mr-2' />
                                <label htmlFor="chic_cosmetics" className='cursor-pointer'>
                                    Chic Cosmetics
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="nail_couture" id="nail_couture" className='mr-2' />
                                <label htmlFor="nail_couture" className='cursor-pointer'>
                                    Nail Couture
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="kitchen_accessories" id="kitchen_accessories" className='mr-2' />
                                <label htmlFor="kitchen_accessories" className='cursor-pointer'>
                                    Kitchen Accessories
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="calvin_klein" id="calvin_klein" className='mr-2' />
                                <label htmlFor="calvin_klein" className='cursor-pointer'>
                                    Calvin Klein
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="chanel" id="chanel" className='mr-2' />
                                <label htmlFor="chanel" className='cursor-pointer'>
                                    Chanel
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="gucci" id="gucci" className='mr-2' />
                                <label htmlFor="gucci" className='cursor-pointer'>
                                    Gucci
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" name="annibale_colombo" id="annibale_colombo" className='mr-2' />
                                <label htmlFor="annibale_colombo" className='cursor-pointer'>
                                    Annibale Colombo
                                </label>
                            </li>
                        </ul> */}
                    </div>
                    <div className='border-1 py-5 pl-5 max-h-[200px] overflow-auto'>
                        <h3 className='text-[16px] font-bold uppercase mb-2'>
                            Price
                        </h3>

                        <input type="radio" name="price_range" id="p_r_1" onChange={() => setPricing("10,250")} checked={pricing === "10,250"} />
                        <label htmlFor="p_r_1" className='cursor-pointer'> Rs. 10 to Rs. 250 </label>
                        <br />
                        <input type="radio" name="price_range" id="p_r_2" onChange={() => setPricing("250,500")} checked={pricing === "250,500"} />
                        <label htmlFor="p_r_2" className='cursor-pointer'> Rs. 250 to Rs. 500 </label>
                        <br />
                        <input type="radio" name="price_range" id="p_r_3" onChange={() => setPricing("500,1000")} checked={pricing === "500,1000"} />
                        <label htmlFor="p_r_3" className='cursor-pointer'> Rs. 500 to Rs. 1000 </label>
                        <br />
                        <input type="radio" name="price_range" id="p_r_4" onChange={() => setPricing("1000,1000000")} checked={pricing === "1000,1000000"} />
                        <label htmlFor="p_r_4" className='cursor-pointer'> Rs. 1000 to Above </label>
                        <br />

                    </div>
                    <div className='border-1 py-5 pl-5 max-h-[200px] overflow-auto'>
                        <h3 className='text-[16px] font-bold uppercase mb-2'>
                            Discount Range
                        </h3>

                        <input type="radio" name="discount_range" id="d_r_1" onChange={() => setDiscount("0,5")} checked={discount == "0,5"} />
                        <label htmlFor="d_r_1" className='cursor-pointer'> 5% and above </label>
                        <br />
                        <input type="radio" name="discount_range" id="d_r_2" onChange={() => setDiscount("0,10")} checked={discount == "0,10"} />
                        <label htmlFor="d_r_2" className='cursor-pointer'> 10% and above </label>
                        <br />
                        <input type="radio" name="discount_range" id="d_r_3" onChange={() => setDiscount("0,15")} checked={discount == "0,15"} />
                        <label htmlFor="d_r_3" className='cursor-pointer'> 15% and above </label>
                        <br />
                        <input type="radio" name="discount_range" id="d_r_4" onChange={() => setDiscount("0,20")} checked={discount == "0,20"} />
                        <label htmlFor="d_r_4" className='cursor-pointer'> 20% and above </label>
                        <br />

                    </div>
                    <div className='border-1 py-5 pl-5 max-h-[200px] overflow-auto'>
                        <h3 className='text-[16px] font-bold uppercase mb-2'>
                            Rating
                        </h3>

                        <input type="radio" name="rating" id="rating_1" onChange={() => setRating(4)} checked={rating == 4} />
                        <label htmlFor="rating_1" className='cursor-pointer'> 4★ & above </label>
                        <br />
                        <input type="radio" name="rating" id="rating_2" onChange={() => setRating(3)} checked={rating == 3} />
                        <label htmlFor="rating_2" className='cursor-pointer'> 3★ & above </label>
                        <br />
                        <input type="radio" name="rating" id="rating_3" onChange={() => setRating(2)} checked={rating == 2} />
                        <label htmlFor="rating_3" className='cursor-pointer'> 2★ & above </label>
                        <br />
                        <input type="radio" name="rating" id="rating_4" onChange={() => setRating(1)} checked={rating == 1} />
                        <label htmlFor="rating_4" className='cursor-pointer'> 1★ & above </label>
                        <br />

                    </div>

                </div>
                <div className='w-[80%] py-10'>


                    {/* ************************************************************************************** */}
                    {/* ************************************************************************************** */}


                    <div className='flex flex-wrap mt-10'>

                        {
                            product.length > 1
                                ?

                                product.map((items, index) => {

                                    return <ProductItems items={items} key={index} />


                                })

                                :
                                // "No Data Found!!"
                                // Skeleton Loader
                                <div className='flex flex-wrap'>

                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4">
                                        <div role="status" className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>


                                </div>

                        }





                    </div>


                    {/* ************************************************************************************** */}
                    {/* ************************************************************************************** */}


                </div>

            </div>

            <Footer />
        </section>
    )
}



function RatingStars({ rating }) {
    let star_html = ''
    for (let i = 0; i < rating; i++) {
        star_html += '☆'
    }
    return (
        <div>
            {star_html}
        </div>
    );
}


function ProductItems({ items }) {

    let { cart, setCart } = useContext(cartContext)

    let { id, name, image, price, brand_name, rating } = items

    let addToCart = () => {
        let cartObj = {
            id,
            name,
            image,
            price,
            qty: 1
        }
        // setCart([...cart, cartObj])
        setCart([cartObj, ...cart])
        toast.success("Item added in Cart");
    }

    let checkMyIdInCart = cart.filter((items) => items.id == id)
    // console.log(checkMyIdInCart);

    let removeCart = () => {
        if (confirm("Are you sure want to delete?")) {
            let finalCart = cart.filter((items) => items.id != id)
            setCart(finalCart)
            toast.warning("Item delete from your Cart");
        }
    }



    if (name != "")
        return (
            <div className="w-[100%] sm:w-[25%] lg:w-[25%] inline-flex px-2 pb-4 " key={id}>
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
                                    {/* <img src="/imgs/products/prod-1.webp" alt="" /> */}
                                    <img src={image} alt="" className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className="relative p-2 box-border overflow-hidden grow">
                            <span className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words">
                                {name}
                            </span>
                            <div>
                                <div className="block w-full text-sm font-bold text-amber-700">
                                    {/* Rs 9.99 */}
                                    Rs. {price}
                                </div>
                            </div>
                            <div className="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">
                                {/* Essence */}
                                {brand_name}
                            </div>
                            <div className="min-h-[14px] text-xs flex justify-between">
                                <div className=" flex items-center my-1 mx-0 text-yellow-500 text-[15px]">
                                    {/* {items.rating} */}
                                    {/* <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar /> */}

                                    <RatingStars rating={rating} />


                                    <span className="align-midle ml-1 text-gray-600">
                                        {/* (2.56) */}
                                        {rating}
                                    </span>
                                </div>
                                {
                                    checkMyIdInCart.length > 0
                                        ?
                                        <button className="bg-red-600 text-white px-4 rounded cursor-pointer" onClick={removeCart}>
                                            Remove
                                        </button>
                                        :
                                        <button className="bg-blue-600 text-white px-4 rounded cursor-pointer" onClick={addToCart}>
                                            ADD
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}