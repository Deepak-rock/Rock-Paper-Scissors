import styled from 'styled-components'

export const ButtonItem = styled.li`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ButtonImage = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ImageItem = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
