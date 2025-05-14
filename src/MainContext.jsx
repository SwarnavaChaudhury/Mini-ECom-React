import React, { createContext, useEffect, useState } from 'react'

// provider
export let cartContext = createContext();


export default function MainContext({ children }) {

    // creating a global state
    // let [cart, setCart] = useState(localStorage.getItem("CART") ? Number(localStorage.getItem("CART")) : 0);
    // let [cart, setCart] = useState([]);
    let [cart, setCart] = useState(localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []);

    // global object
    let obj = {
        cart,
        setCart
    }
    // let obj = {
    //     cart: 0,
    //     setCart: setCart
    // }



    useEffect(() => {
        // console.log(cart)
        localStorage.setItem("CART", JSON.stringify(cart))
    }, [cart])


    return (
        <cartContext.Provider value={obj}>
            {children}
        </cartContext.Provider>
    )
}
