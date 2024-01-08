import React from "react";
import { Carousel,  Row, Col } from "react-bootstrap";
import CarouselImage from "./CarouselImage";


function Projects() {
    return (
        <div className="  py-2 mt-2 d-flex" id="projects" style={{scrollMarginTop: "90px"}} >
            <Col className="mx-3 px-4" >
            <Row className="ms-2 ps-3 m-2" >
                <h3>Projects</h3>
                <p className="fs-3" >Click on any project name to see a video demo with more info and links to GitHub repositories</p>
            </Row>
            <Row className=" m-4 p-4 text-dark mx-auto" data-bs-theme='dark' >

            
            <Carousel fade>
                <Carousel.Item  >
                    <CarouselImage imageSrc={"NNSS.png"}/>
                    <Carousel.Caption className="bg-warning  rounded"  >
                    <a href="https://www.youtube.com/watch?v=xzJ9E-R6PK4&t=80s" target="blank" style={{textDecoration: 'none'}} >
                        <h3 className="text-dark">Nordic Nexus</h3>
                    </a>
                    <p className="text-dark">Track weather and conditions at Nordic skiing areas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <CarouselImage imageSrc={"SRSS.png"} />
                    <Carousel.Caption className="bg-success  rounded">
                    <a href="https://www.youtube.com/watch?v=aTaVnL6IR4M" target="blank" style={{textDecoration: 'none'}} >
                        <h3>Squawk Rack</h3>
                    </a>
                    <p>Share, rate, and comment on resistance  workouts</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <CarouselImage imageSrc={"BBSS.png"} />
                    <Carousel.Caption className="bg-secondary  rounded">
                    <a href="https://www.youtube.com/watch?v=R1lHVVAi3uI&t=44s" target="blank" style={{textDecoration: 'none'}} >
                        <h3>Disc Golf Bag Builder</h3>
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