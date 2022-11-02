
import styles from './portfolioCard.module.css'
import {AiFillGithub} from 'react-icons/ai';
const PortfolioCard = ({image,alt,title,made,github,live}) => {
  return (
    <div className={styles.portfolioCard}>
        <h3>{title}</h3>
        <p>Made with: {made}</p>
        <div className={styles.card}>
            <img src={image} alt={alt}/>
        </div>
        
        <div className={styles.btns}>
            <a href={github} rel="noreferrer" target="_blank"><button className={`${styles.button} ${styles.full}`}>Github<AiFillGithub/></button></a>
            {live?<a href={live}  rel="noreferrer" target="_blank"><button className={`${styles.button} ${styles.hollow}`}>Demo</button></a>:<></>}
        </div>
    </div>
  )
}

export default PortfolioCard