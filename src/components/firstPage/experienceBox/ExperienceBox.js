import styles from "./experienceBox.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
const ExperienceBox = ({ title, skillTree }) => {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      <div className={styles.container}>
        {skillTree.map((skill) => {
          return (
            <div key={skill.id}>
              <h4>
                <AiFillCheckCircle /> {skill.subject}:
              </h4>
              <small>{skill.exp}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;
