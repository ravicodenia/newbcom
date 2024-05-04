import './app.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import { API_BASE_URL } from '../../../config/serverApiConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function AssessmentForm() {
 
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const [showfourSection,setShowfourSection]=useState(false);

  const [showfiveSection,setShowfiveSection]=useState(false);
  const [countdown, setCountdown] = useState(10);

  const [countdown1, setCountdown1] = useState(10);

  const [formData, setFormData] = useState([]);
  const [savedAssessmentData, setSavedAssessmentData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const setsToShow = 5; // Number of sets to show at a time
  const [selectedItems, setSelectedItems] = useState(Array(setsToShow).fill(undefined)); // State to track selected items

  
  const [validationMessage, setValidationMessage] = useState(''); // Validation message

  const [sbstars, setsbstars]=useState('');

  const [buttonname, setButtonName]=useState('');

  



// console.log(currentIndex);
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // You can use 'auto' for instant scrolling
  });
};


const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

function buttonNameChange() {
  const userid = localStorage.getItem("userid");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "userid": userid
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://casaahaanahotels.com/get_user_assessments", requestOptions)
  .then(response => response.json()) // Parse the response as JSON
  .then(result => {

    if (result.assessments && result.assessments.length > 0) {
      xyz();
      setButtonName("Continue Assessment");

      const currentIndex = localStorage.getItem("currentIndex");

      if(currentIndex ==75){
        show_score();
        showass();
      }
    } else {
    setButtonName("Start Assessment");
     
      
    }
  })
  .catch(error => console.log('error', error));


  
}

function xyz(){

      setShowFirstSection(false);
      setShowSecondSection(false);
      setShowThirdSection(true);
}


  useEffect(() => {


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const userid = localStorage.getItem("userid");
const assessment_id = localStorage.getItem("assessment_id");

const raw = JSON.stringify({
  userid: userid,
  assessmentid: assessment_id,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://casaahaanahotels.com/show_assessment", requestOptions)
  .then((response) => response.json())
  .then((result) => {

    // console.log(result);
    if (result !== null && result.length > 0) {
      const highestPageNo = Math.max(...result.map((data) => data.page_no));

      if (highestPageNo === 0) {
        setPageNo(1);
        setButtonName("Start Assessment");
      } else {
        setPageNo(highestPageNo+1);
        setButtonName("Continue Assessment");
      
      }

      console.log(`The highest page number is ${highestPageNo}`);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });




  buttonNameChange();
  
  
    // Add an event listener for the scroll event when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function shuffleArray(array) {
  // Fisher-Yates Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// useEffect(() => {

//   // Fetch data from the API endpoint
//   fetch(API_BASE_URL + "/get_random_records")
//     .then(response => response.json())
//     .then(data => {
//       // Check if driverbehaviour and driverskills arrays exist
//       if (data.driverbehaviour && data.driverskills) {
//         const mergedData = [];

//         // Make sure both arrays have the same length
//         const minLength = Math.min(data.driverbehaviour.length, data.driverskills.length);

//         for (let i = 0; i < minLength; i++) {
//           const skillObj = data.driverskills[i];
//           const behaviorObj = data.driverbehaviour[i];

//           if (skillObj.skills && behaviorObj.behaviour) {
//             mergedData.push({
//               skill: skillObj.skills,
//               skillid: skillObj.id,
//               skillname: skillObj.name,
//               randomInteger: Math.floor(Math.random() * (1 - 2 + 2) + 2),
//               behavior: behaviorObj.behaviour,
//               behaviorid: behaviorObj.id,
//               behaviorname: behaviorObj.name,
//               randomInteger1: Math.floor(Math.random() * (3 - 1 + 1) + 1),

//             });
//           }
//         }

      
//         shuffleArray(mergedData);

//         setFormData(mergedData);
//       } else {
//         console.error("Missing driverbehaviour or driverskills array in the API response.");
//       }
//     })
//     .catch(error => console.log('error', error));
// }, []);


// useEffect(() => {
//     // Fetch data from the first API endpoint
//     fetch(API_BASE_URL + "/get_random_records")
//       .then(response => response.json())
//       .then(data => {
//         if (data.driverbehaviour && data.driverskills) {
//           const mergedData = [];
//           const minLength = Math.min(data.driverbehaviour.length, data.driverskills.length);

//           for (let i = 0; i < minLength; i++) {
//             const skillObj = data.driverskills[i];
//             const behaviorObj = data.driverbehaviour[i];

//             if (skillObj.skills && behaviorObj.behaviour) {
//               mergedData.push({
//                 skill: skillObj.skills,
//                 skillid: skillObj.id,
//                 skillname: skillObj.name,
//                 randomInteger: Math.floor(Math.random() * (1 - 2 + 2) + 2),
//                 behavior: behaviorObj.behaviour,
//                 behaviorid: behaviorObj.id,
//                 behaviorname: behaviorObj.name,
//                 randomInteger1: Math.floor(Math.random() * (3 - 1 + 1) + 1),
//               });
//             }
//           }

//           shuffleArray(mergedData);

//           // Now, make the second API call to get saved assessment data
//           const myHeaders = new Headers();
//           myHeaders.append("Content-Type", "application/json");
//           const userid = localStorage.getItem('userid');
//           const registrationNo = localStorage.getItem('registrationNo');

//           const raw = JSON.stringify({
//             "userid": userid,
//             "assessmentid": registrationNo
//           });

//           const requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             body: raw,
//             redirect: 'follow'  
//           };

//           fetch("https://casaahaanahotels.com/show_assessment", requestOptions)
//             .then(response => response.json())
//             .then(result => {
              
//               if(result !== null){
//                 // Store saved assessment data

//             const transformedData = result.map(item => {
//             const { assessmentid, assessmentquestion } = item;
//             return assessmentquestion.map(question => ({
//               assessmentid,
//               Answer: question.Answer,
//               skillid: question.Skills,
//               behaviorid: question.behaviour,
//               skillQuestion: question.Question_skill,
//               behaviorQuestion: question.Question_behaviour,
//               point: question.point,
//             }));
//           }).flat();

//           setSavedAssessmentData(transformedData);



//               // Combine data from the first and second API calls
//               const combinedData = mergedData.map(item => {

//                 // Check if the skillid or behaviorid matches any in the saved data
//                  const isSkillChecked = savedAssessmentData.some(savedItem => savedItem.Answer === item.skillid);
//                  const isBehaviorChecked = savedAssessmentData.some(savedItem => savedItem.Answer === item.behaviorid);
               
               
            
//                 return {
//                   ...item,
//                   isSkillChecked,
//                   isBehaviorChecked,
//                 };
//               });


//               setFormData(combinedData);
               
//               }else{
//               setFormData(mergedData);
//               }
              
            
//             })
//             .catch(error => console.log('error', error));
//         } else {
//           console.error("Missing driverbehaviour or driverskills array in the API response.");
//         }
//       })
//       .catch(error => console.log('error', error));
//   }, []);


useEffect(() => {
  // Fetch data from the first API endpoint
  fetch(API_BASE_URL + "/get_random_records")
    .then((response) => response.json())
    .then((data) => {
      if (data.driverbehaviour && data.driverskills) {
        const mergedData = [];
        const minLength = Math.min(
          data.driverbehaviour.length,
          data.driverskills.length
        );
         const assessmentidnew = data.assessment_id;
                // Check if an assessment_id is already stored in localStorage
        const existingAssessmentId = localStorage.getItem('assessment_id');



        // If an assessment_id already exists, you can compare it with the new one
        if (existingAssessmentId == null) {
       // If there is no existing assessment_id, set the new one
          localStorage.setItem('assessment_id', assessmentidnew);

        } else {
          
        }

        

        for (let i = 0; i < minLength; i++) {
          const skillObj = data.driverskills[i];
          const behaviorObj = data.driverbehaviour[i];

          if (skillObj.skills && behaviorObj.behaviour) {
            mergedData.push({
              skill: skillObj.skills,
              skillid: skillObj.id,
              skillname: skillObj.name,
              randomInteger: Math.floor(Math.random() * (1 - 2 + 2) + 2),
              behavior: behaviorObj.behaviour,
              behaviorid: behaviorObj.id,
              behaviorname: behaviorObj.name,
              randomInteger1: Math.floor(Math.random() * (3 - 1 + 1) + 1),
            });
          }
        }

        shuffleArray(mergedData);

        // Now, make the second API call to get saved assessment data
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const userid = localStorage.getItem("userid");
        const assessment_id = localStorage.getItem("assessment_id");

        const raw = JSON.stringify({
          userid: userid,
          assessmentid: assessment_id,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("https://casaahaanahotels.com/show_assessment", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result !== null) {
              // Store saved assessment data

              console.log(result.length);
              

              if(result.length >=15){
                show_score();
                showass();
                const currentIndex = localStorage.setItem("currentIndex",75);
              }
              const transformedData = result.map((item) => {
                const { assessmentid, assessmentquestion } = item;
                return assessmentquestion.map((question) => ({
                  assessmentid,
                  Answer: question.Answer,
                  skillid: question.Skills,
                  behaviorid: question.behaviour,
                  skillQuestion: question.Question_skill,
                  behaviorQuestion: question.Question_behaviour,
                  point: question.point,
                }));
              }).flat();

              // Filter mergedData to only include items with non-matching skillid or behaviorid
              const combinedData = mergedData.filter((item) => {
                const hasMatch = transformedData.some(
                  (savedItem) =>
                    savedItem.Answer === item.skillid ||
                    savedItem.Answer === item.behaviorid
                );

                return !hasMatch;
              });

              setFormData(combinedData);
              console.log(combinedData);
            } else {
              setFormData(mergedData);
            }
          })
          .catch((error) => console.log("error", error));
      } else {
        console.error("Missing driverbehaviour or driverskills array in the API response.");
      }
    })
    .catch((error) => console.log("error", error));
}, []);


const removecount =()=>{
  localStorage.setItem('currentIndex',0);
  localStorage.removeItem('assessment_id');
  window.location.reload();

}
 
 const [page_no, setPageNo] = useState(1);
 
  const handleNextClick = () => {
    // Check if at least one item has been selected in the current set
     let newarray = [];
      // if (selectedItems.slice(0, 5).every(item => item === undefined)) {
        const checkedRadios = document.querySelectorAll('input.valid:checked');
        const checkedValuesArray = Array.from(checkedRadios).map((radio) => radio.value);

        const newSelectedItems = [...selectedItems];

        checkedValuesArray.slice(0, 5).forEach((value, index) => {
          newSelectedItems[index] = value;
  
        });


        newarray = newSelectedItems;
       
      // }     

        console.log(newarray); 

        setPageNo(page_no + 1);

        const  currentIndexlocal =  localStorage.getItem('currentIndex');
        if(currentIndex ==75){

        show_score();

        setShowFirstSection(false);
        setShowSecondSection(false);
        setShowThirdSection(false);
        setShowfourSection(true);
        sendEmail();

        localStorage.setItem('currentIndex',currentIndex);

        }else if(currentIndexlocal ==75){

        show_score();
        setShowFirstSection(false);
        setShowSecondSection(false);
        setShowThirdSection(false);
        setShowfourSection(true);


        }

        var newcurrentIndexlocal= parseInt(currentIndexlocal) + 5;

        if(newcurrentIndexlocal <=75 ){
          localStorage.setItem('currentIndex',newcurrentIndexlocal);
        }else if(currentIndexlocal == null){

           localStorage.setItem('currentIndex',5);

        }
        


     
       
       if (newarray.every(item => item)) {
      // Increment the current index, wrapping around if needed
      setCurrentIndex((prevIndex) => (prevIndex + setsToShow) % formData.length);
      // Clear the selected items for the next set
      setSelectedItems(Array(setsToShow).fill(undefined));
      // Reset the validation message
      setValidationMessage('');
      scrollToTop();

     const userid = localStorage.getItem('userid');
     const assessment_id = localStorage.getItem('assessment_id');

    const assessmentData = {
    userid: userid,
    assessmentid: assessment_id,
    selectedItems: newarray,
    page_no: page_no,
    assessmentquestion: formData.slice(currentIndex, currentIndex + setsToShow).map((item, index) => {
    const isSkill = item.skillid === newarray[index];
    const isBehavior = item.behaviorid === newarray[index];
    const point = isSkill ? 1 : (isBehavior ? 4 : 0);

    return {
      Question_skill: item.skill,
      Skills: item.skillid, // Use the appropriate property based on your data structure
      Question_behaviour: item.behavior,
      behaviour: item.behaviorid, // Use the appropriate property based on your data structure
      Answer: newarray[index], // Use the selected item value
      point: point,
        };
      }),
    };

      // Define the API endpoint URL
      const apiUrl = API_BASE_URL+"save_assessment";

      // Send the data to the API using a POST request
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle the API response data here
          console.log('API response:', data);
        })
        .catch(error => {
          // Handle errors here
          console.error('Error:', error);
        });
    

    } else {
      // Show validation message if at least one option is not selected in the current set
      setValidationMessage('Please select at least one option from each set before proceeding.');
    }
     


    
  };

  const handleItemChange = (index, value) => {
    // Update the selected items state when an item is selected
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = value;
    setSelectedItems(newSelectedItems);

    // Check if all options in the current set are now selected
    if (newSelectedItems.every(item => item !== undefined)) {
      // If all options are selected, clear the validation message
      setValidationMessage('');
    }
  };

  const handleProceedClick = () => {
    setShowFirstSection(false);
    setShowSecondSection(true);
    setShowThirdSection(false);
  };

  function showass(){
    setShowFirstSection(false);
    setShowSecondSection(false);
    setShowThirdSection(false);
    setShowfiveSection(true);
  }

  function show_score(){

    const  assessment_id=  localStorage.getItem('assessment_id');
       var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "assessmentid": assessment_id
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://casaahaanahotels.com/sb_assessment_score", requestOptions)
      .then(response => response.text())
      .then(result => {

        const parsedResult = JSON.parse(result); // Parse the response as JSON

       const sb_stars = parsedResult.sb_stars;

       console.log(sb_stars);

     

       setsbstars(sb_stars);



      })
      .catch(error => console.log('error', error));
  }

  const handleStartAssessmentClick = () => {
    setShowFirstSection(false);
    setShowSecondSection(false);
    setShowThirdSection(true);


    const  currentIndexlocal=  localStorage.getItem('currentIndex');
   if(currentIndexlocal == 75){
   
 
   show_score();

    setShowFirstSection(false);
    setShowSecondSection(false);
    setShowThirdSection(false);
    setShowfiveSection(true);



  }

   const userid = localStorage.getItem('userid');
    const assessment_id = localStorage.getItem('assessment_id');

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userid: userid,
      assessmentid: assessment_id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch("https://casaahaanahotels.com/search_assessments", requestOptions)
      .then(response => response.json()) // Parse the response to JSON
      .then(result => {
        const is_complete = result.is_complete;

        console.log(is_complete);

        // if (is_complete == true) {

        //  setTimeout(showass,500);
        //  show_score();
        // }
      })
      .catch(error => console.log('error', error));

  };
const siteurl= localStorage.getItem('partnerurl');
    useEffect(() => {
    if (showfiveSection && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Update countdown every 1000ms (1 second)

      return () => {
        clearTimeout(timer); // Clear the timer when the component unmounts
      };
    } else if (showfiveSection && countdown === 0) {
      // Redirect to the partner site when countdown reaches 0
      window.location.href = siteurl;
    }
  }, [countdown, showfiveSection]);


   useEffect(() => {

  
  
    if (showfourSection && countdown1 > 0) {
      const timer = setTimeout(() => {
        setCountdown1(countdown1 - 1);
      }, 1000); // Update countdown every 1000ms (1 second)

      return () => {
        clearTimeout(timer); // Clear the timer when the component unmounts
      };
    } else if (showfourSection && countdown1 === 0) {
      // Redirect to the partner site when countdown reaches 0
      window.location.href = siteurl;
    }
  }, [countdown1, showfourSection]);


useEffect(() => {


  const imageFile = localStorage.getItem("patnerImg");
  var existingImg = document.getElementById('bandingImg');

if (!existingImg) {
  // If it doesn't exist, create the image and append it
  var img = document.createElement('img');
  img.src = 'https://sb.brandingbrandz.in/uploadimage/' +imageFile;
  img.width = 136;
  img.height = 48;
  img.alt = 'Star Behaviors Logo';
  img.id = 'bandingImg'; // Set an ID to identify the image

  var div = document.getElementById('banding');
  div.appendChild(img);
}

     var div1 = document.getElementById('st');
    var img = document.getElementById('imgId'); // Replace 'imgId' with the actual id of your img element.

    if (div1 && img) {
      div1.removeChild(img); // Remove the 'img' element from 'div1'.
    }

  });




const sendEmail = async () => {
   const imageFile = localStorage.getItem("patnerImg");
   const useremail = localStorage.getItem("useremail");

    const getStarImageURL = (sbstars) => {
    if (sbstars >= 1 && sbstars <= 1.75) {
      return "https://sb.brandingbrandz.in/uploadimage/onestar.png";
    } else if (sbstars >= 1.76 && sbstars <= 2.95) {
      return "https://sb.brandingbrandz.in/uploadimage/twostar.png";
    } else if (sbstars >= 3 && sbstars <= 3.75) {
      return "https://sb.brandingbrandz.in/uploadimage/three_star.png";
    } else if (sbstars >= 3.76 && sbstars <= 4.5) {
      return "https://sb.brandingbrandz.in/uploadimage/fourstar.png";
    } else if (sbstars >= 4.51 && sbstars <= 5) {
      return "https://sb.brandingbrandz.in/uploadimage/fivestar.png";
    } else {
      return ""; // Handle other cases if needed
    }
  };


   const starImageURL = getStarImageURL(sbstars);

   
  const data = {
    personalizations: [
      {
        to: [
          {
            email: useremail
          }
        ],
        subject: 'Assessment Score: It`s in the Stars'
      }
    ],
    from: {
      email: 'codetrack2@gmail.com'
    },
   content: [
      {
        type: 'text/html',
        value: `<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#007BFF">
        <tbody><tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                    <tbody><tr style="
    background: #047bfb;">
                        <td align="left" valign="middle" width="25%" style="
    margin-left: -54%;"><img src="https://sb.brandingbrandz.in/${imageFile}" width="136" height="48" alt="Star Behaviors Logo" jslog="138226; u014N:xr6bB; 53:WzAsMF0." style="
    margin-left: -100%;
    margin-top: 10px;"></td>
                        <td align="right" width="75%">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table><p align="center"><b>Assessment Completed</b><br/>
      </p><p>You have successfully completed the assessment for [Part 1]</p><p><img style="display:block" alt="Star Score" title="Star Score" src="${starImageURL}" width="240" height="40" class="CToWUd" data-bit="iit"></p><p>Your 4-star rating signifies your very good alignment with the
        required behavioral traits for this position, strongly
        indicating a high likelihood of long-term satisfaction and
        fulfillment in this career. Individuals receiving a 4-star
        rating are
        very well-suited for both formal (e.g., post-secondary training)
        and informal (on-the-job) training programs.&nbsp;</p><p>Whether you're entering the job market for the first time,
        considering a career change, or already established in this
        field, you can confidently pursue this profession. Prospective
        employers are likely to be eager to explore training and
        employment opportunities with candidates of your caliber.&nbsp;</p><p>Thank you for allowing us to assist you in discovering the
        career that's right for you. Your success in life is in the
        stars.<br/>
      </p><div>Star Behaviors, LLC</div>`
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
    <div className="container">

      {showFirstSection && (
          <section>


            {/* First Section Content */}
            <div className="content">
           <div className="heading">
              <h2>Assessment - Instructions</h2>
            </div>
            <div className="main-content">
              <p>
                Here at TTJ Recruiting, we believe it is important for you, the professional driver, to have the opportunity to separate yourself apart from the "rest of the pack" and show that you have the Qualities, Core Values & Behaviors that we are looking for in "Top Performing Drivers".
                To apply for one of our world-class driving positions, please complete our online assessment and application.
                Once completed, a member of our Driver Recruiting Team will contact you shortly to outline the different opportunities available to you.
              </p>
            </div>
              <button className="button" onClick={handleProceedClick}>
                Proceed To Assessment
              </button>
            </div>
          </section>
        )}

      {showSecondSection && (
          <section>
            {/* Second Section Content */}
            <div className="content">
             <div className="heading">
              <h2>Assessment - Instructions</h2>
            </div>
            <div className="main-content">
              <p>
                The assessment is broken into 5 questions per step.
                Please select the statement that you most closely identify with, for each of the pairings.
                Once all the steps are completed, please submit your answers by selecting SUBMIT.
                Please allow approximately 10 minutes to complete the assessment.
              </p>
            </div>
              <button className="button" onClick={handleStartAssessmentClick} id="pending">
                {buttonname}
              </button>
            </div>
          </section>
        )}

       {showThirdSection && (
          <section>


            {/* Third Section Content */}
            
              <div className={styles.main_container}>
      <div className="container">
        <div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">
          <div className="assessment-page">
          {/* Scroll to top button */}
         <p>Page Number:-{page_no}</p>
            <div className="card">
              <h4 className="card-header text-uppercase">Assessment</h4>

              <div className="card-body">
                <form>
{formData.length > 0 && (

  <div>
    {formData.slice(currentIndex, currentIndex + setsToShow).map((item, index) => {
      // const isSkillFirst = Math.random() >= 1; // Randomly decide the order (50% chance of true)
      
       
      return (
        <div key={index} className="card mb-3">
          <div className="card-body" style={{ maxWidth: '600px',display: 'flex',flexDirection: 'column'}}>
            <div className="form-check" style={{ order: item.randomInteger }}>
              <input
                className="form-check-input valid"
                type="radio"
                name={`selectedItem${index}`} // Use the same name for this set
                id={`${item.skill}-radio`}
                value={item.skillid}
                valuename={item.skill}
                
                onChange={() => handleItemChange(index, item.skillid)}
                // checked={selectedItems[index] === item.skillid ? item.isSkillChecked : false}


                checked={selectedItems[index] === item.skillid}

              
                data-ans={item.skillname}
              />
              <label className="form-check-label" htmlFor={`${item.skill}-radio`}>
                {item.skill}
              </label>
            </div>
            <div className="form-check" style={{ order: item.randomInteger1 }}>
              <input
                className="form-check-input valid"
                type="radio"
                name={`selectedItem${index}`} // Use the same name for this set
                id={`${item.behavior}-radio`}
                value={item.behaviorid}
                valuename={item.behaviour}
              
                onChange={() => handleItemChange(index,item.behaviorid)}

                // checked={selectedItems[index] === item.behaviorid ? item.isBehaviorChecked : false} // Use the saved data
                checked={selectedItems[index] === item.behaviorid}
                data-ans={item.behaviorname}
              />
              <label className="form-check-label" htmlFor={`${item.behavior}-radio`}>
                {item.behavior}
              </label>
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}





  {validationMessage && (
    <div className="alert alert-danger" role="alert">
      {validationMessage}
    </div>
  )}

  <hr />

  <div>
    <button
      className="btn btn-primary"
      type="button"
      onClick={handleNextClick}
      // disabled={validationMessage !== ''}
    >
      Next &gt;
    </button>
  </div>
</form>

              </div>

            </div>
          </div>
        </div>

      </div>
      <button
        className={`btn btn-primary back-to-top ${showBackToTop ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
            
          </section>
        )}



      {showfourSection && (
          <section>
            {/* Second Section Content */}
            <div className="content">
             <div className="heading">
              <h2>Assessment - Completed</h2>
            </div>
            <div className="main-content">
              <p>
                Congratulations and Thank You for completing Part 1 of our Two Part Application Process.</p>
                <br/>
         <p> You will now be directed to our On-line Drver Employment Application.</p>
          <br/>

          <p>Please complete the application and a member of our Driver Recruting Team will be contacting you shortly to discuss the options, opportunities, and driving stitions available to you</p>
          <br/>
         <p>Thank you. We look forward to speaking with you shortly.</p>


{/*{sbstars >= 1 && sbstars <= 1.75 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="1 Star Score"
      title="1 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/onestar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    <button type="button" onClick={removecount}>Try Again</button>
  </div>
)}
{sbstars >= 1.76 && sbstars <= 2.95 && (

  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="2 Star Score"
      title="2 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/twostar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    <button type="button" onClick={removecount}>Try Again</button>

  </div>
)}
{sbstars >= 3 && sbstars <= 3.75 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="3 Star Score"
      title="3 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/three_star.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown1 > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown1} seconds...
      </div>
    )}
  </div>
)}
{sbstars >= 3.76 && sbstars <= 4.5 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="4 Star Score"
      title="4 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/fourstar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown1 > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown1} seconds...
      </div>
    )}
  </div>
)}
{sbstars >= 4.51 && sbstars <= 5 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="5 Star Score"
      title="5 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/fivestar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown1 > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown1} seconds...
      </div>
    )}
  </div>
)}*/}

      </div>
       
      </div>
          </section>
        )}

         {showfiveSection && (
          <section>
            {/* Second Section Content */}
            <div className="content">
             <div className="heading">
              <h2>Assessment - Completed</h2>
            </div>
            <div className="main-content">
            <p>Congratulations</p>
              <p>
              
              You have already completed an assessment within the Star Behaviors network, within the past 12 months.
                <br/>
              Please proceed to Step 2 in the application process.

                </p>

                {countdown > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown} seconds...
      </div>
    )}

              {/*  {sbstars >= 1 && sbstars <= 1.75 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="1 Star Score"
      title="1 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/onestar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    <button type="button" onClick={removecount} style={{marginLeft: '-62%'}}>Try Again</button>
  </div>
)}
{sbstars >= 1.76 && sbstars <= 2.95 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="2 Star Score"
      title="2 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/twostar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    <button type="button" onClick={removecount} style={{marginLeft: '-62%'}}>Try Again</button>
  </div>
)}
{sbstars >= 3 && sbstars <= 3.75 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="3 Star Score"
      title="3 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/three_star.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown} seconds...
      </div>
    )}
  </div>
)}
{sbstars >= 3.76 && sbstars <= 4.5 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="4 Star Score"
      title="4 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/fourstar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown} seconds...
      </div>
    )}
  </div>
)}
{sbstars >= 4.51 && sbstars <= 5 && (
  <div style={{ marginLeft: '36%' }}>
    <img
      style={{ display: 'block' }}
      alt="5 Star Score"
      title="5 Star Score"
      src="https://sb.brandingbrandz.in/uploadimage/fivestar.png"
      width="240"
      height="40"
      className="CToWUd"
      data-bit="iit"
    />
    {countdown > 0 && (
      <div className="alert alert-success" role="alert">
        You will be redirected to the partner site in {countdown} seconds...
      </div>
    )}
  </div>
)}*/}

     
             
            </div>
                 
            </div>
          </section>
        )}

    </div>
  );
}

export default AssessmentForm;
