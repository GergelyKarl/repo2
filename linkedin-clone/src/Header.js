import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={ChatRoundedIcon} title="Messages" />
        <HeaderOption
          Icon={NotificationsActiveRoundedIcon}
          title="Notifications"
        />
        <HeaderOption
          avatar="https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80"
          title="Me"
        />

      </div>
    </div>
  );
}

export default Header;
