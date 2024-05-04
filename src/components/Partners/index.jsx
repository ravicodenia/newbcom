import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import * as apiService from '../../services';

const Partners = () => {

    useEffect(() => {
	 	 localStorage.removeItem("token1");
        fetchData();

    }, []); 

    // const pathname = window.location.pathname;

    // // Split the pathname by '/' to get an array of segments
    // const segments = pathname.split('/');

    // // Find the segment that represents the email address
    // // In this case, it's the last segment
    // const lastSegment = segments[segments.length - 1];
     
	const [companyList, setCompanyList] = useState('');
	const [data, setData] = useState([]);
    const user = localStorage.getItem("admin_type");
	

	const fetchData = async (e) => {
        const data = await apiService.allcompanylist({ companyList });
        console.log(data.user_data);
        setData(data.user_data);
       

    };

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    

	return (
		<>
		<div className={styles.main_container}>
		<div className="container">
		<div className="position-relative d-flex flex-column justify-content-center align-items-center py-3 px-2">

	    <div className="partners-page" style={{ width: '40%' }}><div className="card"><h4 className="card-header text-uppercase">Partners</h4>

	   <div className="card-body">
	    {user==1 &&
		   <button className="btn btn-primary" type="button">
		   
		   <Link to="/partners/add-partnerform" style={{ color: "#fff" }}>Add</Link>
		   </button>
        }

	   <div className="mb-3"></div>
	   <ul className="list-group list-group-flush nav flex-column" id="adminuser">
	   	
	   	{data?.map((item) => {
		  return (
		    <li className="list-group-item nav-link d-flex align-items-center">
		      <img className="rounded-3" src={`https://sb.brandingbrandz.in/uploadimage/${item.imageFile}`} style={{ width: "90px", height: "30px" }} alt="TTJ Recruiting Logo" />
		      <Link className="nav-link text-decoration-underline stretched-link" to={`partnerdetails/${item.adminemail}`}>
		        {item.companyname}
		      </Link>
		    </li>
		  );
		})}

	   </ul>
	    </div>
	    </div>
	    </div>
	    </div>

		</div>
		</div>
		</>
	);
};

export default Partners;
