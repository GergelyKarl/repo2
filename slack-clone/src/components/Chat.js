import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";

const Chat = () => {
  const roomId = useSelector(selectRoomId);

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <h4>
              <strong>#Room-name</strong>
              <StarBorderOutlinedIcon />
            </h4>
          </ChatHeaderLeft>
          <ChatHeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </ChatHeaderRight>
        </ChatHeader>

        <ChatMessages></ChatMessages>
        <ChatInput channelId={roomId} />
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > h4 .MuiSvgIcon-root {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;
