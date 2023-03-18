import './portfolio.css'
import React from 'react'
import BUS from '../../assets/bus.jpg'
import DATA from '../../assets/data.jpg'
import TODO from '../../assets/todo.jpg'
import MUSIC from "../../assets/music.png"
import NETWORK from "../../assets/network.png"
import SHOE from '../../assets/shoe.png'

const data = [
  {
    image: MUSIC,
    title: 'Musaic',
    github: 'https://github.com/ryanido/musaic'
  },
  {
    image: NETWORK,
    title: 'Networking App',
    github:'https://github.com/DanielMadaghjian/Networking-App'
  },
  {
    image: BUS,
    title: 'Bus Management System',
    github: 'https://github.com/ryanido/Bus-Management-System',
  },
  {
    image: DATA,
    title: 'Covid Visualisation App',
    github: 'https://github.com/ryanido/Covid-19-Visualisation-App',
  },
  {
    image: TODO,
    title: 'To-do App',
    github: 'https://github.com/ryanido/To-Do-App',
  },
  {
    image: SHOE,
    title: 'Shoe-Customiser',
    github: 'https://github.com/ryanido/shoe-customiser'
  }
 
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({image, title, github }) => {
            return (
              <div key={title} className="portfolio__item-cta">
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