import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../Exports';

const Header = () => {
  return (
    <header>
        <div className='logo-component'>
          {/* Top Logo */}
          <h1>Health<span>care.</span></h1>
        </div>

        <div className='other-header'>
          <div className='search-bar-component'>
            {/* Search Bar Component */}
            <div className='search-bar'>
              <img src={icons.search} alt="" />
              <input type="text" placeholder='Search' />
              <img src={icons.notification} alt="" />
            </div>
          </div>

          {/* User Profile Component */}
          <div className='user-profile'>
            <button>+</button>
            <img src={icons.avatar} alt="" />
          </div>
        </div>
    </header>
  )
}

export default Header