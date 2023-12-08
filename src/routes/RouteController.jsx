import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

const RouteController = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default RouteController