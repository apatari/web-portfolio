import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 
import { faLinkedin, faGithub, faHashnode, } from '@fortawesome/free-brands-svg-icons'

function Icons({ align }) {
    return (
        <div className={`d-flex ${align}`} >
            <a href="https://www.linkedin.com/in/andrew-patari/" target="blank">
                <FontAwesomeIcon  className="me-4 my-3 fs-2 text-white" icon={faLinkedin} />
            </a>
            <a href="https://github.com/apatari" target="blank">
                <FontAwesomeIcon  className="m-4 my-3 fs-2 text-white" icon={faGithub} />
            </a>
            <a href="https://dundermethodpaperco.hashnode.dev/" target="blank">
                <FontAwesomeIcon  className="m-4 my-3 fs-2 text-white" icon={faHashnode} />
            </a>
            <a href="mailto:andy.patari@gmail.com" target="blank">
                <FontAwesomeIcon  className="ms-4 my-3 fs-2 text-white" icon={faEnvelope} />
            </a>
            
        </div>
    )
}

export default Icons