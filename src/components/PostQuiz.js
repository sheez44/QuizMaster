import React from "react";

export class PostQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Quiz ended</h1>
        <a href="#" onClick={this.resetQuestions}>
          reset
        </a>
      </React.Fragment>
    );
  }
}
