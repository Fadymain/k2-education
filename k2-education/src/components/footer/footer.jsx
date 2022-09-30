import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons//bs';

const Footer = () => {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our services</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Destinations</h4>
                    <ul>
                        <li><a href="#">Canada</a></li>
                        <li><a href="#">USA</a></li>
                        <li><a href="#">UK</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Follw Us</h4>
                    <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsInstagram/></a>
                        <a href="#"><BsTwitter/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer