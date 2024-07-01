'use client';

import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponseNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const openMobileNavHandler = () => setShowMobileNav(true);
  const closeMobileNavHandler = () => setShowMobileNav(false);

  return (
    <div>
      <Nav openMobileNav={openMobileNavHandler} />
      <MobileNav
        showMobileNav={showMobileNav}
        closeMobileNav={closeMobileNavHandler}
      />
    </div>
  );
};

export default ResponseNav;
