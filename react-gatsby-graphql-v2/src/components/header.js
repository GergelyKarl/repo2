import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Buttons"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">THE FIRM</NavLink>

      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button big="true" round="true" primary="true" to="/trips">
          Book a flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    position: absolute;
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768) {
    display: none;
  }
`
