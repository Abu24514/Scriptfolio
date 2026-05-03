import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

const Layout = () => {
  return (
    <div>
        <div className='min-h-screen bg-gray-50'>
          <Nav/>
          <Outlet/>
          </div>
    </div>
  )
}

export default Layout