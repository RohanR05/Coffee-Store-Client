import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
