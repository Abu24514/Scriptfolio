import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/scriptfolio-logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/authSlice';
const Nav = () => {
    // const user = { name: " Alex John" }
    const dispatch = useDispatch();
    const {user} = useSelector(state =>state.auth)
    const navigate = useNavigate();
    const LogoutUser = () => {
        navigate('/')
        dispatch(logout())
    }
    return (
        <div className='shadow bg-white'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5'>
                 <Link to="/" className="flex items-center gap-2">
                <img className="h-18 w-auto" src={logo} alt="logo" />
                <span className="text-lg sm:text-xl font-semibold hover:text-indigo-600">
                    Scriptfolio
                </span>
            </Link>


            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden font-semibold'>Hi,{user?.name}</p>
                <button
                    onClick={LogoutUser}
                    className='bg-white hover:bg-slate-100 border border-gray-300 px-7 py-1.5 rounded-full active:scale-96 transition-all'>Logout</button>
            </div>



            </nav>
           
        </div>
    )
}

export default Nav;