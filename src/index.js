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

  render() {
    return (
      <Questions
        currentQuestion={this.state.currentQuestion}
        updateCurrentQuestion={this.updateCurrentQuestion}
        quizQuestions={quizQuestions}
      />
    );
  }
}

ReactDOM.render(
  <QuizContainer amountOfQuestions={3} />,
  document.getElementById("root")
);
