import {
  GameResultContainer,
  ResultsContainer,
  MyChoiceContainer,
  MyChoiceText,
  MyChoiceImage,
  OpponentChoiceContainer,
  OpponentText,
  OpponentImage,
  PlayAgainBtn,
  ResultText,
} from './styledComponent'

const GameResult = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <GameResultContainer>
      <ResultsContainer>
        <MyChoiceContainer>
          <MyChoiceText>YOU</MyChoiceText>
          <MyChoiceImage src={myChoice[1]} alt={myChoice[0].toLowerCase()} />
        </MyChoiceContainer>
        <OpponentChoiceContainer>
          <OpponentText>OPPONENT</OpponentText>
          <OpponentImage
            src={opponentChoice.imageUrl}
            alt={opponentChoice.id.toLowerCase()}
          />
        </OpponentChoiceContainer>
      </ResultsContainer>
      <ResultText>{resultMessage}</ResultText>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </GameResultContainer>
  )
}
export default GameResult
