import { API_BASE_URL } from '../config/serverApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/successHandler';

// export const countryname = async (countrys) => {
//   try {
//     const response = await fetch(API_BASE_URL + `ttjcitylist`, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(countrys), // body data type must match "Content-Type" header
//     });

//     const { status } = response;
//     const data = await response.json();

//     // successHandler(
//     //   { data, status },
//     //   {
//     //     notifyOnSuccess: false,
//     //     notifyOnFailed: true,
//     //   }
//     // );
//     return data;
//   } catch (error) {
//     return errorHandler(error);
//   }
// };

export const statename = async ({value}) => {
//    console.log(value);
  try {
    const raw = JSON.stringify({
      "country" : value
     
    });
    const response = await fetch(API_BASE_URL + `ttjstatelist`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

     
      body: raw,
    });
    // console.log(response);
    const { status } = response;
    const data = await response.json();
    console.log(data);
    // successHandler(
    //   { data, status },
    //   {
    //     notifyOnSuccess: false,
    //     notifyOnFailed: true,
    //   }
    // );
    return data;
  }
   catch (error) {
    return errorHandler(error);
  }
};

export const cityname = async ({values}) => {
    // console.log(values);
   try {
     const raw = JSON.stringify({
       "state" : values
      
     });
     const response = await fetch(API_BASE_URL + `ttjcitylist`, {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       headers: {
         'Content-Type': 'application/json',
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
 
      
       body: raw,
     });
    //  console.log(response);
     const { status } = response;
     const data = await response.json();
     console.log(data);
     // successHandler(
     //   { data, status },
     //   {
     //     notifyOnSuccess: false,
     //     notifyOnFailed: true,
     //   }
     // );
     return data;
   }
    catch (error) {
     return errorHandler(error);
   }
 };


