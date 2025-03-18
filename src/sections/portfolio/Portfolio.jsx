import './portfolio.css';
import Projects from './Projects';
import data from './data'; // Import your data array

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
      </p>
      <div className="container portfolio__container">
        <Projects projects={data} />
      </div>
    </section>
  );
};

export default Portfolio;
