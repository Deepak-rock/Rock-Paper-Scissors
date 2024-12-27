import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'
import GameScore from '../GameScore'
import GameResult from '../GameResult'

import {
  GameContainer,
  ResponsiveContainer,
  ButtonList,
  RulesButton,
  PopupContainer,
  RulesImageContainer,
  CloseLineContainer,
  CloseLineButton,
  RulesImage,
} from './styledComponent'

class Game extends Component {
  state = {
    scoreCount: 0,
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    resultMessage: '',
  }

  playAgain = () => this.setState({showResult: false})

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSS',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSS',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  renderScore = () => {
    const {scoreCount} = this.state
    return <GameScore score={scoreCount} />
  }

  renderResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    return (
      <GameResult
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.playAgain}
      />
    )
  }

  renderButtons = () => {
    const {choicesList} = this.props
    return (
      <ButtonList>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonImage={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ButtonList>
    )
  }

  render() {
    const {showResult} = this.state
    return (
      <GameContainer>
        <ResponsiveContainer>
          {this.renderScore()}
          {showResult ? this.renderResult() : this.renderButtons()}
          <PopupContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">RULES</RulesButton>}
            >
              {close => (
                <RulesImageContainer>
                  <CloseLineContainer>
                    <CloseLineButton type="button" onClick={() => close()}>
                      <RiCloseLine />
                    </CloseLineButton>
                  </CloseLineContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageContainer>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </GameContainer>
    )
  }
}
export default Game
