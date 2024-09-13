import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import styles from "./styles.module.scss";
import HeroSection from "./HeroSection";
const index = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
        <div
          className={styles.dashboard}
          style={sidebarActive ? { width: "80%" } : { width: "92%" }}
        >
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default index;
