import React,{useState,useEffect} from 'react'
import styles from './homePage.module.css'
import {AiOutlineRightCircle,AiOutlineHome,AiOutlinePhone} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BiBookOpen}  from 'react-icons/bi'
import {BsFillBriefcaseFill}  from 'react-icons/bs'
import { Link } from 'react-scroll'
import About from '../about/About';
import Home from '../home/Home';
import Experience from '../experience/Experience'
import Portfolio from '../projects/Portfolio'
const HomePage = () => {

    const [innerMenu, setInnerMenu] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
      
  return (
    <div className={styles.homePage}>
      <div className={styles.menu}>
          <ul>
            <li><button  onClick={()=>{setInnerMenu(!innerMenu)}}><AiOutlineRightCircle/></button></li>
            {innerMenu? <>
            <li><Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={0} duration={500}><AiOutlineHome/></Link></li>
            <li><Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={0} duration={500}><CgProfile/></Link></li>
            <li><Link activeClass={styles.active} to="experience" spy={true} smooth={true} offset={0} duration={500}><BiBookOpen/></Link></li>
            <li><Link activeClass={styles.active} to="portfolio" spy={true} smooth={true} offset={0} duration={500}><BsFillBriefcaseFill/></Link></li>
            <li><Link activeClass={styles.active} to="contact" spy={true} smooth={true} offset={0} duration={500}><AiOutlinePhone/></Link></li>
            </>:<></>}
        </ul>
      </div>
          <Home/>
          <About/>
          <Experience/>
          <Portfolio/>
      
      
    </div>
  )
}

export default HomePage