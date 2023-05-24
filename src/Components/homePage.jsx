import React from "react";
import { Link } from "react-router-dom";
import "./HomepageCss.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="container">
        <h1 className="heading">Quiz App</h1>
        <img
          src="https://img.freepik.com/free-vector/purple-background-with-quiz-word-colorful-people_52683-126.jpg?size=626&ext=jpg&ga=GA1.2.1396688187.1655796075&semt=ais"
          alt="Quiz Background"
          className="quiz-image"
        />
        <div className="button-container">
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
