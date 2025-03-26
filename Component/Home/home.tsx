'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/hero'
import About from './About/about'
import Services from './Services/services'
import Project from './Project/project'
import Skills from './Skills/skills'
import Reviews from './Reviews/reviews'
import Blog from './Blog/blog'
import Contact from './Contact/contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { init } from 'next/dist/compiled/webpack/webpack'
import Footer from './Footer/footer'



const Home = () => {

  useEffect(() => {
   const initAOS = async() => {
    await import('aos')
    AOS.init({
      duration:1000,
      easing: 'ease',
      once:false,
      anchorPlacement:'top-bottom',

    })
   }
   initAOS();
  },[])

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
      <Blog/>
      <Contact/>
      <Footer/>
     
      
     
     
    </div>
  )
}

export default Home