
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer >
            <div>
                <a href="https://www.linkedin.com/in/emmadavies2/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/this_girl_shall_code/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div> 
        </footer>
    );
};

export default Footer;