import styles from "./about.module.css";
import profile from "../../../assests/profile.jpeg";
import useIntersectionObserver from "../../custom-hooks/useIntersectionObserver";

const About = () => {

  const [show,observerRef] = useIntersectionObserver()

  return (
    <section id="about" className={styles.about} >
      <h1>About Me</h1>
      <div className={styles.container}>
        <div ref={observerRef} className={`${styles.frame} `+ (show?`${styles.appear}`:``)}>
          <div className={styles.image}>
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div  ref={observerRef} className={`${styles.paragraph} `+ (show?`${styles.appear}`:``)}>
          <p>
            Hardworking and motivated Fullstack developer who is a great team
            player. Communicates with others in order to find the best
            solutions. Has a passion for solving and optimizing backend
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
