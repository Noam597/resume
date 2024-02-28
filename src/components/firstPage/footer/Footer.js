
import styles from './footer.module.css';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {FaFileDownload} from 'react-icons/fa';
import CV from '../../../files/Noam_Resume.pdf'

const Footer = () => {
  return (
    <div id='contact' className={styles.footer}>
      <h3>Contact Me</h3>
      <h2><span className={styles.glow}>noamharris6@gmail.com</span></h2>
          <div className={styles.list}>
          <span><a href="https://linkedin.com/in/noam-harris" rel="noreferrer" target="_blank"><AiFillLinkedin/></a></span>
          <span><a href="https://github.com/Noam597" rel="noreferrer" target="_blank"><AiFillGithub/></a></span>
          <span><a href={CV} rel="noreferrer" target="_blank"><FaFileDownload/></a></span>
        </div>
    </div>
  )
}

export default Footer;