import React, { useContext, useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartContext } from '../MainContext';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router';






export default function Cart() {

    let { cart, setCart } = useContext(cartContext)
    let totalPrice = cart.reduce((ttl, item) => {
        return ttl + Number(item.price) * Number(item.qty)
    }, 0)


    return (
        <section>

            <Header />

            <div className=''>
                <ToastContainer />
            </div>

            <div className="container mx-auto my-20">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Remove</h3>
                        </div>

                        {/* ************************************************** */}
                        {/* ************************************************** */}

                        {
                            cart.length >= 1
                                ?

                                cart.map((items, index) => {
                                    return (
                                        <CartRow item={items} key={index} />
                                    )
                                })

                                :
                                <div> No Data Found in Cart </div>
                        }

                        {/* ************************************************** */}
                        {/* ************************************************** */}

                        <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        {/* <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 0</span>
                            <span className="font-semibold text-sm">Rs. 0</span>
                        </div> */}
                        <div className='mt-10'>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - Rs. 100</option>
                            </select>
                        </div>
                        <div className="py-10"><label htmlFor='promo' className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border-[2px] rounded-md" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>Rs. {totalPrice}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </section>
    )
}





function CartRow({ item }) {

    // console.log(item)
    let { id, name, image, price, qty } = item

    let { cart, setCart } = useContext(cartContext)

    let [prodtQty, setProdtQty] = useState(qty)


    let removeCart = () => {
        if (confirm("Are you sure want to delete?")) {
            let finalCart = cart.filter((items) => items.id != id)
            setCart(finalCart)
            toast.warning("Item delete from your Cart");
        }
    }


    useEffect(() => {

        let finalProdtData = cart.filter((item) => {
            if (item.id == id) {
                item['qty'] = prodtQty
            }
            return item
        })

        setCart(finalProdtData)

    }, [prodtQty])


    return (
        <div className="flex mt-10 mb-5">
            <div className='w-2/5'>
                <img src={image} alt="" className='w-24 rounded-md border-[4px] border-stone-200' />
                <p className='font-medium mt-2'>
                    {name}
                </p>
            </div>
            <div className='w-1/5 flex items-center justify-center gap-[5px]'>

                <FaRegMinusSquare className='text-3xl cursor-pointer' onClick={() => setProdtQty(prodtQty > 1 ? prodtQty - 1 : 1)} />

                <input type="text" name="" id="" value={prodtQty} className='border w-10 text-center text-2xl p-1 rounded-md' readOnly />
                {/* <span className='px-2 py-1 bg-white border-1 border-black rounded-md'>
                    {prodtQty}
                </span> */}

                <FaRegPlusSquare className='text-3xl cursor-pointer' onClick={() => setProdtQty(prodtQty < 10 ? prodtQty + 1 : prodtQty)} />

            </div>
            <div className='w-1/5  flex items-center justify-center'>
                <b> Rs. </b> &nbsp; {price}
            </div>
            <div className='w-1/5  flex items-center justify-center'>
                <b> Rs. </b> &nbsp; {price * qty}
            </div>
            <div className='w-1/5  flex items-center justify-center'>
                <button type='button'
                    className='text-[16px] text-red-500 p-3 rounded-md border cursor-pointer 
                        hover:bg-red-500 hover:text-white duration-300'
                    onClick={removeCart}
                >
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    )

}