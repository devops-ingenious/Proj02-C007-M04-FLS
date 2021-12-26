import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer__social">
        <a href="https://www.instagram.com/appstreams/">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://www.youtube.com/appstreams">
          <FaYoutube size="40"  color="#fff"/>
        </a>  
      </div>
      <p className="footer__copyright">Made with by - Bluemer BlueEdTech - Jezimiel Marcondes</p>
    </div>
  )
}
