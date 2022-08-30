import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>K2 STUDY ABROAD</a>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/events'>Events</a></li>
            <li><a href='/destinations'>Study Destinations</a></li>
            <li><a href='/contact'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Nav