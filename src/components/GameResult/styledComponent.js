import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 50px 0;
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 100px 0 30px 0;
  }
`
export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
`
export const MyChoiceContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`
export const MyChoiceText = styled.h2`
  color: #ffffff;
  font-size: 16px;
  line-height: 1.8;
  font-family: Bree Serif;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const MyChoiceImage = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
export const OpponentChoiceContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`
export const OpponentText = styled.h2`
  color: #ffffff;
  font-size: 16px;
  line-height: 1.8;
  font-family: Bree Serif;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const OpponentImage = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  line-height: 2;
  font-family: Bree Serif;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const PlayAgainBtn = styled.button`
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 8px;
  color: #223a5f;
  font-size: 16px;
  font-family: Bree Serif;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
