import React from "react"
import styled from "styled-components"
import { StatsData } from "../data/StatsData"

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 4rem;
  padding: 0 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  transition: 0.3s;
`
const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`
const Title = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 1.5rem);
  font-weight: bold;
  text-align: center;
`
const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 12px;
`
