import React from "react";

import Button from "./button";

export class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.quizQuestions,
      userAnswer: null
    };
  }

  handleChange(event) {
    // const { questions } = this.state
    // const answer = questions["q" + this.props.currentQuestion].answer
    this.setState({
      userAnswer: event.target.value
    });
  }

  componentWillMount() {
    console.log("willmount:" + this.state.userAnswer);
  }

  componentDidMount() {
    console.log("did mount:" + this.state.userAnswer);
  }

  componentDidUpdate() {
    console.log("did update:" + this.state.userAnswer);
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
          updateCurrentQuestion={this.props.updateCurrentQuestion}
          buttonText="Next.js"
        />
      </div>
    );
  }
}
