import React, { Component, Fragment } from "react";

class PostQuiz extends Component {
  // constructor(props) {
  //   super(props);
  // }

  goToQuestions = () => {
    const { history } = this.props
   
    history.push("/")
  }

  render() {
    const { correctAnswers, amountOfQuestions } = this.props.location.state
    let performanceMessage, color

    switch(correctAnswers) {
      case 0 :
      case 1 : {
        performanceMessage = "Shame, atonement is upon you!"
        color = "red"
        break;
      }
      case 2: {
        performanceMessage = "well done!"
        color = "blue"
        break;
      }
      case 3: {
        performanceMessage = "superB!"
        color = "green"
        break;
      }
      default: {
        performanceMessage = "error, bad programming"
        color = "deeppink"
      }
    }

    return (
      <div className="postquiz">
        <h1>Quiz ended</h1>
        <p>You answered {correctAnswers} out of {amountOfQuestions} question{correctAnswers === 1 ? '' : '(s)'} correctly</p>
        <p style={{color}}>{performanceMessage}</p>

        <button onClick={this.goToQuestions}>reset</button>
      </div>
    );
  }
}

export default PostQuiz;
