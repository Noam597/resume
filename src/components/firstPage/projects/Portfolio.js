
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../custom-hooks/useIntersectionObserver";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import styles from "./portfolio.module.css";
import { frontPage } from "./portfolioArray";
const Portfolio = () => {
  const navigate = useNavigate();

  
    
    const [show,observerRef] = useIntersectionObserver()
  return (
    <section ref={observerRef} id="portfolio" className={styles.portfolio}>
      <h1>Portfolio</h1>
      <button
        className={styles.p_btn}
        onClick={() => {
          navigate("/resume/portfolio");
        }}
      >
        To View full Portfolio
      </button>
      <div className={styles.display}>
        {frontPage.map(({ id, project, made, image, alt, github, live }) => {
          return (
            <div key={id}>
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

      {/* <div className={styles.filler}></div> */}
    </section>
  );
};

export default Portfolio;
