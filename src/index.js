import React from "react";
import ReactDOM from "react-dom";

import { quizQuestions } from "./quiz";

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 1
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
        amountOfQuestions={3}
        quizQuestions={quizQuestions}
      />
    );
  }
}

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.quizQuestions
    };
  }

  render() {
    const { currentQuestion } = this.props;
    const { questions } = this.state;
    const question = questions["q" + currentQuestion];

    return (
      <div>
        <h2>
          {`Question ${currentQuestion}:`}{" "}
          {questions["q" + currentQuestion].question}
        </h2>
        <ul>
          {question.options.map((answer, index) => {
            return (
              <li key={answer + index}>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="questions"
                  id={`question-${index}`}
                  value={index}
                />
                <label htmlFor={`question-${index}`}>{answer}</label>
              </li>
            );
          })}
        </ul>
        <a onClick={this.props.updateCurrentQuestion} className="button">
          click me
</a>
      </div>
    );
  }
}

ReactDOM.render(<QuizContainer />, document.getElementById("root"));



