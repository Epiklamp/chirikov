import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Epiklamp
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <SocialIcons position="footer__socialicons" />
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Epiklamp.</small>
      </div>
    </footer>
  );
};

export default Footer;
