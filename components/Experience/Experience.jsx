import { BsPatchCheckFill } from 'react-icons/bs';
import { frontend, backend } from '../portfolio';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>

          <div className="experience__content">
            {frontend.map(({ id, skill, level, value }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    {/* <progress value={value} max="100"></progress>  */}
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>

          <div className="experience__content">
            {backend.map(({ id, skill, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
