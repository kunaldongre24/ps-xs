import React from "react";
import "../style/sidebar.css";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import SubjectOutlinedIcon from "@material-ui/icons/SubjectOutlined";
import SpeedOutlinedIcon from "@material-ui/icons/SpeedOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import SidebarRow from "./SidebarRow";

function Sidebar(props) {
  return (
    <div className={`sidebar ${props.closed ? "closed" : ""}`}>
      <SidebarRow Title="Dashboard" Icon={DashboardOutlinedIcon} Path={"/"} />
      <SidebarRow
        Title="PCC Questionaire"
        Icon={ListAltIcon}
        Path={"/pcc-questionaire"}
      />
      <SidebarRow
        Title="Project Details"
        Icon={AccountTreeOutlinedIcon}
        Path={"/project-details"}
      />
      <SidebarRow
        Title="Perform PCC"
        Icon={SettingsApplicationsOutlinedIcon}
        Path={"/perform-pcc"}
      />
      <SidebarRow
        Title="Open Topics"
        Icon={SubjectOutlinedIcon}
        Path={"/open-topics"}
      />
      <SidebarRow
        Title="Deviation List"
        Icon={FormatListBulletedOutlinedIcon}
        Path={"/deviation-list"}
      />
    </div>
  );
}

export default Sidebar;
