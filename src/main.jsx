import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Products from './pages/Products'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainContext from './MainContext'



// Mini-Ecom
// https://miniecom-seven.vercel.app/

// Store
// https://product-listings.vercel.app/men



createRoot(document.getElementById('root')).render(

  <MainContext>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  </MainContext>


)
