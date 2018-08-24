import React from "react";
import ReactDOM from "react-dom";

import { Quiz } from "./components/Quiz";
import { PostQuiz } from "./components/PostQuiz";

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: "quiz"
    };
  }

  setGamestate = state => {
    this.setState({
      gameState: state
    });
  };

  render() {
    const { gameState } = this.state;

    return (
      <div>
        {(() => {
          switch (gameState) {
            case "login":
              return null;

            case "quiz":
              return (
                <Quiz
                  setGamestate={this.setGamestate}
                  amountOfQuestions={this.props.amountOfQuestions}
                />
              );

            case "postQuiz":
              return <PostQuiz />;

            default:
              return null;
          }
        })()}
      </div>
    );
  }
}

ReactDOM.render(
  <QuizContainer amountOfQuestions={3} />,
  document.getElementById("root")
);
