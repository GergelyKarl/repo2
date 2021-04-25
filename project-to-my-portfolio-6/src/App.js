import "./App.css";
import styled, { css } from "styled-components";
import bgImage from "./images/bg.jpg";

const root = {
  primarycolor: "#0F9D58",
  backgroundcolor: "#f0f3f7",
  secondarycolor: "#9da2ad",
  gray: "#7a7a7b",
  white: "#ffffff",
};

const alignItemsCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <MenuWrapper>
          <a href="#home">
            <Logo>FRESFOOD</Logo>
          </a>
          <Menu>
            <a href="#home">
              <MenuItem className="active">Home</MenuItem>
            </a>
            <a href="#about">
              <MenuItem>About</MenuItem>
            </a>
            <a href="#menu">
              <MenuItem>Menu</MenuItem>
            </a>
            <a href="#testimonals">
              <MenuItem>Testimonals</MenuItem>
            </a>
          </Menu>
          <RightMenu>
            <CartBtn>
              <i className="bx bx-cart-alt"></i>
            </CartBtn>
          </RightMenu>
        </MenuWrapper>
      </Nav>
      <Hero id="home">
        <HeroContainer>
          <HeroRow>
            <HeroItem>
              <HeroSlogen>
                <h1>Fresfood</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nihil corrupti fuga. Voluptates nemo quos veritatis
                  libero nihil ipsam, amet explicabo! Dignissimos, nemo quam
                  facilis consequatur officiis error rem soluta.
                </p>
                <button>Order Now</button>
              </HeroSlogen>
            </HeroItem>
          </HeroRow>
        </HeroContainer>
      </Hero>
    </div>
  );
}

export default App;

const MenuWrapper = styled.div`
  max-width: 1366px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const Logo = styled.div`
  color: ${root.primarycolor};
  font-weight: 800;
  font-size: 2rem;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.div`
  margin-left: 1rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  color: ${root.gray};
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover,
  &.active {
    color: ${root.white};
    background-color: ${root.primarycolor};
    border-radius: 1rem;
  }
`;
const RightMenu = styled.div``;
const CartBtn = styled.div`
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
`;
const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: #f0f3f7;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Hero = styled.section`
  ${alignItemsCenter};
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(${bgImage});
`;

const HeroContainer = styled.div``;
const HeroRow = styled.div``;
const HeroItem = styled.div`
width:50%;
padding:1rem;
@media (max-width: 600px) {
   width:33%;
  }

`;
const HeroSlogen = styled.div`
 h1{
   font-size:7rem;
   color:${root.primarycolor}
 }

 button{
padding:1rem 5rem;
outline:none;
border:none;
background-color:${root.backgroundcolor};
border: 0.125rem solid ${root.primarycolor};
border-radius:2rem;
color:${root.primarycolor};
margin:3rem 0;
cursor:pointer;
font-weight:600;
transition:0.5s ease-in-out;

 }

 button:hover{
   background-color:${root.primarycolor};
   color:${root.backgroundcolor};
 }

`;
