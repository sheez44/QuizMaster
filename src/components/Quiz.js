import React, { Component } from "react";

import Button from "./button";
import { quizQuestions } from "../quiz";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 1,
      amountOfQuestions: 3,
      questions: quizQuestions,
      userAnswer: null,
      userAnswers: [],
      correctAnswers: 0,
      buttonDisabled: true
    };
  }

  updateCurrentQuestion = () => {
    const {
      currentQuestion,
      amountOfQuestions,
      questions,
      userAnswer
    } = this.state;
    const { history } = this.props;

    this.setState((prevState) => {      
      return {
        correctAnswers: questions["q" + currentQuestion].answer === userAnswer ? (prevState.correctAnswers += 1) : prevState.correctAnswers,
        currentQuestion: (prevState.currentQuestion += 1),
        buttonDisabled: true,
        userAnswers: [...prevState.userAnswers, userAnswer]
      }
    });

    if (currentQuestion === amountOfQuestions) {
      history.push({
        pathname:"/postquiz",
        state: {
          ...this.state
        }
      })
    }
  };

  resetQuestions = () => {
    this.setState({
      currentQuestion: 1
    });
  };

  handleChange(event) {
    this.setState({
      userAnswer: event.target.value,
      buttonDisabled: false
    });
  }

  render() {
    const { currentQuestion, questions } = this.state;
    const question = questions["q" + currentQuestion];

    return (
      <section className="quiz-container">
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
      </section>
    );
  }
}

export default Quiz;
