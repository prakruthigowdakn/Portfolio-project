'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'
import { navLinks } from '@/Constant/constant'

type Props = {
  openNav: () => void;
}

const Nav = ({openNav} : Props) => {

  const[navBg, setNavBg] = useState(false)
  
  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if(window.scrollY < 90)[
        setNavBg(false)
      ]
    };
    window.addEventListener("scroll", handler);

    return() => {
      window.removeEventListener("scroll", handler);
    }

  }, [])

  return (
   <div className={`fixed ${navBg ? 'bg-[#240b39]' : ['fixed']} flex justify-around h-[12vh] transition-all duration-200 w-full z-[10]`}>
    <div className='flex item-center'> 
       <Image 
       src='/Images/logo.png' 
       alt='logo' 
       width={170} 
       height={170} 
       className='ml-[-1.5rem] sm:ml-0'/>
    </div>
    <div className='flex items-center space-x-10'>
      <div className='hidden lg:flex item-center space-x-8'>
        
      {navLinks.map((nav) => {
  return (
    <Link key={nav.id} href={nav.url}>
      <p className='text-white text-sm hover:text-yellow-300 hover:underline hover:decoration-yellow-400 hover:decoration-3 cursor-pointer transition duration-300'>
        {nav.label}
      </p>
    </Link>
  );
})}
      </div>
      <div className='flex items-cente space-x-4'>
        <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg '>Hire Me</button>

        <Bars3BottomRightIcon 
        onClick={openNav}
        className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
        
      </div>

      
    </div>
   </div>
  )
}

export default Nav