import Card from '../../components/Card';
import data from './data';
import './certificate.css';

const Certificate = () => {
  return (
    <section id="certificate">
      <h2>Certificate/Degree</h2>
      <p></p>
      <div className="container certificate__container">
        {data.map((item) => (
          <Card key={item.id} className="certificate light">
            <div className="certificate__details">
              <div className="certificate__header">
                <h4>{item.title}</h4>
                <h5>{item.institution}</h5>
              </div>
              <small>{item.date}</small>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
