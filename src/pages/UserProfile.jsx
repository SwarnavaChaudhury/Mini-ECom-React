import React, { useContext, useEffect } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { cartContext } from '../MainContext'
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router';





export default function UserProfile() {

    let navigate = useNavigate()

    let { user } = useContext(cartContext)
    // console.log(user)


    // useEffect(() => {
    //     if (!user) {
    //         navigate('/')
    //     }
    // }, [user])



    return (
        <>
            <section>
                <Header />


                <section className='container mx-auto grid grid-cols-[20%_auto] gap-5 mt-20 mb-50'>
                    <div className='shadow-lg flex items-center justify-center  rounded-2xl'>
                        <h1 className='text-3xl font-bold'>
                            User Profile
                        </h1>
                    </div>
                    <div className='shadow-lg p-5 rounded-2xl'>
                        <div>
                            <img src={user.photoURL} alt="" className='border h-[50px] w-[50px] rounded-full border-stone-300' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="username" className='block font-bold pb-1'>
                                Name:
                            </label>
                            <input type="text" name="username" id="username" value={user.displayName} className='border w-full pl-2 h-[40px] rounded-lg bg-stone-100' readOnly />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="useremail" className='font-bold pb-1 flex items-center gap-5'>
                                Email Id:
                                {
                                    user.emailVerified
                                        ?
                                        <FaRegCheckCircle className='text-green-500' />
                                        :
                                        <RxCrossCircled className='text-red-500' />
                                }
                            </label>
                            <input type="text" name="useremail" id="useremail" value={user.email} className='border w-full pl-2 h-[40px] rounded-lg bg-stone-100' readOnly />
                        </div>
                    </div>
                </section>


                <Footer />
            </section>
        </>
    )
}