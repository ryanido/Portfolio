import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Ryan Idowu
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/ryan-idowu-4a493b166/'><BsLinkedin/></a>
        <a href='https://github.com/ryanido'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ryan Idowu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer