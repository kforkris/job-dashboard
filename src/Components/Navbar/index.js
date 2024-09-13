import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Image from "next/image";
const user = "/nav-images/profile.png";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h2>Onefinet</h2>
      </div>
      <div className={styles.navAction}>
        <div>
          <SearchIcon />
          <input placeholder="Start searching" />
        </div>
        <NotificationsNoneOutlinedIcon />
        <SettingsOutlinedIcon />
        <AppsOutlinedIcon />
        <Image src={user} width={24} height={24} />
      </div>
    </div>
  );
};

export default Navbar;
