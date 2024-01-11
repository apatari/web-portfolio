import React from "react";
import { Carousel,  Row, Col } from "react-bootstrap";
import CarouselImage from "./CarouselImage";
import SRSSnew from "../images/SRSSnew.png"
import NNSSnew from "../images/NNSSnew.png"
import BBSSnew from "../images/BBSSnew.png"


function Projects() {
    return (
        <div className="  py-2 mt-2 d-flex" id="projects" style={{scrollMarginTop: "90px"}} >
            <Col className="mx-3 px-4" >
            <Row className="ms-2 ps-3 m-2" >
                <h3>Projects</h3>
                <p className="fs-3" >Click on any project name to see a video demo with more info and links to GitHub repositories</p>
            </Row>
            <Row className="mb-3 text-dark" data-bs-theme='dark' >

            
            <Carousel >
                <Carousel.Item  >
                    <CarouselImage imageSrc={NNSSnew}/>
                    <Carousel.Caption className="bg-warning  rounded"  >
                    <a href="https://www.youtube.com/watch?v=xzJ9E-R6PK4&t=80s" target="blank" style={{textDecoration: 'none'}} >
                        <h3 className="text-info"> <strong>Nordic Nexus</strong> </h3>
                    </a>
                    <p className="text-dark">Track weather and conditions at Nordic skiing areas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <CarouselImage imageSrc={SRSSnew} />
                    <Carousel.Caption className="bg-success  rounded">
                    <a href="https://www.youtube.com/watch?v=aTaVnL6IR4M" target="blank" style={{textDecoration: 'none'}} >
                        <h3 className="text-info" > <strong>Squawk Rack</strong> </h3>
                    </a>
                    <p>Share, rate, and comment on resistance  workouts</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <CarouselImage imageSrc={BBSSnew} />
                    <Carousel.Caption className="bg-secondary  rounded">
                    <a href="https://www.youtube.com/watch?v=R1lHVVAi3uI&t=44s" target="blank" style={{textDecoration: 'none'}} >
                        <h3 className="text-info" > <strong>Disc Golf Bag Builder</strong> </h3>
                    </a>
                    <p>
                        Select and compare discs ahead of your next round
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
            </Col>
            
        </div>
    )
}

export default Projects