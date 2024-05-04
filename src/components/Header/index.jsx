import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
 

    return (
        <>
            <header>
                <div className="headerMini">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-lg-6 col-md-6 d-flex">
                                <div className="switchLanguage">
                                    <div className="language-menu">
                                        <div className="select-wrapper position-relative">
                                            <select name="picklanguage" className="select">
                                                <option selected="">English</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                            <FontAwesomeIcon icon={faAngleDown } />
                                        </div>
                                    </div>
                                </div>
                                <div className="switchTheme ms-2">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label text-light" for="flexSwitchCheckChecked">DARK</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-6 col-md-6">
                                <div className="topLinks">
                                    <ul>
                                        <li className="hide_mobile"> <a href="#">My Wallet</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Contact Sales</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Support</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Bank Details</a>  </li>
                                        <li> <a href="#">
                                            <span className="notification">                                            <FontAwesomeIcon icon={faBell } />

                                                <span name="notification" className="nc">12
                                                </span></span></a>

                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

                <div className="headerMain">
    <div className="navbar_lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-6 col-lg-2">
            <a className="navbar_brand" href="/login">

              <img className="img-fluid" src="/imgs/logo.png"/>

            </a>
          </div>
          <div className="col-6 col-md-6 col-lg-10">
            <a id="mobileBtn" className="navbar_toogle show_mobile">
              <i className="fa-solid fa-bars fa-xmark"></i>
            </a>
            <div className="navbar_collapse hide_mobile">
              <div className="row align-items-center ms-lg-auto">   
                <ul className="nav_links">
                  <li className="nav_item"> 
                    <div className="dropdown show">
                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuSetting" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Settings
                      </a>
  
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuSetting">
                        <a className="dropdown-item" href="#">Organization</a>
                        <a className="dropdown-item" href="#">Flight</a>
                        <a className="dropdown-item" href="#">Hotel</a>
                      </div>
                    </div>

                  
                  
                  
                  
                  </li>
                  
                  <li className="nav_item"> 
                    <div className="dropdown show">
                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuOPS" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      OPS
                      </a>
  
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuOPS">
                        <a className="dropdown-item" href="#">Flight Search</a>
                        <a className="dropdown-item" href="#">Flight Bookings</a>
                        <a className="dropdown-item" href="#">Flight Sales Report</a>
                      </div>
                    </div>

                  
                  
                  
                  
                  </li>
                  
                  <li className="nav_item"> 
                    <div className="dropdown show">
                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuManagement" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      User Management
                      </a>
  
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuManagement">
                        <a className="dropdown-item" href="#">Create User</a>
                        <a className="dropdown-item" href="#">Create Role</a>
                        <a className="dropdown-item" href="#">Change Password</a>
                      </div>
                    </div>

                  
                  
                  
                  
                  </li>

                  <li className="nav_item"> 
                    <div className="dropdown show">
                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuFin" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Fin
                      </a>
  
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuFin">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another Action</a>
                        <a className="dropdown-item" href="#">Something else</a>
                      </div>
                    </div>

                  
                  
                  
                  
                  </li>


                  <li className="nav_item ms-3"> 
                    <button onclick="location.href='login.html';" className="loginbtn"> 
                      <img className="userpic" src="/imgs/user.jpg" alt="user" /> 
                      <FontAwesomeIcon icon={faSignOutAlt} />
 Sign Out
                    </button> 
                    </li>
                                      



                  </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <style jsx>{`
                .dropdown-menu {
                    display: none;
                }
                .dropdown.show:hover 
 .dropdown-menu {
    display: block!important;
}
            `}</style>    </header>

        </>
    );
};

export default Header;
