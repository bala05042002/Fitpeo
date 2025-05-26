import React, { useState, useEffect } from 'react';
import { icons } from '../../Exports'; // Importing icons from shared Exports
import './Sidebar.css'; // Sidebar-specific styles
import { NavLink } from 'react-router-dom'; // For navigation between pages

// Reusable Navigation component for sidebar links
const Navigation = ({ img, name, navigate, onClick }) => (
  <NavLink to={navigate} onClick={onClick}>
    <div className='sidebar-navigation'>
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  </NavLink>
);

const Sidebar = () => {
  // Track if screen is mobile-sized (<= 650px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  // State to control sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Update state on window resize to detect mobile/desktop view
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 650;
      setIsMobile(isNowMobile);
      
      // Close sidebar if switching to desktop
      if (!isNowMobile) setSidebarOpen(false);
    };

    // Attach and clean up resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar open/close in mobile view
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Show hamburger menu icon in mobile view */}
      {isMobile && (
        <div className='menu-icon' onClick={toggleSidebar}>
          <img src={icons.menu} alt="Menu" />
        </div>
      )}

      {/* Sidebar container: responsive class names based on state */}
      <section className={`sidebar ${isMobile ? 'mobile' : ''} ${sidebarOpen ? 'open' : ''}`}>
        <div className='general-info'>
          <div>
            <p>General</p>
            {/* Sidebar navigation items - clicking closes sidebar on mobile */}
            <Navigation img={icons.dash} name='Dashboard' navigate='/' onClick={toggleSidebar} />
            <Navigation img={icons.history} name='History' navigate='/history' onClick={toggleSidebar} />
            <Navigation img={icons.calender} name='Calender' navigate='/calender' onClick={toggleSidebar} />
            <Navigation img={icons.appoinment} name='Appointments' navigate='/appointments' onClick={toggleSidebar} />
            <Navigation img={icons.statistics} name='Statistics' navigate='/statistics' onClick={toggleSidebar} />
          </div>
          <div className='support'>
            <p>Tools</p>
            <Navigation img={icons.chat} name='Chat' navigate='/chat' onClick={toggleSidebar} />
            <Navigation img={icons.call} name='Support' navigate='/support' onClick={toggleSidebar} />
          </div>
        </div>
        <div className='settings'>
          {/* Settings section */}
          <Navigation img={icons.settings} name='Settings' navigate='/settings' onClick={toggleSidebar} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;