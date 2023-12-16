import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleProduct from './single-product/SingleProduct'
import Cart from '../components/cart/Cart'
import Category from '../components/category/Category'
import Favourite from '../components/favourite/Favourite'
import SignUp from './sub-routes/signup/SignUp'
import Login from './sub-routes/login/Login'

const RouteController = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        <Route path='favourite' element={<Favourite />} />
        <Route path='category/:categ' element={<Category />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default RouteController