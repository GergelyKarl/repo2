import React from "react";
import styled from "styled-components";

const FoodItem = ({ img }) => {
  return (
    <FoodItemContainer>
      <FoodItemWrapper>
        <ImgHolder>
          <ItemImg src={img} />
        </ImgHolder>
        <ItemInfo>
          <h3>fggf</h3>
          <span></span>
        </ItemInfo>
        <ItemCartBtn>
          <i className="bx bx-cart-alt"></i>
        </ItemCartBtn>
      </FoodItemWrapper>
    </FoodItemContainer>
  );
};

export default FoodItem;

const FoodItemContainer = styled.div`
  width: 25%;
  height: 30rem;
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
  height: 280px;
  width:253px;

  position: absolute;
  overflow: hidden;
  border-radius: 2rem;
  object-fit:contain;
`;
const ItemInfo = styled.div``;
const ItemCartBtn = styled.div``;
const ImgHolder = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
  border-radius: 2rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
