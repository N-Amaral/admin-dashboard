import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";
import userProfile from "../../assets/user.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("DashBoard");

  const sidebarItemContent = [
    {
      title: "Dashboard",
      linkTo: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Manage Team",
      linkTo: "/team",
      icon: <PeopleOutlinedIcon />,
    },
    {
      title: "Contacts Information",
      linkTo: "/contacts",
      icon: <ContactsOutlinedIcon />,
    },
    {
      title: "Invoices & Balances",
      linkTo: "/invoices",
      icon: <ReceiptOutlinedIcon />,
    },
    {
      title: "Profile Form",
      linkTo: "/form",
      icon: <PersonOutlinedIcon />,
    },
    {
      title: "Calendar",
      linkTo: "/calendar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "FAQ Page",
      linkTo: "/faq",
      icon: <HelpOutlineOutlinedIcon />,
    },
    {
      title: "Bar Chart",
      linkTo: "/bar",
      icon: <BarChartOutlinedIcon />,
    },
    {
      title: "Pie Chart",
      linkTo: "/pie",
      icon: <PieChartOutlineOutlinedIcon />,
    },
    {
      title: "Line Chart",
      linkTo: "/line",
      icon: <TimelineOutlinedIcon />,
    },
    {
      title: "Geography Chart",
      linkTo: "/geography",
      icon: <MapOutlinedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-inner-item:active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img alt="profile-user" width="100px" height="100px" src={userProfile} style={{ cursor: "pointer", borderRadius: "50%" }} />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  Null
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin Title Name
                </Typography>
              </Box>
            </Box>
          )}

          {/*MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {sidebarItemContent.map((element, i) => (
              <React.Fragment key={`${element.title.toLowerCase()}-${i}`}>
                <Item title={`${element.title}`} to={`${element.linkTo}`} icon={element.icon} selected={isSelected} setSelected={setIsSelected} />
                {i === 0 ? (
                  <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                    Data
                  </Typography>
                ) : (
                  ""
                )}
                {i === 3 ? (
                  <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                    Pages
                  </Typography>
                ) : (
                  ""
                )}
                {i === 6 ? (
                  <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                    Charts
                  </Typography>
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
