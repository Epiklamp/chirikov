import React from 'react';
import { BsLinkedin, BsGithub, BsBookFill } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';

const SocialIcons = (props) => {
  return (
    <div className={props.position}>
      <a href="https://github.com/Epiklamp" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://t.me/epiklamp" target="_blank" rel="noreferrer">
        <SiTelegram />
      </a>
    </div>
  );
};

export default SocialIcons;
