import './portfolio.css'
import React from 'react'
import IMG1 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bus Management System',
    github: 'https//github.com/ryanido',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Covid Visualisation App',
    github: 'https//github.com/ryanido',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Analytics Dashboard',
    github: 'https//github.com/ryanido',
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github }) => {
            return (
              <div key={id} className="portfolio__item-cta">
                <article className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </article>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio