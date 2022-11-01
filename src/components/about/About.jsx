import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/RI.png'

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
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
            I'm a Computer Science and Business Student and aspiring Software Engineer.
            I'm an hardworking individual who's eager to learn new things. I'm experienced in a wide range of technologies and have no problem
            working in backend or frontend.
          </p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About