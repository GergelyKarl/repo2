import React from "react";
import styled from "styled-components";

const root = {
  primarycolor: "#0F9D58",
  backgroundcolor: "#f0f3f7",
  secondarycolor: "#9da2ad",
  gray: "#7a7a7b",
  white: "#ffffff",
};

const ReviewItems = ({ large, image, name }) => {
  console.log(image);

  return (
    <ReviewItem>
      <ReviewItemWrapper>
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

export default ReviewItems;

const ReviewItem = styled.section`
  width: 30%;
  margin: 0.5rem;

 

  &:nth-child(2){
    transform:scale(1.15)
  }
`;

const ReviewImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 2rem;
`;

const ReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  background-color: ${root.white};
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const ReviewContent = styled.div`
  padding: 2rem 0 1rem 0;
  /* border-bottom: 0.125rem solid ${root.gray}; */
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
