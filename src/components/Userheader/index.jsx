import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const user = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
        // window.location.reload();
    };

    return (
        <>
            <div className="navbar navbar-light bg-primary p-2 d-none" ><img
                src="https://www.truckthisjob.com/images/logo.png" width="136" height="48" alt="Star Behaviors Logo" />
                {user &&
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="nav-link btn btn-link text-white" onClick={handleLogout}>Logout</button>
                    </div>
                }
            </div>

        </>
    );
};

export default Header;
