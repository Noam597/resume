
import ExperienceBox from '../experienceBox/ExperienceBox';
import styles from "./experience.module.css";
import { frontEnd,backEnd } from './skillArray';
const Experience = () => {
  return (
    <div id="experience" className={styles.experience}>
        <h1>Experience</h1>
        <div className={styles.expContent}>
        <ExperienceBox title="Front End" skillTree={frontEnd}/>
        <ExperienceBox title="Back End" skillTree={backEnd}/>
        </div>
    </div>
  )
}

export default Experience