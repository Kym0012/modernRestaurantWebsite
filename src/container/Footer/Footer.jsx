
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import {FooterOverlay, Newsletter}  from '../../components';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
        <div className="footer__info">
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <Newsletter />
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Geritch Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
