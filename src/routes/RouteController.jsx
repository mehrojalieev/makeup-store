import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleProduct from './single-product/SingleProduct'
import Cart from '../components/cart/Cart'
import Category from './category/Category'

const RouteController = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
          <Route path='category' element={<Category/>}/>
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
    </Routes>
    </>
  )
}

export default RouteController