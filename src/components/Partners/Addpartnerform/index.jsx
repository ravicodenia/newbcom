import React, { Component,useState, useEffect  } from 'react';
import styles from "../styles.module.css";
import { FaRemoveFormat } from 'react-icons/fa';
import { Icon } from '@iconify/react';

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_BASE_URL } from '../../../config/serverApiConfig';

import axios from 'axios';


function PartnerAdminForm() {

  function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 991a0e15ea25453');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

  const clearForm = () => {
    setCompanyName('');
    setFName('');
    setLName('');
    setContactPhone('');
    setContactEmail('');
    setPassword('');
    setImageFile(null); // Reset image file to null
    setImageUrl(null);   // Reset image URL to null
    setSiteUrl('');
    setAssessmentRecipient([]);
    setLandingPageHeader('');
    setLandingPageMainContent('');
    setLandingPageOffering([]);
    setLandingPageCallToAction('');
    setFormErrors({}); // Clear form validation errors
    setErrorMessage(''); // Clear any error message
  };

   const [editorState, setEditorState] = useState(
    EditorState.createEmpty() // or set an initial EditorState
  );

  const handleBlur = () => {
    
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);
    const cleanedHtml = DOMPurify.sanitize(htmlContent);
     const job_description = cleanedHtml.split('/n').join('').split('"').join("'");

    setLandingPageMainContent(job_description)


  };


  const [companyName, setCompanyName] = useState('');
  const [admin_first_name, setFName] = useState('');
  const [admin_last_name, setLName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [adminemail, setContactEmail] = useState('');
  const [admin_password, setPassword] = useState('');
  // const [imageFile, setImageFile] = useState('');
  const [admin_site_url, setSiteUrl] = useState('');
  const [assessmentRecipient, setAssessmentRecipient] = useState([]);
  const [adminpageheader, setLandingPageHeader] = useState('');
  const [adminpagecontent, setLandingPageMainContent] = useState('');
  const [adminemailadminpageoffers, setLandingPageOffering] = useState([]);
  const [adminpagecta, setLandingPageCallToAction] = useState('');
  const adminemails = adminemail;
  const admin_type = '2';

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const htmlContent = draftToHtml(rawContentState);
  const cleanedHtml = DOMPurify.sanitize(htmlContent);
  const job_description = cleanedHtml.split('/n').join('').split('"').join("'");
  // const [adminpagecontent, setLandingPageMainContent] = useState(job_description);

  // 



 const [formErrors, setFormErrors] = useState({});


 const [imageFile, setImageFile] = useState(null);
 const [imageUrl, setImageUrl] = useState(null);



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Set the selected image file in state
    setImageFile(selectedFile.name);

    // Display a preview of the selected image
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
     if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('https://sb.brandingbrandz.in/uploadimage.php', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log('Image uploaded successfully');
          } else {
            console.error('Image upload failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  
const handleAddRecipient = () => {
    const data = document.getElementById('assessmentRecipient').value;
    if(data.trim() === ''){
      alert('At least one Recipient is required');

    }else if (!isValidEmail(data)) {
     alert('Invalid email format');
   }else{
       setAssessmentRecipient([...assessmentRecipient, data]);
       document.getElementById('assessmentRecipient').value = '';
    }
   
  };


  const handleRemoveRecipient = (index) => {
    const updatedRecipients = [...assessmentRecipient];
    updatedRecipients.splice(index, 1);
    setAssessmentRecipient(updatedRecipients);
  };

  const handleAddOffering = () => {
    const data = document.getElementById('landingPageOffering').value;
    if(data.trim() === ''){
      alert('At least one Offering is required');

    }else{
      setLandingPageOffering([...adminemailadminpageoffers, data]);
    document.getElementById('landingPageOffering').value = '';
    }
    
  };

  const handleRemoveOffering = (index) => {
    const updatedOfferings = [...adminemailadminpageoffers];
    updatedOfferings.splice(index, 1);
    setLandingPageOffering(updatedOfferings);
  };
  const [errorMessage, setErrorMessage] = useState('');
function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}


 
const validateForm = () => {
      const errors = {};

if (companyName.trim() === '') {
  errors.companyName = 'Company Name is required';
}

if (admin_first_name.trim() === '') {
  errors.admin_first_name = 'First Name is required';
}

if (admin_last_name.trim() === '') {
  errors.admin_last_name = 'Last Name is required';
}

if (contactPhone.trim() === '') {
  errors.contactPhone = 'Contact Phone is required';
}

if (adminemail.trim() === '') {
  errors.adminemail = 'Contact Email is required';
} else if (!isValidEmail(adminemail)) {
  errors.adminemail = 'Invalid email format';
}

if (admin_password.trim() === '') {
  errors.admin_password = 'Password is required';
}

if (imageFile === null) {
  errors.imageFile = 'Image is required';
}

if (admin_site_url.trim() === '') {
  errors.admin_site_url = 'Site URL is required';
}

if (adminemailadminpageoffers.length === 0) {
  errors.adminemailadminpageoffers = 'At least one Offering is required';
}

if (adminpageheader.trim() === '') {
  errors.adminpageheader = 'Landing Page Header is required';
}

if (adminpagecontent.trim() === '') {
  errors.adminpagecontent = 'Landing Page Main Content is required';
}

if (assessmentRecipient.length === 0) {
  errors.assessmentRecipient = 'At least one Recipient is required';
}

if (adminpagecta.trim() === '') {
  errors.adminpagecta = 'Call to Action is required';
}
setFormErrors(errors);

    return Object.keys(errors).length === 0;

    };

    const [sussMessage, setsussMessage] = useState();

  const handleSave = () => {

     const isValid = validateForm();

    if (isValid) {


    // Prepare your data to be sent to the server here
    const dataToSend = {
      companyName,
      admin_first_name,
      admin_last_name,
      contactPhone,
      admin_password,
      adminemail,
      imageFile,
      adminemails,
      admin_type,
      admin_site_url,
      assessmentRecipient,
      adminpageheader,
      adminpagecontent,
      adminemailadminpageoffers,
      adminpagecta,
    };

      fetch(API_BASE_URL+'/sb_addeditcompanyuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Make your AJAX request here
    // Use fetch or Axios to send the data to the server

    console.log(dataToSend);
    setsussMessage("Company Added successfully");

    sendEmail();

      // document.getElementById('mydata').reset();
    setTimeout(() => {
          // Assuming you have a function to handle the redirection
          redirectToHomePage();
        }, 2000);
    const timeoutId = setTimeout(() => {
       clearForm(); 
    }, 2000);
    }else {
      // Form validation failed
      console.error('Form validation failed');
    }
  };

 const redirectToHomePage = () => {
  // Use JavaScript to navigate to the homepage
  window.location.href = '/partners'; // Replace '/home' with the actual URL of your homepage
};




const sendEmail = async () => {
  const data = {
    personalizations: [
      {
        to: [
          {
            email: adminemail
          }
        ],
        subject: 'Hello, World!'
      }
    ],
    from: {
      email: 'ravi.srivastav@corewebconnections.com'
    },
   content: [
      {
        type: 'text/html',
        value: `
         <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#007BFF">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                    <tr>
                        <td align="left" valign="middle" width="25%">
                            <img src="https://app.starbehaviors.com/StarBehaviorsLogo.jpg" width="136" height="48" alt="Star Behaviors Logo">
                        </td>
                        <td align="center" width="50%">&nbsp;</td>
                        <td align="right" width="25%">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
        `
      }
    ]
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


  return (
    <div className={styles.main_container}>
    <div className="container">
      <div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">
        <div className="partner-add-page">
          <div className="card">
            <h4 className="card-header text-uppercase">Partner Admin</h4>
            <div className="card-body">
              {sussMessage && <p className="text-danger">{sussMessage}</p>}
              <p id="errormsg">* - Field is required.</p>
              <p>Company Details</p>
              <form id="mydata">
                <div className="bod">
                  <div className="form-floating mb-3">
                    <input
                      id="companyName"
                      className={`form-control ${formErrors.companyName ? 'is-invalid' : ''}`}
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <label htmlFor="companyName">Company Name*</label>
                    {formErrors.companyName && (
                        <div className="invalid-feedback">{formErrors.companyName}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      id="fName"
                      className={`form-control ${formErrors.admin_first_name ? 'is-invalid' : ''}`}
                      placeholder="First Name"
                      value={admin_first_name}
                      onChange={(e) => setFName(e.target.value)}
                    />
                    <label htmlFor="contactName">First Name*</label>
                     {formErrors.admin_first_name && (
                        <div className="invalid-feedback">{formErrors.admin_first_name}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      id="lName"
                      className={`form-control ${formErrors.admin_last_name ? 'is-invalid' : ''}`}
                      placeholder="Last Name"
                      value={admin_last_name}
                      onChange={(e) => setLName(e.target.value)}
                    />
                    <label htmlFor="contactName">Last Name*</label>
                    {formErrors.admin_last_name && (
                        <div className="invalid-feedback">{formErrors.admin_last_name}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3">
                 {/*   <input
                      id="contactPhone"
                      type="number"
                      placeholder="Contact Phone"
                      data-mask="000-000-0000"
                      className="form-control"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                    />*/}
{/*
                  <input
                    id="contactPhone"
                    type="number"
                    placeholder="Contact Phone"
                    className={`form-control ${formErrors.contactPhone ? 'is-invalid' : ''}`}
                    value={contactPhone}
                    onChange={(e) => {
                      // Remove non-digit characters and limit to 10 digits
                      const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setContactPhone(sanitizedValue);
                    }}
                  />
*/}
                  <input
                  id="contactPhone"
                  className={`form-control ${formErrors.contactPhone ? 'is-invalid' : ''}`}
                  type="text"
                  value={contactPhone.replace(/\D/g, '').slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                  onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, '').slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'))}
                  placeholder="123-456-7890"
                  pattern="[0-9]*"
                />




                    <label htmlFor="contactPhone">Contact Phone*</label>

                    <small className="text-muted px-1">111-222-3333</small>
                     {formErrors.contactPhone && (
                        <div className="invalid-feedback">{formErrors.contactPhone}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      id="contactEmail"
                       className={`form-control ${formErrors.adminemail ? 'is-invalid' : ''}`}
                      type="email"
                      placeholder="Contact Email"
                      value={adminemail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                    <label htmlFor="contactEmail">Contact Email*</label>
                    <small className="text-muted px-1">jdoe@email.com</small>
                     {formErrors.adminemail && (
                        <div className="invalid-feedback">{formErrors.adminemail}</div>
                      )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      id="password"
                      className={`form-control ${formErrors.admin_password ? 'is-invalid' : ''}`}
                      type="password"
                      placeholder="Password"
                      value={admin_password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="contactEmail">Password*</label>
                     {formErrors.admin_password && (
                        <div className="invalid-feedback">{formErrors.admin_password}</div>
                      )}
                    
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageFile" className="form-label">
                      Image*
                    </label>
                    <input
                      id="imageFile"
                      className={`form-control ${formErrors.imageFile ? 'is-invalid' : ''}`}
                      type="file"
                      // value={imageFile}
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, image/jpg"
                      // onChange={(e) => setImageFile(e.target.value)}
                    />
                    <small className="text-muted px-1">(.jpg,.png,.jpeg - 1MB limit)</small>
                      {formErrors.imageFile && (
                        <div className="invalid-feedback">{formErrors.imageFile}</div>
                      )}
                    
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      id="siteUrl"
                      className={`form-control ${formErrors.admin_site_url ? 'is-invalid' : ''}`}
                      placeholder="Site URL"
                      value={admin_site_url}
                      onChange={(e) => setSiteUrl(e.target.value)}
                    />
                    <label htmlFor="siteUrl">Site URL*</label>
                    <small className="text-muted px-1">On-line Application URL</small>
                    {formErrors.admin_site_url && (
                        <div className="invalid-feedback">{formErrors.admin_site_url}</div>
                      )}
                  </div>
                </div>
                <p>Company Assessment</p>
                <div className="bod">
                  <div className="form-floating mb-3 d-flex">
                    <input
                      id="assessmentRecipient"
                      className={`form-control ${formErrors.assessmentRecipient ? 'is-invalid' : ''}`}
                      type="email"
                      placeholder="Assessment Recipient"
                    />
                    <label htmlFor="assessmentRecipient">Assessment Recipient*</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddRecipient} style={{ marginLeft: '10px' }}>
                      Add
                    </button>
                  </div>
                   
                  <div className="mb-3 mx-3">

                    <label>Recipients</label>
                    {formErrors.assessmentRecipient && (
                        <div className="invalid-feedback">{formErrors.assessmentRecipient}</div>
                      )}
                    <ul className="list-group list-group-flush" id="show-recipient">
                      {assessmentRecipient.map((recipient, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <p className="recipient">{recipient}</p>
                          <div className="justify-content-end">
                            
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => handleRemoveRecipient(index)}
                            >
                                <Icon icon="pajamas:remove" />
                              {/* <FaRemoveFormat size={20} color="#fff" /> */}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      id="landingPageHeader"
                     className={`form-control ${formErrors.adminpageheader ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Header"
                      value={adminpageheader}
                      onChange={(e) => setLandingPageHeader(e.target.value)}
                    ></textarea>
                    <label htmlFor="landingPageHeader">Landing Page Header*</label>
                    {formErrors.adminpageheader && (
                        <div className="invalid-feedback">{formErrors.adminpageheader}</div>
                      )}
                  </div>
                  <label htmlFor="landingPageMainContent">Landing Page Main Content*</label>
                  <div className="form-floating mb-3">

                  {/*  <textarea
                      id="landingPageMainContent"
                       className={`form-control ${formErrors.adminpagecontent ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Main Content"
                      value={adminpagecontent}
                      onChange={(e) => setLandingPageMainContent(e.target.value)}
                    ></textarea>*/}

                    <Editor 
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          editorState={editorState}
                          onEditorStateChange={setEditorState}
                          onBlur={handleBlur}
                          id="job_description"
                          // wrapperStyle={{height:300, overflow:'scroll', border: "1px solid black" }}
                          wrapperStyle={{
                          height: 'auto', // Adjust the height as needed
                          minHeight: '300px', // Minimum height
                          border: '1px solid #ccc',
                          padding: '2px', // Add padding to match textarea appearance
                          borderRadius: '4px', // Add rounded corners
                          lineHeight: '1.5', // Match line height with your design
                          fontSize: '16px', // Match font size with your design
                        }}
                          toolbar={{
                          inline: { inDropdown: true },
                          list: { inDropdown: true },
                          textAlign: { inDropdown: true },
                          link: { inDropdown: true },
                          history: { inDropdown: true },
                          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },

                          html: { insertCustomElement: { /* Configuration for inserting custom HTML element */ },
                                  formatHTML: { /* Configuration for formatting HTML */ },
                                  editSourceCode: { /* Configuration for editing HTML source code */ }, },
                        }}
                         
                        />
                    
                    {formErrors.adminpagecontent && (
                        <div className="invalid-feedback">{formErrors.adminpagecontent}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3 d-flex">
                    <input
                      id="landingPageOffering"
                      className={`form-control ${formErrors.adminemailadminpageoffers ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Offering"
                    />
                    <label htmlFor="landingPageOffering">Landing Page Offering*</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddOffering} style={{ marginLeft: '10px' }}>
                      Add
                    </button>
                  </div>

                  <div className="mb-3 mx-3">
                  {formErrors.adminemailadminpageoffers && (
                        <div className="invalid-feedback">{formErrors.adminemailadminpageoffers}</div>
                      )}
                    <label>Offerings</label>
                    <ul className="list-group list-group-flush" id="show-offering">
                      {adminemailadminpageoffers.map((offering, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <p className="offering">{offering}</p>
                          <div className="justify-content-end">
                         
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => handleRemoveOffering(index)}
                            >
                                <Icon icon="pajamas:remove" />
                              {/* <FaRemoveFormat size={20} color="#fff" /> */}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      id="landingPageCallToAction"
                       className={`form-control ${formErrors.adminpagecta ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Call to Action"
                      value={adminpagecta}
                      onChange={(e) => setLandingPageCallToAction(e.target.value)}
                    ></textarea>
                    <label htmlFor="landingPageCallToAction">Landing Page Call to Action*</label>
                    {formErrors.adminpagecta && (
                        <div className="invalid-feedback">{formErrors.adminpagecta}</div>
                      )}
                  </div>
                </div>
                <br />
                <div>
                  <button type="button" onClick={handleSave} className="btn btn-primary">
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={clearForm} style={{ marginLeft: '10px' }}>Clear Form</button>
                </div>
                 {sussMessage && <p className="text-danger">{sussMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PartnerAdminForm;
