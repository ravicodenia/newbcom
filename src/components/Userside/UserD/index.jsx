import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles.module.css";
import { Icon } from '@iconify/react';
import { API_BASE_URL } from '../../../config/serverApiConfig';
import { Link } from "react-router-dom";


const DataTable = () => {


    const [data, setData] = useState([]);


  useEffect(() => {
  const apiUrl = API_BASE_URL+"/sb_showdriverusers";
  const requestData = {
    companyid: "10032023050116762586",
  };

  axios.post(apiUrl, requestData)
    .then((response) => {
      console.log("API response:", response.data); // Log the API response
      if (Array.isArray(response.data.user_data)) {
        setData(response.data.user_data);
      } else {
        console.error("API response.user_data is not an array:", response.data.user_data);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

  
  const handleEditClick = (id) => {
    // Implement edit functionality
    console.log(`Edit button clicked for ID ${id}`);
  };

  const handleViewClick = (id) => {
    // Implement view functionality
    console.log(`View button clicked for ID ${id}`);
  };

  return (
    <div className={styles.main_container}>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>State</th>
          <th>Street</th>
          <th>City</th>
          <th>Date of Birth</th>
          <th>Zip</th>
          <th>RegistrationNo</th>
          <th>Score</th>
          <th>Ranking</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.First_Name}</td>
            <td>{item.Middle_Name}</td>
            <td>{item.Last_Name}</td>
            <td>{item.EmailAddress}</td>
            <td>{item.Phone_Number}</td>
            <td>{item.State}</td>
            <td>{item.Street}</td>
            <td>{item.City}</td>
            <td>{item.Date_of_Birth}</td>
            <td>{item.Zip}</td>
            <td>{item.registrationNo}</td>
            <td>{item.score}</td>
            <td>{item.ranking}</td>
            <td>
             <Link to={`/edit/${item.id}`}>Edit</Link>
               {/*<button onClick={() => handleEditClick(item.companyid)}>Edit</button>
             <button onClick={() => handleViewClick(item.companyid)}>View</button>*/}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;
