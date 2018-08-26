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
    console.log("state: " + this.props.location.state.correctAnswers)
    return (
      <Fragment>
        <h1>Quiz ended</h1>
        <button onClick={this.goToQuestions}>reset</button>
      </Fragment>
    );
  }
}

export default PostQuiz;
