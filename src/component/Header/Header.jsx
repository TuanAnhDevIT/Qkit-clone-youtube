import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars, faMicrophone, faVideo, faBell } from '@fortawesome/free-solid-svg-icons';
import JackPng from '../../images/Jack.png'
import { Link } from "react-router-dom";

const Header = ({ changeSidebar, setChangeSidebar }) => {

    const toggleSidebar = () => {
        setChangeSidebar(!changeSidebar);
    };

    return (
        <>
            <nav className="flex-div header-container">
                <div className="nav-left flex-div">
                    <FontAwesomeIcon icon={faBars} className="icon menu-icon" onClick={toggleSidebar} />
                    <FontAwesomeIcon icon={faYoutube} className="icon logo" /><Link to="/"><h1>Youtube</h1> </Link>
                </div>
                <div className="nav-middle flex-div">
                    <div className="search-box flex-div">
                        <input type="text" placeholder="Search" />
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </div>
                    <FontAwesomeIcon icon={faMicrophone} className="icon mic-icon" />
                </div>
                <div className="nav-right flex-div">
                    <FontAwesomeIcon icon={faVideo} className="icon" />
                    <FontAwesomeIcon icon={faBell} className="icon" />
                    <img src={JackPng} className="user-icon" />
                </div>
            </nav>
        </>
    )
}

export default Header;