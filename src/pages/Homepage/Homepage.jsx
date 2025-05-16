import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProduct/HomePageProductCard'

const Homepage = () => {
    return(
      <>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      </>
    )
}

export default Homepage
