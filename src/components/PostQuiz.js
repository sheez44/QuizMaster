import React, { Component, Fragment } from "react";

class PostQuiz extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Quiz ended</h1>
        <button onClick={this.resetQuestions}>reset</button>
      </Fragment>
    );
  }
}

export default PostQuiz;
