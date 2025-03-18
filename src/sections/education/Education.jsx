import Card from '../../components/Card';
import data from './data';
import './education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <p></p>
      <div className="container education__container">
        {data.map((item) => (
          <Card key={item.id} className="education light">
            <div className="education__details">
              <div className="education__header">
                  <h4>{item.title}</h4>
                  <h5>{item.institution}</h5>
              </div>
              <small>{item.date}</small>
              <ul>
                <li>{item.desc1}</li>
                <li>{item.desc2}</li>
                <li>{item.desc3}</li>
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
