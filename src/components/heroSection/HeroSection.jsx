import React from 'react'
import herobase from '../../assets/herobase.png'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center m-4'>
      <img className='h-40' src={herobase} alt="" />
    </div>
  )
}

export default HeroSection
