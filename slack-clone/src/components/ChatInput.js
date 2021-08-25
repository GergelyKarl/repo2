import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({
  channelName,
  channelId,
}) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .add({
        message: input,
        timestamp:
          firebase.firestore.FieldValue.serverTimestamp(),
        user: "Kg",
        userImage: "",
      });
  };

  console.log(input);

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          type="text"
          placeholder={`Message #`}
        />
        <Button
          hidden
          type="submit"
          onClick={sendMessage}
        >
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    outline: none;
    border-radius: 3px;
    padding: 20px;
    border: 1px solid gray;
  }

  > form > button {
    display: none;
  }
`;
