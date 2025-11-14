//displays the navigation bar with links to different sections of the site
import {Link} from "react-scroll";
import { Link as RouterLink } from "react-router-dom";


function Navbar(){
     return (
        <nav className = "navbar">
        <div>
            {/*Logo in task Bar */}
        <img src="/img/Logo.jpg" alt="Logo" />
        </div>
       
        {/*Navbar Links*/}
        <div className="navbar--items">
        <ul>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
                >
                Home
                </Link>
            </li>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
                >
                About Me
                </Link>
            </li>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="skills--section"
                className="navbar--content"
                >
                My Skills
                </Link>
            </li>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="projects--section"
                className="navbar--content"
                >
                Projects
                </Link>
            </li>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="education--section"
                className="navbar--content"
                >
                Education
                </Link>
            </li>
            <li>
                <Link 
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="services--section"
                className="navbar--content"
                >
                Services
                </Link>
            </li>
        </ul>
        

        </div>
        {/*Contact button on the right side of the navigation bar*/}
        <Link
                activeClass="navbar--active--content"
                spy={true}
                smooth={true}
                offcet={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                Contact Me
        </Link>

        
        <li>
  <RouterLink to="/signin" className="navbar--content">
    Login
  </RouterLink>
</li>

<li>
  <RouterLink to="/signup" className="navbar--content">
    Register
  </RouterLink>
</li>




        </nav>
     );
}

export default Navbar;