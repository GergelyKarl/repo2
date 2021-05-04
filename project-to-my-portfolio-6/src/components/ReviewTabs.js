import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const root = {
  primarycolor: "#fad859",
  backgroundcolor: "#f0f3f7",
  secondarycolor: "#9da2ad",
  gray: "#7a7a7b",
  white: "#ffffff",
};
const ReviewTabs = ({ image, name }) => {
  return (
    <ReviewItem>
      <ReviewItemWrapper initial={{ x: "-60vw" }}
              animate={{ x: "0vw" }}
              transition={{ delay: 5, duration: 2 }}>
        <ReviewContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit
            nesciunt voluptatum! Nisi sed molestiae eos velit! Nisi facilis, sit
            recusandae libero reiciendis repellat voluptatibus cum excepturi
            voluptatem quo ipsa!
          </p>
          <ReviewImg src={image} />
        </ReviewContent>
        <ReviewInfo>
          <h3>{name}</h3>
          <ReviewRating>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </ReviewRating>
        </ReviewInfo>
      </ReviewItemWrapper>
    </ReviewItem>
  );
};

export default ReviewTabs;

const ReviewItem = motion(styled.div`
  width: 30%;
  margin: 1rem;
  height: 100%;

  &:nth-child(2) {
    transform: scale(1.2);
  }
`);

const ReviewImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 2rem;
`;

const ReviewItemWrapper = motion(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  background-color: ${root.white};
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`);
const ReviewContent = styled.div`
  padding: 2rem 1rem;
  position: relative;
  text-align: center;
`;

const ReviewInfo = styled.div`
  text-align: center;

  h3 {
    padding-bottom: 1rem;
  }
`;
const ReviewRating = styled.div`
  padding-bottom: 1rem;

  i {
    color: ${root.primarycolor};
  }
`;
