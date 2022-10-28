import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Studying</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis dolore aperiam vero necessitatibus enim, amet,
            magnam quos laborum iusto fuga, 
            quaerat minima deleniti eius expedita unde facilis iure consectetur iste!
          </p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About