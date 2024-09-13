import React, { useEffect, useRef } from "react";
import styles from "@/Components/Dashboard/LatestCandidates/styles.module.scss";
import { Chart, registerables } from "chart.js";

// Register chart.js components globally, so it only happens once
Chart.register(...registerables);

const JobPosting = () => {
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
          labels: ["Selected", "Waitlisted", "Rejected", "Not Appeared"],
          datasets: [
            {
              data: [12, 9, 5, 3], // Sample data, can be updated with actual values
              backgroundColor: [
                "rgba(214, 241, 220, 1)",
                "rgba(255, 229, 193, 1)",
                "rgba(255, 219, 212, 1)",
                "rgba(219, 235, 255, 1)",
              ],
              borderColor: [
                "rgba(0, 135, 68, 1)",
                "rgba(255, 167, 0, 1)",
                "rgba(214, 45, 32, 1)",
                "rgba(0, 87, 231, 1)",
              ],
              borderWidth: 1,
              borderRadius: 10,
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
    </div>
  );
};

export default JobPosting;
