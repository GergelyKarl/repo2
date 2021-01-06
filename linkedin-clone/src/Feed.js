import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/app";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move"

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendpost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: "this is a test",
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendpost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#f5ab35" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#03c9a9" />
          <InputOption
            Icon={EventNoteIcon}
            title="Write Article"
            color="#913d88"
          />
        </div>
      </div>
      <FlipMove  >
      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
      ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
