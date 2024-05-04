import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles.module.css";
import { Icon } from '@iconify/react';
import { API_BASE_URL } from '../../../config/serverApiConfig';

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			const url = API_BASE_URL+"/sbdriverlogin";
			const { data: res } = await axios.post(url, data);
			if (res.user_login) {
				window.localStorage.setItem("token1", res.user_login);
				window.localStorage.setItem('user1_data', JSON.stringify(res.user_data[0]));
				window.localStorage.setItem("registrationNo", res.user_data[0].registrationNo);
        window.localStorage.setItem("userid",res.user_data[0].id);
        window.localStorage.setItem("useremail",res.user_data[0].EmailAddress)
        
				// window.localStorage.setItem("admin_type", res.user_data[0].admin_type);
				window.location = "/landingpage/Assessment";
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


  useEffect(() => {
   // localStorage.removeItem("token");
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

  });


	return (
		<>
			<div className="container">
				<div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">
					<div className="admin-login-page">
						<div className="card">
							<h4 className="card-header text-uppercase">User Login</h4>
							<div className="card-body">
								<form onSubmit={handleSubmit}>
									<div className="form-floating mb-3">
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
                    <label htmlFor="emailAddress">Email Address</label>
                  </div>
                  <div className="input-group mb-3">
                    <div className="form-floating flex-fill">
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
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleTogglePasswordVisibility}
                    >
                      <Icon icon={showPassword ? "oi:eye" : "oi:eye"} />
                    </button>
                  </div>
                  <div>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
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
    </>
  );
};

export default Login;
