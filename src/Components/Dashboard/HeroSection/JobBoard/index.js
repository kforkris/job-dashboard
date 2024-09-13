import React from "react";
import styles from "@/Components/Dashboard/HeroSection/Stats/styles.module.scss";
const illustration = "/nav-images/illustration.png";
const JobBoard = () => {
  return (
    <div className={styles.statCards}>
      <div className={styles.card} style={{ flexDirection: "column" }}>
        <img src={illustration} alt="illustration" style={{ width: "100%" }} />
        <h5 className={styles.jobBoardHeading}>Private Job Board</h5>
        <h6 className={styles.jobBoardDesc}>
          Your private job posting will appear here, accessible to the public
          via a company-specific URL.
        </h6>
      </div>
    </div>
  );
};

export default JobBoard;
