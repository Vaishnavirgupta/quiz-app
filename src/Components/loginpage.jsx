import { Link } from "react-router-dom";
import "./LoginCss.css";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignUpData: [],
      userlogin: {
        email: "",
        password: "",
      },
      redirect: false,
    };
  }
  componentDidMount() {
    let getDataFromLocal = JSON.parse(localStorage.getItem("SignUp"));
    console.log(getDataFromLocal);

    this.setState({
      SignUpData: getDataFromLocal,
    });
    // console.log(this.state.loginDetails)
  }
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      userlogin: {
        ...this.state.userlogin,
        [name]: value,
      },
    });
    // console.log(this.state.userlogin);
    // console.log(this.state.SignUpData);
  };

  authorizedUser = () => {
    const { userlogin } = this.state;

    if (!userlogin.email || !userlogin.password) {
      toast.error("Please enter your email and password");
      return;
    }

    const filteredUser = this.state.SignUpData.filter(
      (e) => e.email === userlogin.email
    );

    if (
      filteredUser.length > 0 &&
      filteredUser[0].password === userlogin.password
    ) {
      // toast.success('Login successful!');
      console.log("checkeddddd");
      alert("login SuccessFul!");
      this.setState({
        redirect: true,
      });
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.authorizedUser();
    // console.log(this.state.userlogin)
    // console.log(this.state.SignUpData);
  };

  render() {
    return (
      <div>
        <div>
          <ToastContainer
            position="bottom-right"
            // autoClose={1000}
            autoCloseDelay={4000}
            // hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
            transition={Zoom}
          />
          {this.state.redirect && <Navigate to="/welcome" />}

          <section className="vh-100 gradient-custom">
            <div className=" py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    className="card bg-dark text-white"
                    style={{ "border-radius": "1rem" }}
                  >
                    <div className="card-body p-5 text-center">
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2
                          className="fw-bold mb-2 text-uppercase mb-5"
                          style={{ fontSize: "55px" }}
                        >
                          Login
                        </h2>
                        {/* <p className="text-white-50 mb-5">Please enter your email and password!</p> */}

                        <div className="form-outline form-white mb-4">
                          <input
                            type="email"
                            id="typeEmailX"
                            className="form-control form-control-lg "
                            name="email"
                            placeholder="Email"
                            onChange={this.handleInput}
                            value={this.state.userlogin.email}
                          />
                          {/* <label className="form-label" for="typeEmailX">Email</label> */}
                        </div>

                        <div className="form-outline form-white mb-5 mt-5">
                          <input
                            type="password"
                            id="typePasswordX"
                            className="form-control form-control-lg "
                            name="password"
                            placeholder="Password"
                            onChange={this.handleInput}
                            value={this.state.userlogin.password}
                          />
                          {/* <label className="form-label" for="typePasswordX">Password</label> */}
                        </div>

                        <p className="small mb-4 pb-lg-2">
                          <a className="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={this.handleLogin}
                        >
                          <b>Login</b>
                        </button>
                        {/* <div className="d-flex justify-content-center text-center mt-0 pt-0">
                          <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                          <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                          <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div> */}
                      </div>

                      <p>
                        Don't have an account?{" "}
                        <a href="/signup" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
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
