import React, { useEffect, useRef } from "react";
import styles from "@/Components/Dashboard/LatestCandidates/styles.module.scss";
import sty from "./styles.module.scss";
import { Chart, registerables } from "chart.js";

// Register chart.js components globally, so it only happens once
Chart.register(...registerables);

const JobPosting = ({ recentJobOpenings }) => {
  const chartRef = useRef(null); // Keep track of the DOM element
  const chartInstanceRef = useRef(null); // Keep track of the Chart.js instance

  useEffect(() => {
    const initializeChart = () => {
      const ctx = chartRef.current?.getContext("2d");

      // Destroy any existing chart before creating a new one
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["", "", ""],
          datasets: [
            {
              data: [75, 40, 110], // Sample data, can be updated with actual values
              backgroundColor: [
                "rgb(128, 99, 206)",
                "rgb(124, 161, 249)",
                "rgb(144, 221, 251)",
              ],
              borderColor: [
                "rgb(128, 99, 206)",
                "rgb(124, 161, 249)",
                "rgb(144, 221, 251)",
              ],
              borderWidth: 1,
              borderRadius: 10,
              // minBarLength: 10,
            },
          ],
        },
        options: {
          responsive: true,
          indexAxis: "y", // This makes the chart horizontal
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 150,
              ticks: {
                stepSize: 5, // Set the gap between ticks to 5 units
              },
            },
          },
        },
      });
    };

    initializeChart();

    return () => {
      // Cleanup the chart instance on component unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.latestCandidateCard}>
      <h2>Your Job Postings</h2>
      <div style={{ marginTop: "10px" }}>
        <canvas ref={chartRef} id="interviewDecisionsChart"></canvas>
      </div>
      <div className={sty["footer"]}>
        <div className={sty["container"]}>
          <span
            className={sty["red-dot"]}
            style={{ background: "rgb(128, 99, 206)" }}
          ></span>
          <span className={sty["name"]}>
            Private Equity-
            <br />
            Associate
          </span>
        </div>
        <div className={sty["container"]}>
          <span
            className={sty["red-dot"]}
            style={{ background: "rgb(124, 161, 249)" }}
          ></span>
          <span className={sty["name"]}>
            Associate- <br />
            Software Engineer
          </span>
        </div>
        <div className={sty["container"]}>
          <span
            className={sty["red-dot"]}
            style={{ background: "rgb(144, 221, 251)" }}
          ></span>
          <span className={sty["name"]}>
            Frontend-
            <br />
            trainee
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
