import React from "react";
import { Image, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faDownload } from "@fortawesome/free-solid-svg-icons";
 import avatar from "../images/avatar.png"


 




function About() {
    return (
        <div className=" bg-dark  py-3 my-3" id="about" style={{scrollMarginTop: "70px"}}   >

            <Row className="m-3 p-4"  >
                <Col lg={3} >
                    <Image src={avatar} alt="picture of me" className="m-2 ms-5" roundedCircle style={{width: '65%'}} />
                </Col>
                <Col lg={7} >
                    <Row>
                        <h3 className="text-secondary m-1" >About Me</h3>
                        <div className="fs-5 text-light m-2"  >

                            <p> An inquisitive and determined problem solver, I was fortunate enough to spend 11 
                                years working as a high school 
                            science teacher at a wonderful public school.  I believe that the times of transition 
                            in my life are especially dense with memory and learning. Going to graduate school, being 
                            a first-year teacher, becoming a father - all of these made me a better, more resilient 
                            person.  This spirit of growth has brought me to my studies at the Flatiron School to 
                            prepare for a new career in software engineering.  I am excited to continue developing a
                            set of skills that allow me to create authentic, technically complex work.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                        <h3 className="text-secondary m-1" >Contact</h3>
                        <div className="fs-5 text-light m-2"  >

                            <div>Andy Patari</div>
                            <div>Brattleboro, VT</div>
                            <p><a href="mailto:andy.patari@gmail.com" style={{textDecoration: 'none', color: 'grey'}} > andy.patari@gmail.com</a></p>
                        </div>
                        </Col>
                        <Col>
                            <a href="https://docs.google.com/document/d/1J49rVSlE2Yf9W-DRMMX8jq6yXgtcr05vsmdguRUZan4/export?format=pdf" >
                            <Button className="mt-4 btn-secondary" > <FontAwesomeIcon className="mx-2" icon={faDownload} /> Download Resume</Button>
                        </a>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            
            
            
            <div>
                
            
            
            </div>
        </div>
    )
    
}

export default About