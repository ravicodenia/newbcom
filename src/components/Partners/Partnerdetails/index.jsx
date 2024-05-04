import React, { useState, useEffect } from 'react';
import { FaRemoveFormat } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import styles from "../styles.module.css";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw ,ContentState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_BASE_URL } from '../../../config/serverApiConfig';

import { Link } from 'react-router-dom';

import { stateFromHTML } from 'draft-js-import-html';


function PartnerDetails() {



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


const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(''))
  );


  const handleBlur = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);
    const cleanedHtml = DOMPurify.sanitize(htmlContent);
    const jobDescription = cleanedHtml.split('/n').join('').split('"').join("'");
    setFormData({ ...formData, landingPageMainContent: jobDescription });
  };

 // const [editorState, setEditorState] = useState(
 //    EditorState.createEmpty() // or set an initial EditorState
 //  );

 //  const handleBlur = () => {
    
 //    const contentState = editorState.getCurrentContent();
 //    const rawContentState = convertToRaw(contentState);
 //    const htmlContent = draftToHtml(rawContentState);
 //    const cleanedHtml = DOMPurify.sanitize(htmlContent);
 //     const job_description = cleanedHtml.split('/n').join('').split('"').join("'");

 //    // setLandingPageMainContent(job_description)
 //     setFormData({ ...formData, landingPageMainContent: job_description })

 //   }





  const [formData, setFormData] = useState({
    companyname: '',
    fName: '',
    lName: '',
    contactphone: '',
    contactEmail: '',
    landingPageHeader: '',
    imageFile:'',
    landingPageMainContent: '',
    landingPageCallToAction: '',
    siteUrl: '',
    assessmentRecipient: [],
    landingPageOffering: [],
    isActive: false,

  });

  const [recipientInput, setRecipientInput] = useState('');
  const [offeringInput, setOfferingInput] = useState('');
  const [showRecipient, setShowRecipient] = useState([]);
  const [showOffering, setShowOffering] = useState([]);

  useEffect(() => {
    // Fetch data from the API and populate the form fields here
    // Replace this with your actual API call
    fetchUserData();
  }, []);


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

      fetch(API_BASE_URL+'/uploadimage.php', {
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

  const [formErrors, setFormErrors] = useState({});
  // const [formErrors, setFormErrors] = useState({
  //   companyName: '',
  //   fName: '',
  //   lName: '',
  //   pnumber: '',
  //   contactEmail: '',
  //   landingPageHeader: '',
  //   landingPageMainContent: '',
  //   landingPageCallToAction: '',
  //   siteUrl: '',
  //   assessmentRecipient: '',
  //   landingPageOffering: '',
  // });

  const fetchUserData = async () => {
    try {
      const pathname = window.location.pathname;

      // Split the pathname by '/' to get an array of segments
      const segments = pathname.split('/');

      // Find the segment that represents the email address
      // In this case, it's the last segment
      const lastSegment = segments[segments.length - 1];
      // const lastSegment1 = segments[segments.length - 2];


      const response = await fetch(API_BASE_URL+'/sb_showcompanyuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adminemail: lastSegment,
          
        }),
      });

      const data = await response.json();
      const userData = data.user_data[0];

      setFormData({
        ...formData,
        id:userData.id,
        adminid:1,
        companyname: userData.companyname,
        fName: userData.admin_first_name,
        lName: userData.admin_last_name,
        contactphone: userData.contactphone,
        contactEmail: userData.adminemail,
        admin_password:'',
        // imageFile: userData.imageFile,
        landingPageHeader: userData.adminpageheader,
        landingPageMainContent: userData.adminpagecontent,
        landingPageCallToAction: userData.adminpagecta,
        siteUrl: userData.admin_site_url,
        asssiteUrl: userData.site_url,
        assessmentRecipient: userData.assessmentRecipient,
        landingPageOffering: userData.aadminpageoffers,
        isActive: true, // Adjust this based on your data
      });
    
    

     

     const strippedText = userData.adminpagecontent.replace(/&lt;/g, '<').replaceAll(/&gt;/g, '>').replaceAll(/&amp;/g, '&').replaceAll("&lt;",'<').replaceAll("&gt;",'>').replace(/<p>/g, '').replaceAll(/<strong>/g, '').replaceAll(/<\/p>/g, '').replaceAll(/<\/strong>/g, '').replaceAll(/<\/?[^>]+(>|$)/g, '');

     const sanitizedHtml = DOMPurify.sanitize(strippedText);


     setEditorState(EditorState.createWithContent(ContentState.createFromText(strippedText)));










      // Populate showRecipient and showOffering arrays with data from userData
      setShowRecipient(userData.assessmentRecipient);
      setShowOffering(userData.aadminpageoffers);

      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

   
  const handleRecipientInputChange = (e) => {
    setRecipientInput(e.target.value);
  };

  const addRecipient = () => {
   const data = document.getElementById('assessmentRecipient').value;

   if(data === ''){
      alert('At least one Recipient is required');

    }else if (!isValidEmail(data)) {
     alert('Invalid email format');
   }else{
    setShowRecipient([...showRecipient, recipientInput]);
    setRecipientInput('');
    const updatedRecipientArray = [...formData.assessmentRecipient, recipientInput];
    setFormData({ ...formData, assessmentRecipient: updatedRecipientArray });
  }
   
    
  };



  const removeRecipient = (index) => {
    const updatedRecipients = [...showRecipient];
    updatedRecipients.splice(index, 1);
    setShowRecipient(updatedRecipients);
  };

  const handleOfferingInputChange = (e) => {
    setOfferingInput(e.target.value);

  };

  const addOffering = () => {
    const data = document.getElementById('landingPageOffering').value;

   if(data === ''){
      alert('At least one Offering is required');

    }else{
    setShowOffering([...showOffering, offeringInput]);
    setOfferingInput('');
    const updatedRecipientArray = [...formData.landingPageOffering, offeringInput];
    setFormData({ ...formData, landingPageOffering: updatedRecipientArray });
  }
  };

  const removeOffering = (index) => {
    const updatedOfferings = [...showOffering];
    updatedOfferings.splice(index, 1);
    setShowOffering(updatedOfferings);
  };
const [errorMessage, setErrorMessage] = useState('');
function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

const validateForm = () => {
     const errors = {};
   

    if (formData.companyname.trim()=== '') {
      errors.companyname = 'Company Name is required';
      
    }
    // if(formData.admin_password.trim()===''){
    //   errors.admin_password ='Password is required';
    // }

    if (formData.fName.trim()=== '') {
      errors.fName = 'First Name is required';
     
    }

    if (formData.lName.trim()=== '') {
      errors.lName = 'Last Name is required';
     
    }

    if (formData.contactphone.trim()=== '') {
      errors.contactphone = 'Contact Phone is required';
      
    }

    // if (formData.contactEmail.trim()=== '') {
    //   errors.contactEmail = 'Contact Email is required';
      
    // } else if (!isValidEmail(formData.contactEmail)) {
    //   errors.contactEmail = 'Invalid email format';
      
    // }

    if (formData.siteUrl.trim()=== '') {
      errors.siteUrl = 'Site URL is required';
      
    }

    if (formData.assessmentRecipient.length === 0) {
      errors.assessmentRecipient = 'At least one Assessment Recipient is required';
      
    }

    if (formData.landingPageHeader.trim()=== '') {
      errors.landingPageHeader = 'Landing Page Header is required';
      
    }

    if (formData.landingPageMainContent.trim()=== '') {
      errors.landingPageMainContent = 'Landing Page Main Content is required';
      
    }

    // if (formData.landingPageOffering.length=== 0) {
    //   errors.landingPageOffering = 'At least one Landing Page Offering is required';
    
    // }

    if (formData.landingPageCallToAction.trim()=== '') {
      errors.landingPageCallToAction = 'Landing Page Call to Action is required';
      
    }

    setFormErrors(errors);



    return Object.keys(errors).length === 0;

      };

      const [sussMessage, setsussMessage] = useState();
  
  const handleSubmit = async () => {

  const isValid = validateForm();

 

    if (isValid) {
    

   
      const response = await fetch(API_BASE_URL+'/sb_editcompanyuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id:formData.id,
          adminid:"1",
          companyName: formData.companyname,
          adminemail: formData.contactEmail,
          admin_first_name: formData.fName,
          admin_last_name: formData.lName,
          contactPhone: formData.contactphone,
          admin_type: "2",
          admin_password: '', // Set your password here
          imageFile: formData.imageFile, // Set your image file here
          admin_site_url: formData.siteUrl,
          adminemails: formData.contactEmail,
          adminpageheader: formData.landingPageHeader,
          adminpagecontent: formData.landingPageMainContent,
          adminpageoffers: formData.landingPageOffering,
          adminpagecta: formData.landingPageCallToAction,
          assessmentRecipient: formData.assessmentRecipient,
        }),
      });

      const responseData = await response.json();
      console.log('Form submission response:', responseData);

       setsussMessage("Data Add successfully");

        setTimeout(() => {
          // Assuming you have a function to handle the redirection
          redirectToHomePage();
        }, 2000);
    
      }
  };
const redirectToHomePage = () => {
  // Use JavaScript to navigate to the homepage
  window.location.href = '/partners'; // Replace '/home' with the actual URL of your homepage
};

  

  return (
    <div className={styles.main_container}>

      <div className="container">
      <Link onClick={redirectToHomePage}>&lt; Back</Link>



        <div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">

          <div className="partner-page">


            <div className="card">

            
              <h4 className="card-header text-uppercase">Partner Details</h4>


              <div className="card-body">
                {/* Display error messages */}
               {sussMessage && <p className="text-danger">{sussMessage}</p>}
                <p>* - Field is required.</p>
                <form>
                  <div className="form-floating mb-3">
                    <input id="companyname"  className={`form-control ${formErrors.companyname ? 'is-invalid' : ''}`} placeholder="Company Name" value={formData.companyname} onChange={(e) => setFormData({ ...formData, companyname: e.target.value })} />
                    <label htmlFor="companyname">Company Name*</label>
                   
                      {formErrors.companyname && (
                        <div className="invalid-feedback">{formErrors.companyname}</div>
                      )}
                  </div>
                  <div className="form-floating mb-3">
                    <input id="fName" className={`form-control ${formErrors.fName ? 'is-invalid' : ''}`}  placeholder="Contact Name" value={formData.fName} onChange={(e) => setFormData({ ...formData, fName: e.target.value })} />
                    <label htmlFor="fName">First Name*</label>
                    {formErrors.fName && (
                        <div className="invalid-feedback">{formErrors.fName}</div>
                      )}
                     
                  </div>
                  <div className="form-floating mb-3">
                    <input id="lName" className={`form-control ${formErrors.fName ? 'is-invalid' : ''}`} placeholder="Contact Name" value={formData.lName} onChange={(e) => setFormData({ ...formData, lName: e.target.value })} />
                    <label htmlFor="lName">Last Name*</label>
                    {formErrors.lName && (
                        <div className="invalid-feedback">{formErrors.lName}</div>
                      )}
                    
                  </div>
                  <div className="form-floating mb-3">
                    {/*<input type="number" id="pnumber" placeholder="Contact Phone" data-mask="000-000-0000" className="form-control" value={formData.pnumber} onChange={(e) => setFormData({ ...formData, pnumber: e.target.value })} />*/}

                 {/* <input
                  type="text" // Change type to "text" to allow masking and limit to 10 digits
                  id="pnumber"
                  placeholder="Contact Phone"
                  maxLength="10" // Set max length to 10
                  className={`form-control ${formErrors.pnumber ? 'is-invalid' : ''}`}
                  value={formData.pnumber}
                  onChange={(e) => {
                    // Remove non-digit characters and limit to 10 digits
                    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData({ ...formData, pnumber: sanitizedValue });
                  }}
                />*/}

                  <input
                  type="text"
                  id="contactphone"
                  placeholder="Contact Phone"
                  // maxLength="12" // Change maxLength to allow for the formatted phone number (e.g., 123-456-7890)
                  className={`form-control ${formErrors.contactphone ? 'is-invalid' : ''}`}
                  value={formData.contactphone}
                  pattern="[0-9]*"
                  onChange={(e) => {
                    // Remove non-digit characters and limit to 10 digits
                    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                    
                    // Format the phone number with hyphens
                    const formattedValue = sanitizedValue.replace(/(\d{3})(\d{3})?(\d{4})?/, '$1-$2-$3');
                    
                    setFormData({ ...formData, contactphone: formattedValue });
                  }}
                />

                    <label htmlFor="contactphone">Contact Phone*</label>
                    <small className="text-muted px-1">111-222-3333</small>
                     {formErrors.contactphone && (
                        <div className="invalid-feedback">{formErrors.contactphone}</div>
                      )}
                    
                  </div>
                  <div className="form-floating mb-3">
                    <input id="contactEmail" className={`form-control ${formErrors.contactEmail ? 'is-invalid' : ''}`} type="email" placeholder="Contact Email" value={formData.contactEmail} onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })} />
                    <label htmlFor="contactEmail">Contact Email*</label>
                    <small className="text-muted px-1">jdoe@email.com</small>
                     {formErrors.contactEmail && (
                        <div className="invalid-feedback">{formErrors.contactEmail}</div>
                      )}
                   
                  </div>

{/*
                   <div className="form-floating mb-3">
                    <input
                      id="admin_password"
                      className={`form-control ${formErrors.admin_password ? 'is-invalid' : ''}`}
                      type="password"
                      placeholder="Password"
                      value=""
                      onChange={(e) => setFormData(e.target.value)}
                    />
                    <label htmlFor="contactEmail">Password*</label>
                     {formErrors.admin_password && (
                        <div className="invalid-feedback">{formErrors.admin_password}</div>
                      )}
                    
                  </div>*/}
                  {/*<div className="mb-3">
                    <label htmlFor="imageFile">Image</label>
                    <br />
                    <div className="mb-3">
                      <img
                        className="rounded-3"
                        src={`https://sb.brandingbrandz.in/uploadimage/${formData.imageFile}`}
                        width="90"
                        height="50"
                        alt=""
                      />
                    </div>
                    <input id="imageFile" className="form-control" onChange={handleFileChange} type="file" />
                    <small className="text-muted px-1">(.jpg - 1MB limit)</small>

                   
                  </div>
*/}
                  <div className="form-floating mb-3">
                    <input readOnly id="assessmentUrl" readonly value={formData.asssiteUrl} className="form-control" placeholder="Assessment URL" />
                    <label htmlFor="assessmentUrl">Assessment URL</label>

                  </div>

                  <div className="form-floating mb-3">
                    <input id="siteUrl" value={formData.siteUrl} className={`form-control ${formErrors.siteUrl ? 'is-invalid' : ''}`} placeholder="Site URL" />
                    <label htmlFor="siteUrl">Site URL*</label>
                    <small className="text-muted px-1">On-line Application URL</small>
                    {formErrors.siteUrl && (
                        <div className="invalid-feedback">{formErrors.siteUrl}</div>
                      )}
                     
                  </div>

                  <div className="form-floating mb-3 d-flex">
                    <input
                      id="assessmentRecipient"
                      className="form-control"
                      type="email"
                      placeholder="Assessment Recipient"
                      value={recipientInput}
                      onChange={handleRecipientInputChange}


                    />
                    <label htmlFor="assessmentRecipient">Assessment Recipient*</label>
                    <button type="button" className="btn btn-primary" onClick={addRecipient} style={{ marginLeft: '10px' }}>
                      Add
                    </button>
                  </div>

                  <div className="mb-3 mx-3">
                    <label>Recipients</label>
                    <ul className="list-group list-group-flush">
                  {Array.isArray(showRecipient) ? (
                    showRecipient.map((recipient, index) => (
                      <li className="list-group-item" key={index}>
                        {recipient}
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeRecipient(index)}>
                          <Icon icon="pajamas:remove" />
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No recipients to display</li>
                  )}
                </ul>

                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      id="landingPageHeader"
                      className={`form-control ${formErrors.landingPageHeader ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Header"
                      value={formData.landingPageHeader}
                      // onChange={(e) => setLandingPageHeader(e.target.value)}
                      onChange={(e) => setFormData({ ...formData, landingPageHeader: e.target.value })}
                    ></textarea>
                    <label htmlFor="landingPageHeader">Landing Page Header*</label>
                    {formErrors.landingPageHeader && (
                        <div className="invalid-feedback">{formErrors.landingPageHeader}</div>
                      )}
                     
                  </div>
                  <label htmlFor="landingPageMainContent">Landing Page Main Content*</label>

                  <div className="form-floating mb-3">
                  {/*  <textarea
                      id="landingPageMainContent"
                      style={{height:'300px'}}
                      className={`form-control ${formErrors.landingPageMainContent ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Main Content"
                      value={formData.landingPageMainContent}
                      // onChange={(e) => setLandingPageMainContent(e.target.value)}
                      onChange={(e) => setFormData({ ...formData, landingPageMainContent: e.target.value })}
                    ></textarea>*/}

                   <Editor 
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    onBlur={handleBlur}
                    id="landingPageMainContent"
                    wrapperStyle={{ width: 600, height: 300, overflow: 'scroll', border: "1px solid black" }}

                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },

                    }}

                  />

                
                  
                     {formErrors.landingPageMainContent && (
                        <div className="invalid-feedback">{formErrors.landingPageMainContent}</div>
                      )}
                     
                     
                  </div>

                  <div className="form-floating mb-3 d-flex">
                    <input
                      id="landingPageOffering"
                      className="form-control"
                      placeholder="Landing Page Offering"
                      value={offeringInput}
                      onChange={handleOfferingInputChange}
                    // onChange={(e) => setFormData({ ...formData, landingPageOffering: [e.target.value] })}

                    />
                    <label htmlFor="landingPageOffering">Landing Page Offering*</label>
                    <button type="button" className="btn btn-primary" onClick={addOffering} style={{ marginLeft: '10px' }}>
                      Add
                    </button>
                  </div>

                  <div className="mb-3 mx-3">
                  
                    <label>Offerings</label>
                                   <ul className="list-group list-group-flush">
                  {Array.isArray(showOffering) ? (
                    showOffering.map((offering, index) => (
                      <li className="list-group-item" key={index}>
                        {offering}
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeOffering(index)}>
                          <Icon icon="pajamas:remove" />
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No offerings to display</li>
                  )}
                </ul>
                  </div>

                  <div className="form-floating mb-4">
                    <textarea
                      id="landingPageCallToAction"
                     className={`form-control ${formErrors.landingPageCallToAction ? 'is-invalid' : ''}`}
                      placeholder="Landing Page Call to Action"
                      value={formData.landingPageCallToAction}
                      // onChange={(e) => setLandingPageCallToAction(e.target.value)}
                      onChange={(e) => setFormData({ ...formData, landingPageCallToAction: e.target.value })}
                    ></textarea>
                    <label htmlFor="landingPageCallToAction">Landing Page Call to Action*</label>

                     {formErrors.landingPageCallToAction && (
                        <div className="invalid-feedback">{formErrors.landingPageCallToAction}</div>
                      )}
                    
                  </div>

                  <div className="form-check mb-5">
                    <input
                      id="isActive"
                      type="checkbox"
                      className="form-check-input"
                      checked={formData.isActive}
                    // onChange={() => setIsActive(!isActive)}
                    />
                    <label htmlFor="isActive" className="form-check-label">
                      Active
                    </label>
                  </div>

                  <button type="button" id="save" onClick={handleSubmit} className="btn btn-primary">
                    Save
                  </button>
                  {sussMessage && <p className="text-danger">{sussMessage}</p>}
                </form>
              </div>
            </div>
            {/* <div className={`modal ${props.modalId}`} tabIndex="-1" role="dialog" aria-labelledby="appModal" aria-hidden="true" style={{ display: 'none', overflowY: 'auto' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="appModalTitle">{props.modalTitle}</h5>
                    </div>
                    <div className="modal-body">
                      {props.children}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Modal modalId="recipientModal" modalTitle="Edit Recipient">
//         <input id="editRecipient" className="form-control" type="email" placeholder="Assessment Recipient" />
//       </Modal>

//       <Modal modalId="offeringModal" modalTitle="Edit Offering">
//         <textarea id="editOffering" className="form-control" placeholder="Offering"></textarea>
//       </Modal>
//     </div>
//   );
// }

export default PartnerDetails;
