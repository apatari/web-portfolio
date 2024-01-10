import React from "react";
import "./body.css"
import Pholder from "./Pholder";
import Blog from "./Blog";
import About from "./About";
import Projects from "./Projects";
import Icons from "./Icons"
import { Row, Col } from "react-bootstrap";
import Skills from "./Skills";

function Body() {
    return (
        <div className="backg" id="top" style={{scrollMarginTop: "100px"}} >
            <Col className="ms-3">
                
            
            <Row className="pt-3 ms-3 " >
                <h1 className="display-2" >Andy Patari</h1>
                
            </Row>
            <Row className="ms-3">
                <h3 className="text-secondary  " >A software engineer from southern Vermont</h3>
                
            </Row >
            <Row className="ms-3">
                <Icons />
            </Row>
            </Col>
            <About />

            <Projects/>
            <Skills />
            
            <Blog />
   
        </div>
    )
    
}

export default Body