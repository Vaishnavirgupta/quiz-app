import React, { Component } from "react";
import "./WelcomeCss.css";
import { Link } from "react-router-dom";
export default class Welcomepage extends Component {
  render() {
    return (
      <center>
        <div>
          <section className="vh-100 gradient-custom">
            <div className=" py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    className="card bg-dark text-white"
                    style={{ "border-radius": "1rem" }}
                  >
                    <div className="card-body p-5 text-center">
                      {/* <div className='Container mt-sm-5 my-1'> */}
                      <div className=" mt-sm-4">
                        <h1>Welcome </h1>
                      </div>
                      <img
                        className="img mt-sm-4"
                        src="https://img.freepik.com/premium-vector/multiple-choice-quiz-template_515038-13857.jpg?size=626&ext=jpg&ga=GA1.2.1396688187.1655796075&semt=ais"
                      ></img>
                      <div className=" mt-5">
                        <Link to="/instruction">
                          {" "}
                          <button className="btn btn-primary" value="">
                            Read the Instructions for Quiz
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </center>
    );
  }
}
