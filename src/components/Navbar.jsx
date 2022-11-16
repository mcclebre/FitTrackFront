import React from "react";
import { Link, Outlet} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
         <h2 id="siteName">Fitness Tracker</h2>
         <div className="pageLinks">
          <Link to="Home">
          <button>Home</button> 
          </Link>
          <Link to="Routines">
          <button>Routines</button>
          </Link>
          <Link to="Activities">
          <button>Activities</button>
          </Link>
         </div>
         <div className="userLinks">
          <Link to="Login">
          <button>LOGIN</button>
          </Link>
          <Link to="Sign">
          <button>SIGN UP</button>
          </Link>
         </div>
    </div>
    <Outlet />
  </>
  );
};

export default Navbar;