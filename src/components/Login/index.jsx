import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';
import { API_BASE_URL } from '../../config/serverApiConfig';

const Login = () => {
  const [data, setData] = useState({ user: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  // useEffect(() => {
  //   localStorage.removeItem("token1");
  // }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // console.log(data.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const url = API_BASE_URL + "/sbuserlogin";
      const { data: res } = await axios.post(url, data);
      if (res.user_login) {
        window.localStorage.setItem("token", res.user_login);
        window.localStorage.setItem('user_data', JSON.stringify(res.user_data[0]));
        window.localStorage.setItem("adminid", res.user_data[0].adminid);
        window.localStorage.setItem("admin_type", res.user_data[0].admin_type);
        window.localStorage.setItem("adminemail", res.user_data[0].adminemail);
        window.location = "/partners";
      } else {
        setError(res.Message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    document.addEventListener('DOMContentLoaded', function () {
      var navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
          var tabId = this.getAttribute('href');

          // Remove 'active' class from all nav links
          navLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
          });

          // Remove 'show' and 'active' classes from all tab panes
          var tabPanes = document.querySelectorAll('.tab-pane');
          tabPanes.forEach(function (tabPane) {
            tabPane.classList.remove('show', 'active');
          });

          // Add 'active' class to the clicked nav link
          this.classList.add('active');

          // Add 'show' and 'active' classes to the corresponding tab pane
          document.querySelector(tabId).classList.add('show', 'active');
        });
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        var tabId = this.getAttribute('href');

        // Remove 'active' class from all nav links
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('active');
        });

        // Remove 'show' and 'active' classes from all tab panes
        var tabPanes = document.querySelectorAll('.tab-pane');
        tabPanes.forEach(function (tabPane) {
          tabPane.classList.remove('show', 'active');
        });

        // Add 'active' class to the clicked nav link
        this.classList.add('active');

        // Add 'show' and 'active' classes to the corresponding tab pane
        document.querySelector(tabId).classList.add('show', 'active');
      });
    });
  });

  return (
    <>
      <section className="login-sec p-4">
        <div className="container">
          <div className="row sign-in">
            <div className="col-md-6 p-0">
              <img src="http://bcom.b2b.pierofcloudtech.com/images/login-img.png" alt="imgs" srcset="" className="h-100" />
            </div>

            <div className="col-md-6">
              <div className="padding-x">
                <div className="heading-img py-2 d-flex justify-content-center">
                  <img src="http://bcom.b2b.pierofcloudtech.com/images/logo.png" alt="" srcset="" />
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
                          <form onSubmit={handleSubmit}>
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
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                              <span>Remember Login ID</span>
                            </div>
                            <div>
                              {error && <div className={styles.error_msg}>{error}</div>}
                              <button type="submit" className="btn btn-primary">
                                Sign In
                              </button>
                            </div>

                            <div className="subscription-div pt-3">
                              <span className="black-color">Subscribe to our newsletter & stay updated</span>
                              <div className="span position-relative">
                              <input type="email" name="" id="" placeholder="Enter your email address" className="form-control mt-2"/>
                              <button type="button" value="" className="subscription-submit" >
                                <img src="http://bcom.b2b.pierofcloudtech.com/assets/img/send-arrow.svg" alt="" srcset="" />
                              </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="navs-top-profile" role="tabpanel">
                      <p>
                        Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream. Gummies
                        halvah
                        tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake.
                      </p>
                      <p className="mb-0">
                        Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton candy
                        liquorice caramels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
    </>
  );
};

export default Login;
