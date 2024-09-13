import React from "react";
import styles from "./styles.module.scss";
const LatestCandidates = () => {
  return (
    <div className={styles.latestCandidateCard}>
      <h2>Latest Candidates</h2>
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Job Name</th>
            <th>Rating</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Jane Dane <br /> <span>emailexample.com</span>
            </td>
            <td>
              Private Equity 2025 <br /> Full Time Analyst
            </td>
            <td>7.8</td>
            <td>June 25, 2024</td>
          </tr>
          <tr>
            <td>
              Jane Dane <br /> <span>emailexample.com</span>
            </td>
            <td>
              Private Equity 2025 <br /> Full Time Analyst
            </td>
            <td>7.8</td>
            <td>June 25, 2024</td>
          </tr>
          <tr>
            <td>
              Jane Dane <br /> <span>emailexample.com</span>
            </td>
            <td>
              Private Equity 2025 <br /> Full Time Analyst
            </td>
            <td>7.8</td>
            <td>June 25, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestCandidates;
