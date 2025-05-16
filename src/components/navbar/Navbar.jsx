import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navList = (
      <ul className='flex justify-center items-center  gap-5'>
       
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/allproduct'}>All Product</Link>
        </li>
        <li>
          <Link to={'/signup'}>Signup</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/cart'}>Cart(0)</Link>
        </li>
      </ul>
    )
  return (
   <div className="bg-indigo-400 sticky top-0 p-2">
  <div className="main flex flex-col gap-2 items-center justify-center mx-2 
                  md:flex-col 
                  lg:flex-row lg:justify-between lg:items-center">
    
    {/* Logo / Left Section */}
    <div className="left text-white text-xl font-semibold">
      <h2>E-Bharat</h2>
    </div>

    {/* Navigation */}
    <div className="flex justify-center items-center bg-amber-700 w-full lg:w-auto px-4 py-2 rounded">
      {navList}
    </div>

    {/* Search Bar */}
    <div className="w-full md:w-3/4 lg:w-auto mt-2 lg:mt-0">
      <SearchBar />
    </div>
  </div>
</div>

  )
}

export default Navbar
