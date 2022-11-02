
import { useNavigate } from "react-router-dom";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import styles from "./portfolio.module.css";
import { frontPage } from "./portfolioArray";
const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h1>Portfolio</h1>
      <button
        className={styles.p_btn}
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        To View full Portfolio
      </button>
      <div className={styles.display}>
        {frontPage.map(({ id, project, made, image, alt, github, live }) => {
          return (
            <div key={id}>
              <PortfolioCard
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
