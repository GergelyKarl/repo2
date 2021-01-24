import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DescriptionIcon from "@material-ui/icons/Description";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={1458}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={15} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={15} />
      <SidebarOption Icon={LabelImportantIcon} title="Imported" number={15} />
      <SidebarOption Icon={SendIcon} title="Sent" number={15} />
      <SidebarOption Icon={DescriptionIcon} title="Drafts" number={15} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
    </div>
  );
};

export default Sidebar;
