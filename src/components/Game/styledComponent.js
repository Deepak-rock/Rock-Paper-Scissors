import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 30px;
  @media screen and (min-width: 768px) {
    padding: 50px 30px 0 30px;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`
export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 30px 0;
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 100px 0 30px 0;
  }
`
export const RulesButton = styled.button`
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
export const PopupContainer = styled.div`
  display: flex;
  flex-container: column;
  justify-content: flex-end;
`
export const RulesImageContainer = styled.div`
  background-color: #ffffff;
  margin: 30px;
  padding: 20px;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
export const CloseLineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseLineButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
`
export const RulesImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
