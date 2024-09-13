import React from "react";
import styles from "@/Components/Dashboard/HeroSection/Stats/styles.module.scss";
import dynamic from "next/dynamic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  {
    ssr: false,
  }
);

const ApplicantCard = ({ applicant_reviewed = 0, total_applicants = 0 }) => {
  const data = {
    labels: ["total applicants", "total reviewed"],
    datasets: [
      {
        label: "",
        data: [total_applicants, applicant_reviewed],
        backgroundColor: ["rgb(227, 228, 232)", " rgb(128, 99, 206)"],
        borderColor: ["rgb(227, 228, 232)", " rgb(128, 99, 206)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right", // Position the legend to the right
        labels: {
          boxWidth: 20, // Control the size of the legend box
          padding: 15, // Add padding around the labels
        },
      },
    },
  };

  return (
    <div className={styles.statCards}>
      <div className={styles.card} style={{ height: "248px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ApplicantCard;
