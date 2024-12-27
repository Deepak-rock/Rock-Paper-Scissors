import styled from 'styled-components'

export const ScoreContainer = styled.div`
  width: 100%;
  align-self: flex-start;
  border: 1px solid #ffffff;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    padding: 30px 50px;
  }
`
export const ScoreText = styled.h1`
  color: #ffffff;
  font-size: 24px;
  line-height: 1.8;
  font-family: "Bree Serif";
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ScoreInnerCon = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 10px 35px;
  }
`
export const ScoreLabel = styled.p`
  color: #223a5f;
  font-size: 24px;
  line-height: 1.8;
  font-family: "Bree Serif";
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ScoreCount = styled.p`
  color: #223a5f;
  font-size: 32px;
  font-family: "Roboto";
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
