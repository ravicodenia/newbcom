import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import { API_BASE_URL } from '../../config/serverApiConfig';
import OTPverification from "./otpVerification";
import Footer from "../footer/index";



const Login = () => {
  const [data, setData] = useState({ user: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  

  document.addEventListener("DOMContentLoaded", function() {
    var signinBtn = document.getElementById("signin");
    signinBtn.addEventListener("click", function() {
        document.querySelector(".nav-align-top").style.display = "none";
        document.querySelector(".otpverification").style.display = "block";
    });
});

  return (
    <>
      <section className="login-sec p-4">
        <div className="container">
          <div className="row sign-in">
            <div className="col-md-6 p-0">
              <img src="/imgs/login-img.png" alt="imgs" srcset="" className="h-100" />
            </div>

            <div className="col-md-6">
              <div className="padding-x">
                <div className="heading-img py-2 d-flex justify-content-center">
                  <img src="/imgs/logo.png" alt="" srcset="" />
                </div>
                <hr />

                <div className="nav-align-top">
                  <ul className="nav nav-tabs d-flex justify-content-center pb-4 border-0" role="tablist">
                    <li className="nav-item">
                      <a href="#navs-top-home" className="nav-link active" role="tab" aria-selected="true">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a href="#navs-top-profile" className="nav-link" role="tab" aria-selected="false">New Agent<br /> Register</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                      <div className="admin-login-page w-100">
                        <div className="card-body">
                          <h4 className="pb-2 text-center">Welcome back</h4>
                          <form >
                            <div className="form-floating mb-3">
                              <div className="label-top black-color">
                                Email Address / Login ID
                              </div>
                              <input
                                id="emailAddress"
                                className="form-control"
                                type="email"
                                name="user"
                                onChange={handleChange}
                                value={data.user}
                                required
                                placeholder="Email Address"
                              />
                              <label htmlFor="emailAddress">Enter your email address or Login ID</label>
                            </div>
                            <div className="input-group mb-3">
                              <div className="form-floating flex-fill">
                                <div className="label-top d-flex justify-content-between">
                                  <span className="black-color">
                                    Password</span>
                                  <a href="#" >Forgot Password?</a>
                                </div>
                                <input
                                  id="password"
                                  className="form-control"
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  onChange={handleChange}
                                  value={data.password}
                                  required
                                  placeholder="Password"
                                />
                                <label htmlFor="password">Enter your passowrd</label>
                              </div>

                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                              >
                                <Icon icon={showPassword ? "oi:eye" : "oi:eye"} />
                              </button>
                            </div>
                            <div className="form-check form-switch d-flex gap-2">
                              <input className="form-check-input" type="checkbox" required role="switch" id="flexSwitchCheckDefault" />
                              <span>Remember Login ID</span>
                            </div>

                  
                            <div>
                              <a href="#" className="btn btn-primary py-2" id="signin">
                                Sign In
                              </a>
                            </div>

                            <div className="subscription-div pt-3">
                              <span className="black-color">Subscribe to our newsletter & stay updated</span>
                              <div className="span position-relative">
                                <input type="email" name="" id="" placeholder="Enter your email address" className="form-control mt-2" />
                                <button type="button" value="" className="subscription-submit" >
                                  <img src="/imgs/send-arrow.svg" alt="" srcset="" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="navs-top-profile" role="tabpanel">

                     Create New Account
                    </div>
                  </div>
                </div>

                < OTPverification/>
              </div>
            </div>
          </div>


        </div>

      </section>
      <Footer />
    </>
  );
};

export default Login;
