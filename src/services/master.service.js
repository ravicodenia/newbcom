import { API_BASE_URL } from '../config/serverApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/successHandler';




export const homeScreenShowHide = async ({ value }) => {
  try {
    const url = `https://bcom-services.pierofcloudtech.com/api/Home/GetAgentConfigItems?agentId=${value}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const homeBooking = async ({ value }) => {
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Home/GetLatestTransactionsByAgentId?agentId=${value}`;
    
   
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const OneWaySearch = async () => {
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Airport/GetAirportsList`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};


export const GetAirlinesList = async () => {
  try {
    const url =  `https://bcom-services.pierofcloudtech.com/api/Airline/GetAirlinesList`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const loginAuth = async ({userName,password}) => {
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/Login?Username=${userName}&Password=${password}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const verifyOtp = async ({userName,otp}) => {
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/VerifyOtpAndGetToken?username=${userName}&otp=${otp}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};

export const resendOtp = async ({userName}) => {
  try {
    const url =  `https://keycloak.bcom-services.pierofcloudtech.com/api/Auth/ResendOtp?username=${userName}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Or handle the error appropriately
  }
};



