import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://png2.cleanpng.com/sh/f8145b2aa96d760238a182820466f67c/L0KzQYm3U8IxN5ZmfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tf9vdJpzfZ9saHH3Pb3wlvVkcJJ5ReZuY3jxebTojL10faF1Rd5ydnWwc7nolL10gZ5nh942aXPyfn68gfIxQWFmS6Y5M0a8Q3A8V8I3P2c3SqMAMkG4QoGBUMMzPmQ2RuJ3Zx==/kisspng-computer-icons-online-chat-livechat-technical-supp-live-chat-symbol-icon-5ab090a3403693.5726762215215208032631.png" />
        <Button onClick={signIn} variant="outlined">
          Sign up with google
        </Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  margin-bottom: 50px;
`;

export default login;
