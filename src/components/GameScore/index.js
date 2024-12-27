import {
  ScoreContainer,
  ScoreText,
  ScoreInnerCon,
  ScoreLabel,
  ScoreCount,
} from './styledComponent'

const GameScore = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreText>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </ScoreText>
      <ScoreInnerCon>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreCount>{score}</ScoreCount>
      </ScoreInnerCon>
    </ScoreContainer>
  )
}
export default GameScore
