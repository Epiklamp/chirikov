import { works } from '../portfolio.js'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {works.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <Image src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </article>
          );
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;
