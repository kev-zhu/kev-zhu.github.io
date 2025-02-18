import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" path="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
    <li>
      <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kevinzhuu/'>
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href='https://github.com/kev-zhu/'>
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href= './Resume.pdf'>
        <FontAwesomeIcon icon={faFile} color="#4d4d4e"/>
      </a>
    </li>
    </ul>
  </div>
);

export default Sidebar;