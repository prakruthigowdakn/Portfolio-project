import Home from '@/Component/Home/home'
import ResponsiveNav from '@/Component/Home/Navbar/responsiveNav'
import ImageSlider from '@/Component/ImageSlider/imageSlider'
import React from 'react'


const HomePage = () => {
  return (
    <div>
      <ResponsiveNav/>
      <Home/>
      <ImageSlider/>
    </div>
  )
}

export default HomePage