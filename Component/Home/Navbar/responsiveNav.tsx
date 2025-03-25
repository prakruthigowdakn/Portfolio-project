'use client'
import React, { useState } from 'react'
import Nav from './nav'
import MobileNav from './mobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavhandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      {showNav && <MobileNav showNav={showNav} closeNav={closeNavhandler} />}
    </div>
  )
}

export default ResponsiveNav