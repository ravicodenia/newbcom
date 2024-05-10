import React,{ useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as apiService from "../../services";


export default function BasicMenu() {

    const [homeScreenShowHide, setHomeScreenShowHide] = useState([]);
    const [dropDownmenuItems, setDropDownMenuItems] = useState([]);
    const [matchedParentIds, setMatchedParentIds] = useState([]);

    const [homeagentProfile, setHomeagentProfile] = useState('');
    const [homelogo, setHomelogo] = useState('');

    

  //   const fetchData = async (e) => {
  //   const data = await apiService.homeScreenShowHide({ value: 1 });
  //   console.log(data.homeScreenShowHide);
  //   setHomeScreenShowHide(data.homeScreenShowHide);

  //   const desiredNames = ['SETTINGS', 'OPS', 'User Management', 'FIN'];
  //   const filteredData = data.menuItems.filter(item => desiredNames.includes(item.name));

  //   // Get the IDs of the filtered data
  //   const filteredIds = filteredData.map(item => item.id);

  //   // Filter again based on matching parentId with filteredIds
  //   const finalFilteredData = data.menuItems.filter(item => {
  //   return desiredNames.includes(item.name) || filteredIds.includes(item.parentId);
  //   });

  //   console.log('filteredData',finalFilteredData);
  //   setDropDownMenuItems(filteredData);
  // };

  const fetchData = async (e) => {
    const data = await apiService.homeScreenShowHide({ value: 1 });
    // console.log(data.homeScreenShowHide);
    setHomeScreenShowHide(data.homeScreenShowHide);
    setHomeagentProfile(data.agentProfile.currentBalance);
    setHomelogo(data.agentProfile.logoPath);

    const desiredNames = ['SETTINGS', 'OPS', 'User Management', 'FIN'];

    // Filter items where name matches desiredNames
    const matchedNames = data.menuItems.filter(item => desiredNames.includes(item.name));

    // Get the IDs of the filtered data
    const filteredIds = matchedNames.map(item => item.id);

    // Filter again based on matching parentId with filteredIds
    const matchedParentIds = data.menuItems.filter(item => filteredIds.includes(item.parentId));

    // console.log('matchedNames', matchedNames);
    // console.log('matchedParentIds', matchedParentIds);

    setDropDownMenuItems(matchedNames);
    setMatchedParentIds(matchedParentIds);
    // set another state for matchedParentIds if needed
};


  useEffect(() => {
    fetchData();
    // console.log(dropDownmenuItems);
  }, []);

  const [walletAnchorEl, setWalletAnchorEl] = useState(null);
  const isWalletOpen = Boolean(walletAnchorEl);

  const handleWalletClick = (event) => {
    setWalletAnchorEl(event.currentTarget);
  };

  const handleWalletClose = () => {
    setWalletAnchorEl(null);
  };

  // State and event handlers for Contact Sales dropdown menu
  const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const isContactOpen = Boolean(contactAnchorEl);

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactClose = () => {
    setContactAnchorEl(null);
  };


// State and event handlers for Support dropdown menu
const [suportAnchorEl, setSupportAnchorEl] = useState(null);
const isSupportOpen = Boolean(suportAnchorEl);

const handleSupportClick = (event) => {
    setSupportAnchorEl(event.currentTarget);
};

const handleSupportClose = () => {
    setSupportAnchorEl(null);
};

// State and event handlers for Bank details dropdown menu
const [bankAnchorEl, setBankAnchorEl] = useState(null);
const isBankOpen = Boolean(bankAnchorEl);

const handleBankClick = (event) => {
    setBankAnchorEl(event.currentTarget);
};

const handleBankClose = () => {
    setBankAnchorEl(null);
};

  return (
    <div>
        <div className="headerMini">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-lg-6 col-md-6 d-flex">
                                <div className="switchLanguage">
                                    <div className="language-menu">
                                        <div className="select-wrapper position-relative">
                                            <select name="picklanguage" className="select">
                                                <option selected="">English</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                            <FontAwesomeIcon icon={faAngleDown } />
                                        </div>
                                    </div>
                                </div>
                                <div className="switchTheme ms-2">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label text-light" for="flexSwitchCheckChecked">DARK</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-6 col-md-6">
                                <div className="topLinks">
                                    {/*<ul>
                                        <li className="hide_mobile"> <a href="#">My Wallet</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Contact Sales</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Support</a>  </li>
                                        <li className="hide_mobile"> <a href="#">Bank Details</a>  </li>
                                        <li> <a href="#">
                                            <span className="notification">                                            <FontAwesomeIcon icon={faBell } />

                                                <span name="notification" className="nc">12
                                                </span></span></a>

                                        </li>
                                    </ul>*/}

                                <ul>
                                <li className="hide_mobile">
                                    <Button
                                        id="wallet-button"
                                        aria-controls={isWalletOpen ? 'wallet-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={isWalletOpen ? 'true' : undefined}
                                        onClick={handleWalletClick}
                                    >
                                        My Wallet<span> &nbsp; USD {homeagentProfile}</span>
                                    </Button>
                                    <Menu
                                        id="wallet-menu"
                                        anchorEl={walletAnchorEl}
                                        open={isWalletOpen}
                                        onClose={handleWalletClose}
                                        MenuListProps={{ 'aria-labelledby': 'wallet-button' }}
                                    >
                                        <MenuItem>
                                        <table className="m-0">
                                            <tr>
                                            <th>Profile Credit:</th>
                                            <td>USD 0</td>
                                            </tr>
                                            <tr>
                                            <td>Wallet Balance:</td>
                                            <td>USD 9999.00</td>
                                            </tr>
                                        </table>
                                        </MenuItem>
                                    </Menu>
                                </li>

                                {/* Contact Sales Dropdown */}
                                {homeScreenShowHide.find((item) => item.text === 'SHOW CONTACT' && item.show) && (
                                <li className="hide_mobile">
                                    <Button
                                    id="contact-button"
                                    aria-controls={isContactOpen ? 'contact-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={isContactOpen ? 'true' : undefined}
                                    onClick={handleContactClick}
                                    >
                                    Contact Sales
                                    </Button>
                                    <Menu
                                    id="contact-menu"
                                    anchorEl={contactAnchorEl}
                                    open={isContactOpen}
                                    onClose={handleContactClose}
                                    MenuListProps={{ 'aria-labelledby': 'contact-button' }}
                                    >
                                        {/* Contact Sales content */}
                                        <div className="row" style={{padding:'0 20px'}}>
                                        <div className="col-6 p-0">
                                            <table className="m-0">
                                            <tbody>
                                                <tr>
                                                <th scope="row">Account Manager</th>
                                                <td>: John Doe</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Land Phone</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Mobile</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">eMail</th>
                                                <td>: jd@outlook.com</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        <div className="col-6 p-0">
                                            <table className="m-0 ">
                                            <tbody>
                                                <tr>
                                                <th scope="row">Sales Manager</th>
                                                <td>: John Doe</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Land Phone</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Mobile</th>
                                                <td>: +91 9305909271</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">eMail</th>
                                                <td>: jd@outlook.com</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </Menu>
                                </li>
                                 )}
                              {homeScreenShowHide.find(item => item.text === "SHOW SALES SUPPORT" && item.show) && (
                              <li className="hide_mobile">
                              <Button
                              id="support-button"
                              aria-controls={isSupportOpen ? 'support-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={isSupportOpen ? 'true' : undefined}
                              onClick={handleSupportClick}
                              >
                              Support
                              </Button>
                              <Menu
                              id="contact-menu"
                              anchorEl={suportAnchorEl}
                              open={isSupportOpen}
                              onClose={handleSupportClose}
                              MenuListProps={{ 'aria-labelledby': 'supoort-button' }}
                              >
                                <table style={{margin:'0 10px'}}>
                                <tbody>
                                    <tr>
                                    <th scope="row">Landphone </th>
                                    <td>  : +91 9305909271</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">Mobile after hours </th>
                                    <td>  : +91 9305909272</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">Support eMail </th>
                                    <td> : support@bcom.com</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Topup eMail </th>
                                    <td> : topup@bcom.com </td>
                                    </tr>

                                </tbody>
                                </table>
                                
                              </Menu>
                          </li>
                              
                              )}
                              {homeScreenShowHide.find(item => item.text === "SHOW BANK DETAILS" && item.show) && (
                                
                                <li className="hide_mobile">
                                <Button
                                id="Bank-button"
                                aria-controls={isBankOpen ? 'bank-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={isBankOpen ? 'true' : undefined}
                                onClick={handleBankClick}
                                >
                                Bank Details
                                </Button>
                                <Menu
                                id="bank-menu"
                                anchorEl={bankAnchorEl}
                                open={isBankOpen}
                                onClose={handleBankClose}
                                MenuListProps={{ 'aria-labelledby': 'bank-button' }}
                                >
                                 <table style={{margin:'0 10px'}}> 
                                        <tbody>
                                            </tbody><thead>
                                            <tr>
                                                <th>Country</th>
                                                <th>Chile</th>
                                            </tr>
                                            </thead>

                                            <tbody><tr>
                                            <td>Bank name 
                                            </td><td>: RBC</td>
                                            </tr>

                                                                    
                                            <tr>
                                            <td>Account name 
                                            </td><td>: Bcom Inc.</td>
                                            </tr>

                                            <tr>
                                            <td>Account number 
                                            </td><td>: 09394847393812</td>
                                            </tr>

                                            
                                            <tr>
                                            <td>SWIFT CODE 
                                            </td><td>: UBHTYYU</td>
                                            </tr>
                                
                                            <tr>
                                            <td>Currency 
                                            </td><td>: USD</td>
                                            </tr>

                                        </tbody>
                                        </table>
                                  
                                </Menu>
                            </li>
                              )}
                              <li>
                                <a href="#">
                                  <span className="notification">
                                    <FontAwesomeIcon icon={faBell} />
                                    <span name="notification" className="nc">12</span>
                                  </span>
                                </a>
                              </li>
                            </ul>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

     
    </div>
  );
}