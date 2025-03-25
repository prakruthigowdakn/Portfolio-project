import React from 'react';
import Link from 'next/link';

import { CgClose } from 'react-icons/cg';
import { navLinks } from '@/Constant/constant';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      
      <div
        className={`fixed ${
          showNav ? 'block opacity-70' : 'hidden opacity-0'
        } transition-opacity duration-300 inset-0 z-[1000] bg-black w-full h-screen`}
      ></div>

      
      <div
        className={`text-white ${navOpen} transform transition-transform duration-500 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-x-6 z-[10000]`}
      >
        {navLinks.map((navLinks) => (
          <Link key={navLinks.id} href={navLinks.url}>
            <p className='text-[30px] ml-15 pb-5 border-white sm:text-[40px] hover:text-yellow-300 hover:underline hover:decoration-yellow-400 hover:decoration-3 cursor-pointer transition duration-300'>
              {navLinks.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer'
        />
      </div>
    </div>
  );
};

export default MobileNav;
