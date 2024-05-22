import { Sidebar } from '@/components/sidebar/Sidebar'
import { SidebarMobile } from '@/components/sidebar/SidebarMobile'
import React, { useState } from 'react'

const Prueba = () => {
    const [isSidebarMobileVisible, setSidebarMobileVisible] = useState(false);

  const handleHamburgerClick = () => {
    setSidebarMobileVisible(false);
  };

  const handleBackClick = () => {
    setSidebarMobileVisible(true);
  };
  return (
    <div>
      {isSidebarMobileVisible ? (
        <SidebarMobile onHamburgerClick={handleHamburgerClick} />
      ) : (
        <Sidebar onBackClick={handleBackClick} />
      )}
    </div>
  )
}

export default Prueba