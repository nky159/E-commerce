import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Homepage from '../../pages/Homepage/Homepage'
import Track from '../track/Track'

const Layout = ({childern}) => {
  return (
    <div>
      <Navbar/>
      <div className='main-content min-h-screen'>
        <Homepage/>
      </div>
      <Track/>

      <Footer/>
    </div>
  )
}

export default Layout
