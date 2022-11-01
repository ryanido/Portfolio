import './portfolio.css'
import React from 'react'
import BUS from '../../assets/bus.jpg'
import DATA from '../../assets/data.jpg'
import TODO from '../../assets/todo.jpg'

const data = [
  {
    id: 1,
    image: BUS,
    title: 'Bus Management System',
    github: 'https://github.com/ryanido/Bus-Management-System',
  },
  {
    id: 2,
    image: DATA,
    title: 'Covid Visualisation App',
    github: 'https://github.com/ryanido/Covid-19-Visualisation-App',
  },
  {
    id: 3,
    image: TODO,
    title: 'To-do App',
    github: 'https://github.com/ryanido/To-Do-App',
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