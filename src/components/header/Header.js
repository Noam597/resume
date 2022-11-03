import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import profile from "../../assests/profile.jpeg";
import { FaBars } from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai';
const Header = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  const styleLink = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
      textShadow: isActive ? "0 0 5px white" : "",
    };
  };
  return (
    <nav className={styles.header}>
      <div className={styles.me}>
        <div className={styles.profilePic}>
          <img
            src={profile}
            alt="profile"
            onClick={() => {
              navigate("/resume");
            }}
          />
        </div>
        <h1>NOAM HARRIS</h1>
      </div>
      <div className={`${styles.navList} ${menu && `${styles.menu}`}`}>
        <ul
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <li>
            <NavLink style={styleLink} to="/resume" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="resume/portfolio" style={styleLink}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <a href="https://github.com/Noam597/resume" rel="noreferrer" target="_blank">
             <AiFillGithub/>
            </a>
          </li>
        </ul>
      </div>
      <>
        <button
          className={styles.menuBtn}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <FaBars />
        </button>
      </>
    </nav>
  );
};

export default Header;
