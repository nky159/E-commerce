import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProduct/HomePageProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial/>
    </>
  );
};

export default Homepage;
