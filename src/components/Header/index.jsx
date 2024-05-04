import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
    const user = localStorage.getItem("token");
    const navigate = useNavigate();
   


     
     const user1 = localStorage.getItem("token1");
    

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
        // window.location.reload();
        
    };

     const handleRegister = () => {
        const reg = localStorage.getItem("reg");
        
        navigate('/landingpage/register/'+reg);
        // window.location.reload();
    };

     const handleLogout1 = () => {
        localStorage.removeItem("token1");
        navigate('landingpage/login');
        // window.location.reload();
        
    };
  const reg = localStorage.getItem("reg");

    return (
        <>
            <div className="navbar navbar-light bg-primary p-2 d-none" id="ref">
             
               <div id="st"><img
                src="https://app.starbehaviors.com/StarBehaviorsLogo.jpg" id="imgId" width="136" height="48" alt="Star Behaviors Logo" /></div>
                     <a href={`https://sb.brandingbrandz.in/landingpage/${reg}`} style={{ marginLeft: "-68%" }}>
                      <div id="banding"></div>
                    </a>
                   
                {user && 
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="nav-link btn btn-link text-white" onClick={handleLogout} id="logout">Logout</button>
                    </div>
                }

                {user1 && user ==null && 

                <div className="d-flex justify-content-end align-items-center" id="log">
                          <button className="nav-link btn btn-link text-white" onClick={handleLogout1} id="logout1">Logout</button>
                 </div>
                }

                {user1 == null && user ==null &&

                <div className="d-flex justify-content-end align-items-center" id="register">
                  <button className="nav-link btn btn-link text-white" onClick={handleRegister} id="reg">Register</button>
                 </div>
                }
            

               

               
             
               
            </div>

        </>
    );
};

export default Header;
