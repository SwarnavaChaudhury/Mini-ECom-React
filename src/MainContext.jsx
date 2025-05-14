import React, { createContext, useEffect, useRef, useState } from 'react'

// provider
export let cartContext = createContext();


export default function MainContext({ children }) {

    // creating a global state
    // let [cart, setCart] = useState(localStorage.getItem("CART") ? Number(localStorage.getItem("CART")) : 0);
    // let [cart, setCart] = useState([]);
    let [cart, setCart] = useState(localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []);

    let [user, setUser] = useState(localStorage.getItem("USER") ? JSON.parse(localStorage.getItem("USER")) : null)

    let [token, setToken] = useState(localStorage.getItem("TOKEN") ?? '')

    // global object
    let obj = {
        cart,
        setCart,
        user,
        setUser,
        token,
        setToken
    }
    // let obj = {
    //     cart: 0,
    //     setCart: setCart
    // }



    useEffect(() => {
        // console.log(cart)
        localStorage.setItem("CART", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem("TOKEN", token)
        localStorage.setItem("USER", JSON.stringify(user))
    }, [token])






    return (
        <cartContext.Provider value={obj}>
            {children}
        </cartContext.Provider>
    )
}
