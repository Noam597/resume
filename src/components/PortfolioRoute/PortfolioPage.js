import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PortfolioCard from "../firstPage/portfolioCard/PortfolioCard";
import { repositories } from "./repo";
import styles from "./portfolioPage.module.css";
import useIntersectionObserver from "../custom-hooks/useIntersectionObserver";
const PortfolioPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


   const [show,observerRef] = useIntersectionObserver()

  return (
    <section ref={observerRef}>
      <h1>Portfolio Page</h1>
      <p
        className={styles.homeLink}
        onClick={() => {navigate("/resume");}}>
        <u>Back to home page</u>
      </p>
      <div className={styles.portfolioPage} >
        {repositories.map(({ id, project, made, image, alt, github, live }) => {
          return (
            <div key={id} >
              <PortfolioCard
                show={show}
                title={project}
                made={made}
                image={image}
                alt={alt}
                github={github}
                live={live}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioPage;
