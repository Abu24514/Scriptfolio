import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav';
import {useSelector} from 'react-redux'
import Loader from '../components/Loader/Loader';
import Login from './Login';

const Layout = () => {
  const {user , loading} = useSelector(state=>state.auth);

  if(loading){
    return <Loader/>
  }
  return (
    <div>
      {
        user ? (<div className='min-h-screen bg-gray-50'>
          <Nav/>
          <Outlet/>
          </div>) : <Login/>
      }
        
    </div>
  )
}

export default Layout