import React from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    props.setIsLoggedIn(false)
    props.setCurrentUser(false)


    navigate('/Home')
}
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
          <Link to="/Activities">
          <button>Activities</button>
          </Link>
         </div>
         {props.isLoggedIn ? 
         <div className="userLinks">
         <Link to="UserRoutines">
         <button>My routines</button>
         </Link>
         <button onClick={handleLogout}>Logout</button>
        </div> : 
          <div className="userLinks">
          <Link to="Login">
          <button>Login</button>
          </Link>
          <Link to="SignUp">
          <button>Sign up</button>
          </Link>
         </div>}
    </div>
    <Outlet />
  </>
  );
};

export default Navbar;