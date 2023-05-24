import React, { Component } from "react";
import "./InsCss.css";
import { Link } from "react-router-dom";
class InstructionPage extends Component {
  render() {
    return (
      <div className="ins">
        <div class="quiz-instructions">
          <section className="vh-100">
            <div className="mask d-flex align-items-center h-50">
              <div className=" h-50 ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6"></div>
                  <div
                    className="card bg-dark text-white"
                    id="icard"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body p-3 text-center ">
                      <h2>Quiz Instructions</h2>
                      <p>
                        Welcome to the quiz! Please read the following
                        instructions carefully:
                      </p>
                      <ul style={{ textAlign: "left" }}>
                        <li>
                          You will have 20 seconds to answer each question.
                        </li>
                        <li>There are 10 multiple-choice questions.</li>
                        <li>
                          Each question has 4 options, out of which only one is
                          correct.
                        </li>
                        <li>
                          To select an answer, click on the radio button next to
                          the option.
                        </li>
                        <li>
                          You cannot change your answer once it has been
                          selected.
                        </li>
                        <li>
                          There are no option for go back to Previous Questions.
                        </li>
                        <li>
                          Make sure to click the "Submit & Next" button after
                          select the answer of the Question.{" "}
                        </li>
                        <li>
                          Make sure to click the "Submit" button at the end of
                          the quiz.
                        </li>
                        <li>
                          Your score will be displayed immediately after you
                          submit the quiz.
                        </li>
                        <li>
                          Your score will be converted into Rewards
                          1Score=1Reward.
                        </li>
                      </ul>
                      <center className="mt-5">
                        <Link to="/quiz">
                          <button className="btn btn-primary" value="">
                            Let's Play the Quiz!
                          </button>
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default InstructionPage;
