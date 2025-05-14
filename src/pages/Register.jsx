import React, { useContext, useEffect } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { cartContext } from '../MainContext'
import { useNavigate } from 'react-router';





export default function Register() {

    let navigate = useNavigate()

    let { cart, setCart, user } = useContext(cartContext);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])


    return (
        <section>

            <Header />

            <div className="container mx-auto my-40">
                <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded border">
                    <div className="py-4 px-8 text-black text-xl font-bold border-b border-grey-lighter capitalize">
                        Register for a free account
                    </div>
                    <form className="py-4 px-8">
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor='email'>
                                Email Address
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" name="email" placeholder="Your email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor='password'>
                                Password
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" name="password" type="password" placeholder="Your secure password" />
                            <p className="text-grey text-xs mt-1">At least 6 characters</p>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">Sign Up</button></div>
                    </form>
                </div>
                <p className="text-center my-4"><a href="#" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a></p>




                {/* <button
                    className='bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setCart( cart - 1 )}
                    >
                    Decrement Cart Value
                </button> */}





            </div>

            <Footer />

        </section>
    )
}
