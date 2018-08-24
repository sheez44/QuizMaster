import React from "react";

import Button from "./button";
import { quizQuestions } from "../quiz";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 1,
      amountOfQuestions: this.props.amountOfQuestions,
      questions: quizQuestions,
      userAnswer: null,
      userAnswers: [],
      correctAnswers: 0
    };
  }

  updateCurrentQuestion = () => {
    const {
      currentQuestion,
      amountOfQuestions,
      questions,
      userAnswers,
      userAnswer
    } = this.state;
    const { setGamestate } = this.props;

    if (questions["q" + currentQuestion].answer === userAnswer) {
      this.setState({
        correctAnswers: (this.state.correctAnswers += 1)
      });
    }

    userAnswers.push(userAnswer);

    console.log(this.state.correctAnswers, userAnswers);

    if (currentQuestion === amountOfQuestions) {
      setGamestate("postQuiz");
    }

    this.setState({
      currentQuestion: (this.state.currentQuestion += 1)
    });
  };

  resetQuestions = () => {
    this.setState({
      currentQuestion: 1
    });
  };

  handleChange(event) {
    this.setState({
      userAnswer: event.target.value
    });
  }

  render() {
    const { currentQuestion, questions } = this.state;
    const question = questions["q" + currentQuestion];

    return (
      <div>
        <h2>
          {`Question ${currentQuestion}: `}
          {questions["q" + currentQuestion].question}
        </h2>
        <ul>
          {question.options.map((answer, index) => {
            return (
              <li key={answer + index}>
                <input
                  onChange={event => this.handleChange(event)}
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
        <Button
          onClick={this.updateCurrentQuestion}
          buttonText="Next.js"
          disabled={this.state.buttonDisabled}
        />
      </div>
    );
  }
}
