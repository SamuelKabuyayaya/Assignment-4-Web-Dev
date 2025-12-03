//displays the navigation bar with links to different sections of the site
import {Link} from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";  
import { useEffect, useState } from "react";


function Navbar(){

const location = useLocation();
const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser(null);
    window.location.href = "/"; 
  };

  const disableScrollLinks =
    location.pathname === "/signin" || location.pathname === "/signup";

     return (
        <nav className = "navbar">
        
        <div>
            {/*Logo in task Bar */}
            <img src="/img/Logo.jpg" alt="Logo" />
        </div>

        {currentUser && (
        <div className="navbar--user">
          Logged in as <strong>{currentUser.name}</strong>
        </div>
      )}
       
        {/*Navbar Links*/}
        <div className="navbar--items">
        
        <ul>


            <li>
                {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">Home</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
                >
                Home
                </Link>
                )}
            </li>

            <li>
                 {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">About Me</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
                >
                About Me
                </Link>
                )}
            </li>
            <li>
              {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">My Skills</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills--section"
                className="navbar--content"
                >
                My Skills
                </Link>
                )}
            </li>

            <li>
                 {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">Projects</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects--section"
                className="navbar--content"
                >
                Projects
                </Link>
                )}
            </li>
            <li>
                {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">Education</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="education--section"
                className="navbar--content"
                >
                Education
                </Link>
                )}
            </li>
            <li>
                {disableScrollLinks ? (
              <RouterLink to="/" className="navbar--content">Services</RouterLink>
            ) : (
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="services--section"
                className="navbar--content"
                >
                Services
                </Link>
                )}
            </li>

            {/*Contact button on the right side of the navigation bar*/}
        <li>
               {disableScrollLinks ? (
              <RouterLink to="/" className="btn btn-outline-primary">Contact Me</RouterLink>
            ) : (
        <Link
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                Contact Me
        </Link>
        )}
        </li>

        {currentUser ? (
            <li>
              <button onClick={handleLogout} className="btn btn-outline-primary">
                Logout
              </button>
            </li>
          ) : (
            <>   
        <li>
          <RouterLink to="/signin" className="btn btn-outline-primary">
           Login
       </RouterLink>
       </li>

       <li>
         <RouterLink to="/signup" className="btn btn-outline-primary">
          Register
       </RouterLink>
       </li>
       </>
    )}

       </ul>
       </div>
    </nav>
     );
}

export default Navbar;