import styles from "./index.module.css";
import { experience } from "@/app/lib/placeholder-data";

export default function Experience() {
  return (
    <section className={`${styles.section} theme--main`}>
      <div className="screen">
        <div className="grid">
          <div>
            <h2>Education</h2>
            <ul>
              {experience.studies.map((study) => (
                <li key={study.toString()}>{study}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Experience</h2>
            <ul>
              {experience.positions.map((position) => (
                <li key={position.toString()}>{position}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Clients</h2>
            <p>{experience.clients}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
