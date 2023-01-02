import styles from "./experienceBox.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import useIntersectionObserver from '../../custom-hooks/useIntersectionObserver';
const ExperienceBox = ({ title, skillTree }) => {

  const [show,observerRef] = useIntersectionObserver()

  return (
    <div className={`${styles.box} ` + (show?`${styles.appear}`:``)}>
      <h3>{title}</h3>
      <div ref={observerRef} className={`${styles.container} ` + (show?`${styles.appear}`:``)}>
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
