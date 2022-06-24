import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.jpeg';
import SocialIcons from '../SocialIcons/SocialIcons';
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&apos;am</h5>
        <h1>Dmitriy Chirikov</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <SocialIcons position="header__socials" />

        <div className="me">
          <Image className="header__me-image" src={ME} alt="me" />
        </div>

        <a className="scroll__down" href="#contact">Scroll Down <BsFillArrowRightCircleFill /></a>
      </div>
    </header>
  );
};

export default Header;
