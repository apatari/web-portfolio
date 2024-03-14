import React from "react";
import { Carousel,  Row, Col, Card } from "react-bootstrap";
import CarouselImage from "./CarouselImage";
import SRSSnew from "../images/SRSSnew.png"
import NNSSnew from "../images/NNSSnew.png"
import BBSSnew from "../images/BBSSnew.png"
import Art from "../images/Art.png"


function Projects() {
    return (
        <div className="  p-2 mt-2 d-flex" id="projects"  >
            <Col className="" >
            <Row className="ms-2 ps-3 m-2 px-4" >
                <h3 className="ps-5" >Projects</h3>
                <p className="fs-3 ps-5 " >Click on any project image to see a video demo</p>
            </Row>
            <Row className="mb-3 text-dark p-2" data-bs-theme='dark' >
            <Card style={{width: '28rem'}} className="m-2  p-2 rounded" >
                <a href="https://www.youtube.com/watch?v=xzJ9E-R6PK4&t=96s" target="blank" > <Card.Img variant="top" src={NNSSnew} /></a>
                <Card.Body>
                    <Card.Title>Nordic Nexus</Card.Title>
                  
                    <Card.Text className="fs-4" >
                        Plan your next Nordic Skiing adventure by comparing weather conditions, trail reports, and drive times at multiple ski centers.
                    </Card.Text>
                    
                </Card.Body>
                    <a href="https://github.com/apatari/Nordic-Nexus" className="fs-3 m-3" target="blank" > GitHub </a>
            </Card>

            <Card style={{width: '28rem'}} className="m-2 p-2 rounded" >
                <a href="https://www.youtube.com/watch?v=RyR3Dh2zjNc" target="blank" > <Card.Img variant="top" src={Art} /></a>
                <Card.Body>
                    <Card.Title>Art Showcase</Card.Title>
                  
                    <Card.Text className="fs-4" >
                        A website to show off the weavings that my mom has for sale. Features include file uploads, form-generated emails, and image storage. 
                    </Card.Text>
                    
                </Card.Body>
                <a href="https://github.com/apatari/art-store" className="fs-3 m-3" target="blank" > GitHub </a>
            </Card>

            <Card style={{width: '28rem'}} className="m-2 p-2 rounded" >
                <a href="https://www.youtube.com/watch?v=aTaVnL6IR4M" target="blank" > <Card.Img variant="top" src={SRSSnew} /></a>
                <Card.Body >
                    <Card.Title>Squawk Rack</Card.Title>
                  
                    <Card.Text className="fs-4" >
                        Create, share, review, and comment on resistance training workout plans. 
                    </Card.Text>
                    
                </Card.Body>
                <a  href="https://github.com/apatari/squawk-rack" className="fs-3  m-3" target="blank" > GitHub </a>
            </Card>
            
            {/* <Carousel >
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
            </Carousel> */}
            </Row>
            </Col>
            
        </div>
    )
}

export default Projects