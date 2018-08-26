import React, {Fragment, Component} from "react";

import Button from "./button";

class Questions extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentQuestion: 1,
          amountOfQuestions: 3,
          questions: this.props.questions,
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
        const { history } = this.props;
    
        if (questions["q" + currentQuestion].answer === userAnswer) {
          this.setState((prevState) => {      
            return {
              correctAnswers: (prevState.correctAnswers += 1)
            }
          });
        }
    
        userAnswers.push(userAnswer);
    
        if (currentQuestion === amountOfQuestions) {
          history.push({
            pathname:"/postquiz",
            state: {
              ...this.state
            }
          })
        }
    
        this.setState((prevState) => {
          return {
            currentQuestion: (prevState.currentQuestion += 1)
          }      
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
            <Fragment>
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
                    />
            </Fragment>
        )
      }
}


export default Questions;



