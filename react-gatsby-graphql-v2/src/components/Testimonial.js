import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimon-1", "testimon-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialContainer>
      <TopLine>tutu</TopLine>
      <Description> What people say about this</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonials>
            <IoMdCheckmarkCircleOutline />
            <h3>Anonymus</h3>
            <p>
              The greatest Gatsby site of the world Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Animi, voluptas. The greatest Gatsby
              site of the world Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Animi, voluptas.
            </p>
          </Testimonials>
          <Testimonials>
            <FaRegLightbulb />
            <h3>IV.Bela</h3>
            <p>
              The greatest Gatsby site of the world Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Animi, voluptas. The greatest Gatsby
              site of the world Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Animi, voluptas.
            </p>
          </Testimonials>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonial

const TestimonialContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Testimonials = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const Images = styled(Img)`
  border-radius: 11px;
  height: 100%;
`
