
import styles from "./home.module.css";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {FaFileDownload} from 'react-icons/fa';
import CV from '../../../files/Fullstack_cv1.pdf'
const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.title}>
        <h2>WEBSITE</h2> 
        <p>Fullstack Developer</p>
        <h1> 
          <span className={styles.glow}>PORTFOLIO</span>
       </h1>
      </div> 
        <div className={styles.list}>
          <a href="https://linkedin.com/in/noam-harris" rel="noreferrer" target="_blank"><span><AiFillLinkedin/></span></a>
         <a href="https://github.com/Noam597" rel="noreferrer" target="_blank"><span><AiFillGithub/></span></a>
          <a href={CV} download><span><FaFileDownload/></span></a>
        </div>
    </section>
  );
};

export default Home;
