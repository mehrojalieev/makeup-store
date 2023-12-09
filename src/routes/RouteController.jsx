import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleProduct from './single-product/SingleProduct'

const RouteController = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
    </Routes>
    </>
  )
}

export default RouteController