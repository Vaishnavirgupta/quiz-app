import React, { Component } from "react";
import questionsData from "./questions.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/fontawesome-free-solid";
import Confetti from "react-confetti";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      score: 0,
      timeLeft: 20,
      isTimerRunning: true,
      isQuizFinished: false,
      selectedAnswer: null,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const { timeLeft, currentQuestion } = this.state;

      if (timeLeft > 0) {
        this.setState({ timeLeft: timeLeft - 1 });
      } else {
        this.handleAnswerSubmit(null);
      }
    }, 1000);
  };

  handleAnswerSubmit = (answer) => {
    const { currentQuestion, score, isQuizFinished } = this.state;

    if (answer === questionsData[currentQuestion].correctAnswer) {
      this.setState({ score: score + 1 });
    }

    if (currentQuestion === questionsData.length - 1) {
      this.setState({ isQuizFinished: true });
    } else {
      this.setState({
        currentQuestion: currentQuestion + 1,
        timeLeft: 20,
        selectedAnswer: null,
      });
    }
  };

  handleAnswerSelect = (answer) => {
    this.setState({ selectedAnswer: answer });
  };

  handleNextQuestion = () => {
    const { currentQuestion } = this.state;

    this.setState({
      currentQuestion: currentQuestion + 1,
      timeLeft: 20,
      selectedAnswer: null,
    });
  };

  renderQuiz = () => {
    const { currentQuestion, timeLeft, selectedAnswer } = this.state;
    const question = questionsData[currentQuestion];

    if (!question) {
      return null;
    }

    return (
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <div className="">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-3">
              <h2>{question.question}</h2>
              <div className="timer-">
                <FontAwesomeIcon icon={faClock} spin />
                <span className="timer">{timeLeft}s</span>
              </div>
              <div className="options-container" style={{ textAlign: "left" }}>
                {question.answers.map((answer, index) => (
                  <div className="option" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer"
                      value={answer}
                      checked={selectedAnswer === answer}
                      onChange={() => this.handleAnswerSelect(answer)}
                    />
                    <label className="px-lg-2">{answer}</label>
                  </div>
                ))}
              </div>
              <div className="btn-">
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleAnswerSubmit(selectedAnswer)}
                >
                  Submit
                </button>
                {currentQuestion < questionsData.length - 1 && (
                  <button
                    className="btn btn-primary"
                    onClick={this.handleNextQuestion}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  renderResult = () => {
    const { score } = this.state;
    const isPassed = score > 6;

    return (
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <div className="">
          {isPassed && <Confetti />}
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-3 text-center">
              <h1>Quiz Finished!</h1>
              <h3>{isPassed ? "Well Played" : "Try Again"}</h3>
              {isPassed ? (
                <img
                  className="image"
                  src="https://www.talentproindia.com/wp-content/uploads/2019/05/staffing-img8-1-300x278-300x278.png"
                  alt="Success"
                />
              ) : (
                <img
                  src="https://media.tenor.com/1z6kPxGgBu4AAAAC/tonton.gif"
                  alt="Failure"
                />
              )}
              <div className="score-">
                <h2>Your score is: {score}/10</h2>
                <h3>You earned {score} Rewards.</h3>
                <Link to="/instruction">
                  <button
                    className="btn btn-primary play-again-button"
                    value="Play Again"
                  >
                    Play Again
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const { isQuizFinished } = this.state;

    return (
      <div className="container-box">
        {isQuizFinished ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default Quiz;
