import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flights from './Flights';
import RecentSearches from "./Flights/recentSearches";
import BannerSection from "./Flights/bannersSection";
import LatestBooking from "./Flights/latestBooking";
import * as apiService from "../../services";

const HomePage = () => {
  const [homeScreenproducts, setHomeScreenproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.homeScreenShowHide({ value: 1 });
        console.log(data.homeScreenShowHide);
        setHomeScreenproducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        <section className="home-sec">
        <ul className="nav nav-tabs d-flex justify-content-center border-0" role="tablist">
                    <li className="nav-item">
                      <a href="#flights" className="nav-link active" role="tab" aria-selected="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>

                      Flights
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#hotels" className="nav-link" role="tab" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"/></svg>
                        Hotels
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </span>
                        </a>
                    </li>

                    <li className="nav-item">
                      <a href="#paymentgateway" className="nav-link" role="tab" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/></svg>
                        Payment Gateway
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </span>
                        </a>
                    </li>

                    

                    
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="flights" role="tabpanel">
                     <Flights/>
                      <RecentSearches/> 
                      <BannerSection/>
                      <LatestBooking/>
                    </div>
                    <div className="tab-pane fade" id="hotels" role="tabpanel">
                     Hotels
                    </div>

                    <div className="tab-pane fade" id="paymentgateway" role="tabpanel">
                    Payment Gateway
                    </div>

                   {/* <div className="tab-pane fade" id="cruise" role="tabpanel">
                    Cruise
                    </div>*/}
                  </div>
                  </section>

    </>
  );
};

export default HomePage;
