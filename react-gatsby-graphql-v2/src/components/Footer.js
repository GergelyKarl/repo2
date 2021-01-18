import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDesc>
          <h1>THE FIRM</h1>
          <p>We are here to make best experience to our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinatioms</FooterLink>
          <FooterLink to="/">sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Fun</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Destinatioms</FooterLink>
          <FooterLink to="/">YT</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">FaceBook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1200px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26e2e;
  }

  p {
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-in-out;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 16px;
`
