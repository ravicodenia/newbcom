
import React, { useEffect, useState } from 'react';
import { Link,useParams,useNavigate} from 'react-router-dom';
import { API_BASE_URL } from '../../config/serverApiConfig';
// import InnerHTML from "dangerously-set-html-content";

import axios from 'axios'; // You may need to install axios if not already installed.
import styles from "./styles.module.css";
function LandingPage() {
const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('landingpage/login');
	};
  const handleLogout1 = () => {
        localStorage.removeItem("token1");
        navigate('landingpage/login');
        // window.location.reload();
    };
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');

   const [image, setImage] = useState('');
  const [offers, setOffers] = useState([]);
  const [cta, setCta] = useState('');
  
  const image_file ="https://sb.brandingbrandz.in/uploadimage/"+image;

const remove = () => {
  // Check if the token is present in localStorage
  if (localStorage.getItem("token")) {
    // Remove the token
    localStorage.removeItem("token");

    // Reload the page
    window.location.reload();
  }
};

   

    useEffect(() => {
    const timeoutId = setTimeout(() => {
      remove();
    }, 1000);

    // Cleanup the timeout on component unmount or if needed
    return () => clearTimeout(timeoutId);
  }, []);
 // Set the src, width, height, and alt attributes
    
const [lastSegment, setLastSegment] = useState('');

  useEffect(() => {
    
   const pathname = window.location.pathname;

    // Split the pathname by '/' to get an array of segments
    const segments = pathname.split('/');

    // Find the segment that represents the email address
    // In this case, it's the last segment
    const lastSegment = segments[segments.length - 1];

    setLastSegment(lastSegment);

    localStorage.setItem("reg",lastSegment);



    axios.post(API_BASE_URL+'/sb_getlandingpage', {
      usercode: lastSegment,
    })
    .then(response => {
      const userData = response.data.user_data[0];
      setHeader(userData.adminpageheader);
      setContent(userData.adminpagecontent);
      setOffers(userData.aadminpageoffers);
      setCta(userData.adminpagecta);
      setImage(userData.imageFile);
      localStorage.setItem("patnerImg",userData.imageFile);
      localStorage.setItem("partnerurl",userData.admin_site_url);
      localStorage.setItem("companyname",userData.companyname);


    var existingImg = document.getElementById('bandingImg');

// if (!existingImg) {
//   // If it doesn't exist, create the image and append it
//   var img = document.createElement('img');
//   img.src = 'https://sb.brandingbrandz.in/uploadimage/' + userData.imageFile;
//   img.width = 136;
//   img.height = 48;
//   img.alt = 'Star Behaviors Logo';
//   img.id = 'bandingImg'; // Set an ID to identify the image

//   var div = document.getElementById('banding');
//   div.appendChild(img);
// }

     var div1 = document.getElementById('st');
    var img = document.getElementById('imgId'); // Replace 'imgId' with the actual id of your img element.

    // if (div1 && img) {
    //   div1.removeChild(img); // Remove the 'img' element from 'div1'.
    // }



      setTimeout(logout, 1000);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  function logout(){
    document.getElementById('logout1').innerHTML = "";

  
  }

  // function appendImage() {
  //     // Create a new img element
  //     var img = document.createElement('img');

  //     // Set the src, width, height, and alt attributes
  //     img.src = 'https://sb.brandingbrandz.in/uploadimage/'+image;
  //     img.width = 136;
  //     img.height = 48;
  //     img.alt = 'Star Behaviors Logo';

  //     // Get a reference to the div where you want to append the image
  //     var div = document.getElementById('banding');

  //     // Append the image to the div
  //     div.appendChild(img);
  //   }

  return (
  	<div className={styles.main_container}>
 
    <div className="position-relative d-flex flex-column justify-content-center align-items-center">
      <div className="hero-image new-hero-image">
           <div className="main-card">
        <div className="card border-2 text-center p-4">
          <div className="mb-5">
            <img className="rounded-3" src={image_file} width="180" height="90" alt="Partner Logo" />
          </div>
          <div className="d-flex flex-column">
            <Link to={`/landingpage/register/${lastSegment}`}>
              <button className="btn btn-primary text-uppercase">
                Register
              </button>
            </Link>
            <span className="my-1">- or -</span>
            <Link to="/landingpage/login">
              <button className="btn btn-outline-secondary text-uppercase">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
         <div className="container">
   
      <div className="main-content" style={{ marginTop: '10%' }}>
        <div className="main-content-header-section mt-5 mb-4 m-auto">
          <div className="text-center">
            <h6 className="mb-3"><strong id="hed">{header}</strong></h6>
          </div>
          <p id="con" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        <div className="offering-list-card card border-2 p-2 m-auto">
          <h6 className="call-to-action text-center"><strong>What Do We Offer?</strong></h6>
          <ul className="offering-list" id="offering">
          {Array.isArray(offers) ? (
            offers.map((offer, index) => (
              <li className="offering" key={index}>{offer}</li>
            ))
          ) : (
            <li className="offering">No offerings to display</li>
          )}
        </ul>

        </div>
        <p className="call-to-action-sub-text text-center mt-3"><strong id="lend">{cta}</strong></p>
        <p className="text-center">
          <strong>
             <Link to={`/landingpage/register/${lastSegment}`}>
              Start by Completing our Online Assessment and Application Today!
            </Link>
          </strong>
        </p>
      </div>
       </div>
      <div className="footer-image" style={{ background: `url(https://app.starbehaviors.com/Truck8.jpg)` }}></div>
    </div>
    </div>
   
  );
}

export default LandingPage;

