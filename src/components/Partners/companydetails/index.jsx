import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles.module.css";
import { API_BASE_URL } from '../../../config/serverApiConfig';

function DynamicTable() {
  const [companyData, setCompanyData] = useState([]);


  useEffect(() => {
  const apiUrl = API_BASE_URL+"/sb_showcompanyusers";
  const requestData = {
    adminemail: "mrinal@cretirial.com",
  };

  axios.post(apiUrl, requestData)
    .then((response) => {
      console.log("API response:", response.data); // Log the API response
      if (Array.isArray(response.data.user_data)) {
        setCompanyData(response.data.user_data);
      } else {
        console.error("API response.user_data is not an array:", response.data.user_data);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

  // Function to handle deletion of a company
  const handleDelete = (id) => {
    const updatedCompanyData = companyData.filter((company) => company.id !== id);
    setCompanyData(updatedCompanyData);
  };

  return (
     <div className={styles.main_container}>
      {/*<h1>Dynamic Company Table</h1>*/}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Site URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companyData.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.companyName}</td>
              <td>{company.admin_first_name}</td>
              <td>{company.admin_last_name}</td>
              <td>{company.contactPhone}</td>
              <td>{company.adminemail}</td>
              <td>
                <a href={company.admin_site_url} target="_blank" rel="noopener noreferrer">
                  {company.admin_site_url}
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
