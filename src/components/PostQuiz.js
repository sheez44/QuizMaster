import React from "react";

export class PostQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Quiz ended</h1>
        <a href="#" onClick={this.resetQuestions}>
          reset
        </a>
      </div>
    );
  }
}
