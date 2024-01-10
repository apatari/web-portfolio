import React from "react";
import Icons from "./Icons";
import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <div className="bg-dark d-flex" >
            <Col lg={4}></Col>
            <Col className="m-3" lg={4}>
                <Row className="mx-auto justify-content-center" >
                    <Icons align={"justify-content-center"} />
                    
                </Row>
                <Row className="mx-auto text-light justify-content-center">
                    Designed and built by Andy Patari - 2024
                </Row>
                

            </Col>
            <Col lg={4}></Col>

        </div>
    )
}

export default Footer