import React, { useState } from "react";
import styles from "./styles.module.scss";
import Stats from "./Stats";
import ApplicantCard from "./ApplicantCard";
import JobBoard from "./JobBoard";
import LatestCandidates from "../LatestCandidates";
import JobPosting from "../JobPosting";
const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroHeading}>
          <h3>Welcome back, Lewis</h3>
          <p>
            Here’s whats changed in your talent hunt journey! You can evaluate
            candidates, attract job seekers, and redefine the candidate
            experience for a new era of your workplace form here
          </p>
        </div>
        <div className={styles.cards}>
          <Stats />
          <ApplicantCard />
          <JobBoard />
        </div>
      </div>
      <div className={styles.candidatesContainer}>
        <LatestCandidates />
        <JobPosting />
      </div>
    </div>
  );
};

export default HeroSection;
