import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Room</h2>
          <h3>
            <FiberManualRecordIcon />
            Name
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption
        Icon={InsertCommentIcon}
        title="Threads"
      />
      <SidebarOption
        Icon={DraftsIcon}
        title="Saved Items"
      />
      <SidebarOption
        Icon={PeopleAltIcon}
        title="People & Groups"
      />
      <SidebarOption
        Icon={ExpandLessIcon}
        title="Show Less"
      />
      <hr />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="Show Less"
      />
      <hr />

      <SidebarOption
        Icon={AddIcon}
        title="Add Channnel"
        addChannelOption
      />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  height: 100vh;
  color: white;
  flex: 0.3;
  margin-top: 60px;
  max-width: 260px;
  border-top: 1px solid #49274b;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  h3 .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
