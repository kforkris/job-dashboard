import React from "react";
import styles from "./styles.module.scss";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
const Stats = () => {
  return (
    <div className={styles.statCards}>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(19, 51, 172, 1)" }}
          >
            <WorkOutlineOutlinedIcon />
          </div>
          <div>
            <h2>24</h2>
            <h5>Total Jobs</h5>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(190, 161, 129, 1)" }}
          >
            <PeopleAltOutlinedIcon />
          </div>
          <div>
            <h2>1500</h2>
            <h5>Applicants</h5>
          </div>
        </div>
      </div>
      <div className={styles.card} style={{ marginTop: "20px" }}>
        <div className={styles.cardContainer}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(19, 51, 172, 1)" }}
          >
            <WorkOutlineOutlinedIcon />
          </div>
          <div>
            <h2>20,000</h2>
            <h5>Ai credits</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
