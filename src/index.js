import React from "react";
import ReactDOM from "react-dom";

import { Questions } from "./components/questions";

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

  render() {
    const { gameState } = this.state;

    return (
      <div>
        {gameState === "quiz" ? (
          <Questions
            setGamestate={this.setGamestate}
            amountOfQuestions={this.props.amountOfQuestions}
          />
        ) : (
          <div>
            <h1>Quiz ended</h1>
            <a href="#" onClick={this.resetQuestions}>
              reset
            </a>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <QuizContainer amountOfQuestions={3} />,
  document.getElementById("root")
);
