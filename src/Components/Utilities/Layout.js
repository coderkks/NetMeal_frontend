import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
