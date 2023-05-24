import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        contact: "",
        password: "",
        cpassword: "",
      },
      userDetails: [],
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
    console.log(this.state.user);
  };
  addSuccess = () =>
    toast.success(" Registration Successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  FailPassMatch = () =>
    toast.error("Passwords Not Match!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  AlreadyRegistered = () =>
    toast.error("Already Registered!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  EmptyFields = () =>
    toast.error("ALL Fields Required!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  // componentDidMount() {
  //   let getDataFromLocal = JSON.parse(localStorage.getItem("SignUp"));
  //   this.setState({ userDetails: getDataFromLocal });
  // }
  componentDidMount() {
    let getDataFromLocal = JSON.parse(localStorage.getItem("SignUp"));
    if (getDataFromLocal) {
      this.setState({ userDetails: getDataFromLocal });
    }
  }

  handleSignUp = (e) => {
    e.preventDefault();
    const { userDetails, user } = this.state;
    if (
      user.fname === "" &&
      user.lname === "" &&
      user.email === "" &&
      user.contact === "" &&
      user.password === "" &&
      user.cpassword === ""
    ) {
      this.EmptyFields();
      return false;
    }

    const EmailExists = userDetails.some((u) => u.email == user.email);
    if (EmailExists) {
      // alert("This Email has already been SignUped!");
      this.AlreadyRegistered();
      this.setState({
        user: {
          fname: "",
          lname: "",
          email: "",
          contact: "",
          password: "",
          cpassword: "",
        },
      });
      return;
    }
    if (user.password !== user.cpassword) {
      // alert("Passwords do not match!");
      this.FailPassMatch();
      this.setState({
        user: {
          ...user,
          password: "",
          cpassword: "",
        },
      });
      return;
    }
    this.setState({
      userDetails: [...userDetails, user],
      user: {
        fname: "",
        lname: "",
        email: "",
        contact: "",
        password: "",
        cpassword: "",
      },
    });
    console.log(user);
    userDetails.push(user);
    console.log(userDetails);
    let setDataLocal = JSON.stringify(userDetails);
    localStorage.setItem("SignUp", setDataLocal);
    console.log(setDataLocal);
    this.addSuccess();
    console.log(this.state.userDetails);
  };

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          // autoClose={1000}
          autoCloseDelay={4000}
          // hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={true}
          pauseOnHover={false}
          theme="dark"
          transition={Bounce}
        />

        <div>
          <section className="vh-100 gradient-custom">
            <div className=" py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div
                    className="card shadow-2-strong card-registration bg-dark text-white"
                    style={{ "border-radius": "15px;" }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3
                        className="mb-4 pb-2 pb-md-0 mb-md-5 "
                        style={{ fontSize: "55px" }}
                      >
                        SIGN UP{" "}
                      </h3>
                      <form>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="firstName"
                                class="form-control form-control-lg"
                                name="fname"
                                placeholder="First Name"
                                value={this.state.user.fname}
                                onChange={this.handleInput}
                              />
                              {/* <label class="form-label" for="firstName" >First Name</label> */}
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="lastName"
                                class="form-control form-control-lg"
                                name="lname"
                                placeholder="Last Name"
                                value={this.state.user.lname}
                                onChange={this.handleInput}
                              />
                              {/* <label class="form-label" for="lastName">Last Name</label> */}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              className="form-control form-control-lg mt-4  "
                              name="email"
                              placeholder="Email"
                              value={this.state.user.email}
                              onChange={this.handleInput}
                            />
                            {/* <label className="form-label" for="emailAddress">Email</label> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="phoneNumber"
                              className="form-control form-control-lg mt-5"
                              name="contact"
                              placeholder="Phone Number"
                              value={this.state.user.contact}
                              onChange={this.handleInput}
                            />
                            {/* <label className="form-label" for="phoneNumber">Phone Number</label> */}
                          </div>
                        </div>
                        <div className="row">
                          <div class="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg mt-5"
                                name="password"
                                placeholder="Password"
                                value={this.state.user.password}
                                onChange={this.handleInput}
                              />
                              {/* <label className="form-label" for="password">Password</label> */}
                            </div>
                          </div>

                          <div class="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="cpassword"
                                className="form-control form-control-lg mt-5"
                                name="cpassword"
                                placeholder="Confirm Password"
                                value={this.state.user.cpassword}
                                onChange={this.handleInput}
                              />
                              {/* <label className="form-label" for="password">Password</label> */}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-2">
                          <Link to="/login">
                            {" "}
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg mt-3"
                              value="Sign Up"
                              onClick={this.handleSignUp}
                            >
                              Sign Up
                            </button>
                          </Link>
                        </div>
                        <div>
                          <p className="mt-3 pt-3">
                            Already have an account?{" "}
                            <a href="/login" className="text-white-50 fw-bold">
                              Login{" "}
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
