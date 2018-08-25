import React from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./components/Quiz";
import { PostQuiz } from "./components/PostQuiz";

import "./css/styles.css";

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: "quiz"
    };
  }

  setGamestate = state => {
    this.setState({
      gameState: state
    });
  };

  getGamestate = () => this.state.gameState;

  render() {
    const { gameState } = this.state;

    return (
      <React.Fragment>
        {gameState === "login" ? (
          <h1>Login</h1>
        ) : (
          <Quiz
            setGamestate={this.setGamestate}
            getGamestate={this.getGamestate}
            amountOfQuestions={this.props.amountOfQuestions}
          />
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <QuizContainer amountOfQuestions={3} />,
  document.getElementById("root")
);
