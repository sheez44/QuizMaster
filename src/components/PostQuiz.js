import React, { Component, Fragment } from "react";

class PostQuiz extends Component {
  constructor(props) {
    super(props);
  }

  goToQuestions = () => {
    const { history } = this.props
   
    history.push("/")
  }

  render() {
    const { correctAnswers, amountOfQuestions } = this.props.location.state
    let performanceMessage

    switch(correctAnswers) {
      case 0 :
      case 1 : {
        performanceMessage = "poor performance"
        break;
      }
      case 2: {
        performanceMessage = "well done!"
        break;
      }
      case 3: {
        performanceMessage = "superB!"
        break;
      }
      default: {
        performanceMessage = "error, bad programming"
      }
    }

    return (
      <Fragment>
        <h1>Quiz ended</h1>
        <p>You answered {correctAnswers} question{correctAnswers === 1 ? '' : '(s)'} out of {amountOfQuestions} correctly</p>
        <p>{performanceMessage}</p>

        <button onClick={this.goToQuestions}>reset</button>
      </Fragment>
    );
  }
}

export default PostQuiz;
