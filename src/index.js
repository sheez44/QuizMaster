import React from "react";
import ReactDOM from "react-dom";

import { quizQuestions } from "./quiz";
import { Questions } from "./components/questions";

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 1,
      amountOfQuestions: this.props.amountOfQuestions
    };
  }

  updateCurrentQuestion = () => {
    this.setState({
      currentQuestion: (this.state.currentQuestion += 1)
    });
  };

  resetQuestions = () => {
    this.setState({
      currentQuestion: 1
    });
  };

  render() {
    const isRunning = this.state.currentQuestion <= 3;

    return (
      <div>
        {isRunning ? (
          <Questions
            currentQuestion={this.state.currentQuestion}
            updateCurrentQuestion={this.updateCurrentQuestion}
            quizQuestions={quizQuestions}
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
