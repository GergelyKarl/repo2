import "./App.css";
import React,{useState,useEffect} from "react"
import styled, { css } from "styled-components";
import bgImage from "./images/bg.jpg";
import pizzaImage from "./images/pizz.jpg";
import pizza2 from "./images/pizza2.jpg";
import veggie from "./images/veggie.jpg";
import ReviewItem from "./components/ReviewItems";
import FoodItem from "./components/FoodItem";
import person1 from "./images/review1.jpg";
import person2 from "./images/review2.jpg";
import person3 from "./images/review3.jpg";
import footerbg from "./images/footerbg.jpg";

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

const containerCss = css`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;





function App() {

const [bckBtn, setBckBtn] = useState(false)

const changeNav = () => {
  if (window.scrollY >= 700) {
    setBckBtn(true);
  } else {
    setBckBtn(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", changeNav);
}, []);


  return (
    <div className="App">
      <Nav id="home">
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
      <About>
        <AboutContainer>
          <AboutArea>
            <AboutMiddle>
              <AboutPic src={pizzaImage} />
            </AboutMiddle>
            <AboutTextContainer>
              <AboutText>
                <h3>
                  <span>We</span> create asdasd...
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quas fugiat ut velit omnis, quis laudantium dignissimos
                  praesentium ratione. Unde debitis eveniet dolores consequuntur
                  eius dolorum, suscipit quod nisi enim.
                </p>
              </AboutText>
            </AboutTextContainer>
          </AboutArea>
        </AboutContainer>
      </About>
      <Food>
        <FoodContainer>
          <FoodMenu>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              architecto aliquam reprehenderit temporibus officiis ullam.
            </p>
            <FoodCategory>
              <button>all</button>
              <button>lorem</button>
              <button>ipsum</button>
              <button>dolor</button>
              <button>sit</button>
            </FoodCategory>
            <FoodItemWrap>
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
              <FoodItem img={veggie} name="Veggie" price="1800ft" />
            </FoodItemWrap>
          </FoodMenu>
        </FoodContainer>
      </Food>
      <Review>
        <ReviewContainer>
          <ReviewSection>
            <ReviewItem image={person2} name="lorem" />
            <ReviewItem image={person1} name="ipsum" />
            <ReviewItem image={person3} name="dolor" />
          </ReviewSection>
        </ReviewContainer>
      </Review>
      <Footer>
        <FooterContainer>
          <FooterRow>
            <FooterSection1>
              <h1>Pizza</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                enim! Praesentium ipsam reprehenderit, id libero dolores fugit
                laborum ducimus provident!
              </p>
              <p>Email:lorem@ipsum.hu</p>
              <p>Tel:0690478545</p>
              <p>Website:pizza.hu</p>
            </FooterSection1>
            <FooterSection2>
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">Reviews</a>
              </p>
              <p>
                <a href="#">Menu</a>
              </p>
              <p>
                <a href="#">Location</a>
              </p>
            </FooterSection2>
            <FooterSection3>
              <h1>Media & kontakt</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates perspiciatis distinctio minima repellendus ab magnam.
              </p>
              <InputGroup>
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
              </InputGroup>
            </FooterSection3>
          </FooterRow>
        </FooterContainer>
        <BackToHomeButton href="#home" style={{display:bckBtn ? "flex" : "none"}}>
        <i className="bx bxs-to-top"></i>
      </BackToHomeButton >
      </Footer>
   
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

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
const HeroRow = styled.div``;
const HeroItem = styled.div`
  width: 50%;
  padding: 1rem;
  @media (max-width: 600px) {
    width: 33%;
  }
`;
const HeroSlogen = styled.div`
  h1 {
    font-size: 7rem;
    color: ${root.primarycolor};
  }

  button {
    padding: 1rem 5rem;
    outline: none;
    border: none;
    background-color: ${root.backgroundcolor};
    border: 0.125rem solid ${root.primarycolor};
    border-radius: 2rem;
    color: ${root.primarycolor};
    margin: 3rem 0;
    cursor: pointer;
    font-weight: 600;
    transition: 0.5s ease-in-out;
  }

  button:hover {
    background-color: ${root.primarycolor};
    color: ${root.backgroundcolor};
  }
`;

const About = styled.div`
  ${alignItemsCenter};
  height: 100vh;
`;
const AboutContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
const AboutArea = styled.div`
  display: flex;
`;
const AboutMiddle = styled.div`
  width: 58.33%;
`;
const AboutPic = styled.img`
  width: 100%;
  border-radius: 2rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 18px 44px,
    rgba(17, 17, 26, 0.1) 0px 36px 76px, rgba(17, 17, 26, 0.1) 0px 44px 80px;
`;
const AboutTextContainer = styled.div`
  ${alignItemsCenter};
  text-align: center;

  width: 42%;
`;
const AboutText = styled.div`
  padding: 4rem;
  background-color: ${root.white};
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transform: translateX(-10rem);

  h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${root.gray};
  }

  span {
    color: blue;
  }
`;

const Food = styled.div`
  ${alignItemsCenter};

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: url(${pizza2});
`;
const FoodContainer = styled.div`
  ${containerCss};
`;
const FoodMenu = styled.div`
  padding: 4rem;
  background-color: ${root.white};
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 8px 0px;

  h1 {
    color: ${root.gray};
  }

  p {
    margin: 2rem 0;
  }
`;
const FoodCategory = styled.div`
  ${alignItemsCenter};
  margin-top: 2rem;

  button {
    padding: 0.5rem 2.5rem;
    margin: 0 1rem;
    outline: none;
    border: 1px solid ${root.primarycolor};
    background-color: transparent;
    color: ${root.primarycolor};
    font-weight: 600;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${root.primarycolor};
      color: ${root.white};
    }
  }
`;
const FoodItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 3rem;
`;

const Review = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ReviewContainer = styled.div`
  ${containerCss};
`;
const ReviewSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 5rem;
`;

const Footer = styled.section`
  background-image: url(${footerbg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  color: ${root.white};
  h1 {
    color: ${root.primarycolor};
  }
  align-items: center;
  display: flex;
`;
const FooterContainer = styled.div`
  ${containerCss};
`;
const FooterRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const FooterSection1 = styled.div`
  width: 50%;
  margin-right: 2rem;
`;
const FooterSection2 = styled.div`
  width: 14%;
  margin-top: 1rem;
`;
const FooterSection3 = styled.div`
  width: 33.33%;
`;

const InputGroup = styled.div`
  padding: 1rem;
  border: 0.125rem solid ${root.primarycolor};
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  input {
    flex: auto;
    outline: none;
    border: none;
    color: ${root.primarycolor};
    background-color: transparent;
  }
  button {
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    background-color: ${root.primarycolor};
    border-radius: 1rem;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
  }
`;

const BackToHomeButton = styled.a`

position: fixed;
    bottom: 70px;
    right: 70px;
    border-radius: 10px;
    background-color: ${root.primarycolor};
    color: ${root.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding: .5rem;
    z-index: 99;
    
 
  
`;
