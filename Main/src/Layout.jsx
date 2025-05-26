import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import './styles/App.css';

const Layout = () => {
  return (
    <>
        <Header />
        <div className='main-section'>
            <Sidebar />
            <Outlet />
        </div>
    </>
  )
}

export default Layout