import React from "react";
import styled from "styled-components";

const root = {
  primarycolor: "#d91e18",
  backgroundcolor: "#f0f3f7",
  secondarycolor: "#9da2ad",
  gray: "#7a7a7b",
  white: "#ffffff",
};

const FoodItem = ({ img ,price,name}) => {
  return (
    <FoodItemContainer>
      <FoodItemWrapper>
        <ImgHolder>
          <ItemImg src={img} />
        </ImgHolder>
        <ItemInfo>
       <ItemText>
       <h3>{name}</h3>
          <span>{price}</span>
       </ItemText>
          <ItemCartBtn>
            <i className="bx bx-cart-alt"></i>
          </ItemCartBtn>
        </ItemInfo>
      </FoodItemWrapper>
    </FoodItemContainer>
  );
};

export default FoodItem;

const FoodItemContainer = styled.div`
  width: 25%;
  height: 25rem;
  padding: 1rem;
`;
const FoodItemWrapper = styled.div`
  height: 100%;
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    border-radius: 2rem;
    box-shadow: rgba(14, 30, 37, 0.32) 0px 2px 18px 0px;
  }
`;
const ItemImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  object-fit:scale-down;
  transition: 0.5s ease-in-out;
  border-radius: 2rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 1.1s ease-in-out;
  &:hover {
    transform: scale(2) rotate(360deg);
  }
`;
const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding: 0 1rem;

  h3 {
    color: #7a7a7b;
  }

  &:nth-child(1) {
    text-align: left;
  }
`;

const ItemText=styled.div`
display:flex;
flex-direction:column;
`

const ItemCartBtn = styled.div`
  i {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${root.primarycolor};
    font-size: 2rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: ${root.primarycolor};
      border-radius: 1rem;
      color: ${root.white};
    }
  }
`;
const ImgHolder = styled.div`
  height: 60%;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
`;
