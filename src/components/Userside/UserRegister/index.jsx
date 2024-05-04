import React, { useState,useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios if you haven't already
import styles from "../styles.module.css";
import { Icon } from '@iconify/react';
import { API_BASE_URL } from '../../../config/serverApiConfig';
import { Link, useNavigate } from "react-router-dom";



function RegistrationForm() {
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate();


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const [countryValue, setCountryValue] = useState("");
  const [stateValue, setStateValue] = useState({});
  const [stateData, setStateData] = useState("");
  const [cityValue, setCityValue] = useState({});
  const [cityData, setCityData] = useState("");
  const [cityFromZip, setCityFromZip] = useState('');
  // console.log(countryValue , "fdfdg");

  // console.log(cityValue.result.sort());


// const handleInputChange1 = (event) => {
//   const { id, value } = event.target;

//   // Check if the input is ZIP code
//   if (id === 'zip' && value.length === 5 && /^\d+$/.test(value)) {
//     // Make an API request to get the city based on the ZIP code
//     axios.get(`YOUR_ZIP_TO_CITY_API_ENDPOINT/${value}`)
//       .then((response) => {
//         // Update the city based on the API response
//         setCityFromZip(response.data.city);
//       })
//       .catch((error) => {
//         console.error('Error fetching city from ZIP code:', error);
//         setCityFromZip('City Not Found'); // Set a default value in case of an error
//       });
//   }

//   // Update the form data as usual
//   setFormData((prevData) => ({
//     ...prevData,
//     [id]: value,
//   }));
// };





  const handleChange = (e) => {
    setCountryValue(e.target.value);
    // console.log(setCountryValue, "ihjhrhr");
  };
  // console.log(e, "ihjhrhr");
  // console.log(countryValue, "ihjhrhr");

  const handleStateChange = (e) => {
    // console.log("statechange");
    setStateData(e.target.value);
    // jobliststate1(e.target.value);
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 const handleLogin1 = () => {
        
        navigate('/landingpage/login');
        // window.location.reload();
    };

  useEffect(() => {

     const imageFile = localStorage.getItem("patnerImg");
  var existingImg = document.getElementById('bandingImg');

// if (!existingImg) {
//   // If it doesn't exist, create the image and append it
//   var img = document.createElement('img');
//   img.src = 'https://sb.brandingbrandz.in/uploadimage/' +imageFile;
//   img.width = 136;
//   img.height = 48;
//   img.alt = 'Star Behaviors Logo';
//   img.id = 'bandingImg'; // Set an ID to identify the image

//   var div = document.getElementById('banding');
//   div.appendChild(img);
// }

  if (!existingImg) {
  // If it doesn't exist, create the image and append it
  var img = document.createElement('img');
  var reg = localStorage.getItem("reg");
  img.src = 'https://sb.brandingbrandz.in/uploadimage/' + imageFile;
  img.width = 136;
  img.height = 48;
  img.alt = 'Star Behaviors Logo';
  img.id = 'bandingImg'; // Set an ID to identify the image

  // Create an anchor element
  var anchor = document.createElement('a');
  anchor.href = 'https://sb.brandingbrandz.in/landingpage/' + reg; // Replace with the actual URL

  // Append the image inside the anchor
  anchor.appendChild(img);

  // Get the parent div and append the anchor with the image
  var div = document.getElementById('banding');
  div.appendChild(anchor);
}


     var div1 = document.getElementById('st');
    var img = document.getElementById('imgId'); // Replace 'imgId' with the actual id of your img element.

    if (div1 && img) {
      div1.removeChild(img); // Remove the 'img' element from 'div1'.
    }

    // var log = document.getElementById('log');

    // log.remove();

    var div1 = document.getElementById('register');
    var button = document.getElementById('reg'); // Replace 'reg' with the actual id of your button element.

if (div1 && button) {
  div1.removeChild(button); // Remove the existing button element from 'div1'.

  // Create a new button element and set its attributes.
  var newButton = document.createElement('button');
  newButton.className = 'nav-link btn btn-link text-white';
  newButton.textContent = 'Login';
  newButton.addEventListener('click', handleLogin1); // Assuming handleLogin1 is a defined function.

  // Append the new button to 'div1'.
  div1.appendChild(newButton);
}

   
    const raw = JSON.stringify({
      country: countryValue,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const data = fetch(
      "https://casaahaanahotels.com/ttjstatelist",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
       
        
         setStateValue(JSON.parse(data));
      })
      .catch((error) => console.log("error", error));

    // console.log(stateValue, "statttt");
  }, [countryValue]);

  useEffect(() => {
    const raw = JSON.stringify({
      state: stateData,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const data = fetch(
      "https://casaahaanahotels.com/ttjcitylist",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        setCityValue(JSON.parse(data));


      })
      .catch((error) => console.log("error", error));
  }, [stateData]);


const joblistcity = (e) => {
 
  setCityData(e.target.value);
  const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };




  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const [lastSegment, setLastSegment] = useState('');
   useEffect(() => {
    const pathname = window.location.pathname;

    // Split the pathname by '/' to get an array of segments
    const segments = pathname.split('/');

    // Find the segment that represents the email address
    // In this case, it's the last segment
    const lastSegment = segments[segments.length - 1];

    setLastSegment(lastSegment);
  });

  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    companyid:'',

  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
  const validateForm = () => {
    const errors = {};

    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required';
    }else if (!isValidEmail(formData.emailAddress)) {
      errors.emailAddress = 'Invalid email format';
      
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.dob.trim()) {
      errors.dob = 'Date of Birth is required';
    }

    // if (!formData.phoneNumber.trim()) {
    //   errors.phoneNumber = 'Phone Number is required';
    // }

       if (formData.phoneNumber.trim().length < 12) {
      errors.phoneNumber = 'Phone Number is required';
    }

    if (!formData.street.trim()) {
      errors.street = 'Street is required';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (formData.state === '0') {
      errors.state = 'Please select a State';
    }

    if (!formData.zip.trim()) {
      errors.zip = 'Zip is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };


  const sendEmail = async () => {
  const imageFile = localStorage.getItem("patnerImg");
  const emailAddress = formData.emailAddress; // Replace with the recipient's email address

  const data = {
    personalizations: [
      {
        to: [
          {
            email: emailAddress
          }
        ],
        subject: 'Hello, World!'
      }
    ],
    from: {
      email: 'ravi.srivastav@corewebconnections.com'
    },
    content: {
      type: 'text/html',
      value: `
        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#007BFF">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                    <tr>
                        <td align="left" valign="middle" width="25%">
                            <img src="https://sb.brandingbrandz.in/${imageFile}" width="136" height="48" alt="Star Behaviors Logo">
                        </td>
                        <td align="right" width="75%">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
      `
    }
  };

  const headers = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ece3200872msh883dc0aab3fdb3cp119b28jsn32788f4df946',
    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
  };

  const options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: headers,
    data: data
  };

  try {
    const response = await axios(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const handleRegister = () => {
    const isValid = validateForm();
     const errors = {};

    if (isValid) {
      const {
        emailAddress,
        password,
        confirmPassword,
        firstName,
        lastName,
        middleName,
        dob,
        phoneNumber,
        street,
        city,
        state,
        zip,
        companyid,
      } = formData;

      const data = {
        emailaddress: emailAddress,
        driverpassword: password,
        First_Name: firstName,
        Last_Name: lastName,
        Middle_Name:middleName,
        Date_of_Birth: dob,
        Phone_Number: phoneNumber,
        Street: street,
        City: city,
        State: state,
        Zip: zip,
        companyid:lastSegment,
      };

      axios
        .post(API_BASE_URL+'/sbdriverregistrations', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {

         // console.log(response.data.Message);
        

          if (response.data.Message === 'Email address and phone number already exist') {
            errors.emailAddress = 'Email address already exists';
            errors.phoneNumber = 'Phone number already exists';
            setFormErrors(errors);
          
          }else{
          sendEmail();
          // console.log(response.data);
          window.localStorage.setItem("token1", true);
          window.localStorage.setItem('user1_data', JSON.stringify(response.data));
          window.localStorage.setItem("registrationNo", response.data.registrationNo);
          window.localStorage.setItem("userid",response.data.id);
          window.localStorage.setItem("useremail",response.data.email);
          window.location = "/landingpage/Assessment";
          }
        
        })
        .catch((error) => {
          console.error('Registration failed:', error);
        });
    } else {
      // Form validation failed
      console.error('Form validation failed');
    }
  };

  return (
    <div className={styles.main_container}>
      <div className="container">
        <div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">
          <div className="register-page">
            <div className="card">
              <h4 className="card-header text-uppercase">Register</h4>
              <div className="card-body">
                <p>* - Field is required.</p>
                <p>Login Details</p>
                <form>
                  <div className="bod">
                    <div className="form-floating mb-3">
                      <input
                        id="emailAddress"
                        className={`form-control ${formErrors.emailAddress ? 'is-invalid' : ''}`}
                        type="email"
                        placeholder="Email Address"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="emailAddress">Email Address*</label>
                      {formErrors.emailAddress && (
                        <div className="invalid-feedback">{formErrors.emailAddress}</div>
                      )}
                      <small className="text-muted px-1">jdoe@email.com</small>
                    </div>
                    <div className="input-group mb-3">
                      <div className="form-floating flex-fill">
                        <input
                          id="password"
                          className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="password">Password*</label>
                      </div>
                      <button
                        className="btn btn-outline-secondary"
                        style={{ marginLeft: '-40px', border: 'none' }}
                        type="button" onClick={handleTogglePasswordVisibility}
                      ><Icon icon={showPassword ? "oi:eye" : "oi:eye"} /></button>
                    </div>
                    {formErrors.password && (
                      <div className="invalid-feedback">{formErrors.password}</div>
                    )}

                    <div className="mb-3">
                      <div className="input-group">
                        <div className="form-floating flex-fill">
                          <input
                            id="confirmPassword"
                            className={`form-control ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="confirmPassword">
                            Confirm Password*
                          </label>
                        </div>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ marginLeft: '-40px', border: 'none' }}
                          type="button"
                          onClick={handleTogglePasswordVisibility}
                        ><Icon icon={showPassword ? "oi:eye" : "oi:eye"} /></button>
                      </div>
                      {formErrors.confirmPassword && (
                      <div className="invalid-feedback">{formErrors.confirmPassword}</div>
                    )}

                    </div>
                  </div>

                  <p>Driver Details</p>
                  <div className="bod">
                    <div className="form-floating mb-3">
                      <input
                        id="firstName"
                        className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="firstName">First Name*</label>
                      {formErrors.firstName && (
                        <div className="invalid-feedback">{formErrors.firstName}</div>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        id="middleName"
                        className="form-control"
                        placeholder="Middle Name"
                        value={formData.middleName}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="middleName">Middle Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        id="lastName"
                        className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="lastName">Last Name*</label>
                      {formErrors.lastName && (
                        <div className="invalid-feedback">{formErrors.lastName}</div>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        id="dob"
                        className={`form-control ${formErrors.dob ? 'is-invalid' : ''}`}
                        placeholder="DOB"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="dob">Date of birth</label>
                      {formErrors.dob && (
                        <div className="invalid-feedback">{formErrors.dob}</div>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                     

                    <input
                      id="phoneNumber"

                      placeholder="Phone Number"
                      data-mask="000-000-0000"
                      className={`form-control ${formErrors.phoneNumber ? 'is-invalid' : ''}`}
                      value={formData.phoneNumber}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      onChange={(e) => {
                        // Remove non-digit characters and limit to 10 digits
                        const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                        
                        // Format the phone number with hyphens for the data-mask attribute
                        const formattedValue = sanitizedValue.replace(/(\d{3})(\d{3})?(\d{4})?/, '$1-$2-$3');
                        
                        // Update the form data with the sanitized and formatted phone number
                        handleInputChange({ target: { id: 'phoneNumber', value: formattedValue } });
                      }}
                     />


                      <label htmlFor="phoneNumber">Phone Number*</label>
                      {formErrors.phoneNumber && (
                        <div className="invalid-feedback">{formErrors.phoneNumber}</div>
                      )}
                      <small className="text-muted px-1">111-222-3333</small>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="hidden"
                        readOnly
                        id="street"
                        className="form-control"
                        placeholder="Company Id"
                        value={lastSegment}
                        
                      />
                      <label htmlFor="street">Company Id*</label>
                     
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        id="street"
                        className={`form-control ${formErrors.street ? 'is-invalid' : ''}`}
                        placeholder="Street"
                        value={formData.street}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="street">Street*</label>
                      {formErrors.street && (
                        <div className="invalid-feedback">{formErrors.street}</div>
                      )}
                    </div>

                      <div className="form-floating mb-3">
                      <select
                        id="country"
                        className={`form-select mb-3 ${formErrors.country ? 'is-invalid' : ''}`}
                        value={formData.country}
                        onChange={handleChange}
                      >
                        
                         <option value="">Select Country</option><option value="US">United States</option><option value="CA">Canada</option>
                        {/* Add more states here */}
                      </select>
                      <label htmlFor="country">Country*</label>
                      {formErrors.state && (
                        <div className="invalid-feedback">{formErrors.country}</div>
                      )}
                    </div>
                   
                    <div className="form-floating mb-3">
                      <select
                        id="state"
                        className={`form-select mb-3 ${formErrors.state ? 'is-invalid' : ''}`}
                        value={formData.state}
                        onChange={handleStateChange}
                      >
                        
                         <option value="">Select State</option>
                              {stateValue.result?.map((item) => {
                                return (
                                  <option key={item} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                        {/* Add more states here */}
                      </select>
                      <label htmlFor="state">State*</label>
                      {formErrors.state && (
                        <div className="invalid-feedback">{formErrors.state}</div>
                      )}
                    </div>

             {/*  <div className="form-floating mb-3">

                      <select
                             id="city"
                              className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                            
                              value={formData.city}
                              onChange={joblistcity}
                              style={{ textTransform: 'capitalize' }}
                            >
                              <option value="">Select City</option>
                             {cityValue.result
                            ? cityValue.result
                                .slice() // Create a shallow copy of the array
                                .sort() // Sort the copied array alphabetically
                                .map((item) => (
                                  <option key={item} value={item} 
>
                                    {item}
                                  </option>
                                ))
                            : null}
                            </select>
                      <label htmlFor="city">City*</label>
                      {formErrors.city && (
                        <div className="invalid-feedback">{formErrors.city}</div>
                      )}
                    </div>*/}
                    <div className="form-floating mb-3">
                    <input
                      id="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleInputChange}
                      
                    />
                      <label htmlFor="city">City*</label>
                      {formErrors.city && (
                        <div className="invalid-feedback">{formErrors.city}</div>
                      )}
                  </div>
                    <div className="form-floating mb-3">
                      <input
                        id="zip"
                        className={`form-control ${formErrors.zip ? 'is-invalid' : ''}`}
                        type="number"
                        pattern="\d*"
                        placeholder="Zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="zip">Zip*</label>
                      {formErrors.zip && (
                        <div className="invalid-feedback">{formErrors.zip}</div>
                      )}
                    </div>
                  </div>

                  <br />

                  <div>
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="save"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                    <button className="btn btn-secondary" style={{ marginLeft: '10px' }}>Clear Form</button>
                  </div>
                </form>
              </div>
            </div>
            <ul className="nav nav-pills nav-justified mt-3">
              <li className="nav-item">
                <a
                  className="nav-link text-decoration-underline small p-2"
                  href="https://app.starbehaviors.com/StarBehaviorsPrivacyPolicy.pdf"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-decoration-underline small p-2"
                  href="https://app.starbehaviors.com/StarBehaviorsUserAgreement.pdf"
                  target="_blank"
                >
                  User Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
