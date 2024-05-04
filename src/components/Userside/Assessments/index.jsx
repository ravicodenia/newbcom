import './app.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import { API_BASE_URL } from '../../../config/serverApiConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function AssessmentForm() {
 
const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);


  const [formData, setFormData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const setsToShow = 5; // Number of sets to show at a time
  const [selectedItems, setSelectedItems] = useState(Array(setsToShow).fill(undefined)); // State to track selected items
  const [validationMessage, setValidationMessage] = useState(''); // Validation message

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

  useEffect(() => {
    // Add an event listener for the scroll event when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(API_BASE_URL+"/get_random_records")
      .then(response => response.json())
      .then(data => {
        // Combine driverbehaviour and driverskills into a single array with both skill and behavior
        const mergedData = [];
        for (let i = 0; i < data.driverbehaviour.length; i++) {
          mergedData.push({
            skill: data.driverskills[i].skills,
            skillid: data.driverskills[i].id,
            behavior: data.driverbehaviour[i].behaviour,
            behaviorid: data.driverbehaviour[i].id,
          });
        }
        setFormData(mergedData);
      })
      .catch(error => console.log('error', error));
  }, []);

  const handleNextClick = () => {
    // Check if at least one item has been selected in the current set
    if (selectedItems.every(item => item !== undefined)) {
      // Increment the current index, wrapping around if needed
      setCurrentIndex((prevIndex) => (prevIndex + setsToShow) % formData.length);
      // Clear the selected items for the next set
      setSelectedItems(Array(setsToShow).fill(undefined));
      // Reset the validation message
      setValidationMessage('');
      scrollToTop();
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

  const handleStartAssessmentClick = () => {
    setShowFirstSection(false);
    setShowSecondSection(false);
    setShowThirdSection(true);
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
              <button className="button" onClick={handleStartAssessmentClick}>
                Start Assessment
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
         
            <div className="card">
              <h4 className="card-header text-uppercase">Assessment</h4>
              <div className="card-body">
                <form>
                  {formData.length > 0 && (
                    <div>
                      {formData.slice(currentIndex, currentIndex + setsToShow).map((item, index) => (
                        <div key={index} className="card mb-3">
                          <div className="card-body" style={{ maxWidth: '600px' }}>
                            <div className="form-check">
                              <input
                                className="form-check-input valid"
                                type="radio"
                                name={`selectedItem${index}`} // Use the same name for this set
                                id={`${item.skill}-radio`} // Use unique IDs
                                value={item.skillid}
                                checked={selectedItems[index] === item.skillid}
                                onChange={() => handleItemChange(index, item.skillid)}
                              />
                              <label className="form-check-label" htmlFor={`${item.skill}-radio`}>
                               {item.skill}
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input valid"
                                type="radio"
                                name={`selectedItem${index}`} // Use the same name for this set
                                id={`${item.behavior}-radio`} // Use unique IDs
                                value={item.behaviorid}
                                checked={selectedItems[index] === item.behaviorid}
                                onChange={() => handleItemChange(index, item.behaviorid)}
                              />
                              <label className="form-check-label" htmlFor={`${item.behavior}-radio`}>
                                 {item.behavior}


                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
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
                      disabled={validationMessage !== ''}
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
    </div>
  );
}

export default AssessmentForm;
