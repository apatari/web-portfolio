import React from "react";
import { Card, Container } from "react-bootstrap";

function Skills() {
    return (
        <div className="bg-light py-3 px-3 ">

        <h3 className="text-secondary ms-5" >Skills</h3>
        <div className="d-flex" >
            
            <Container className="mx-auto">
            <div className="d-flex flex-wrap">
            <Card style={{ width: '9rem', border:'none' }} className="m-2" >
                <Card.Img variant="top" src="python.jpeg" />
                <Card.Body className="d-flex">
                    <Card.Title className="mt-auto fs-6 mx-auto" >Python</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="postgresql.png" />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >PostgreSQL</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="react.png" />
                <Card.Body className="d-flex" >
                    <Card.Title className="mt-auto mx-auto fs-6" >React</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="flask.png" />
                <Card.Body className="d-flex">
                    <Card.Title className="mt-auto fs-6 mx-auto" >Flask</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="js.png" />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >JavaScript</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="bootstrap.jpeg" />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >Bootstrap</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src="html.png" />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >HTML</Card.Title>
                    
                </Card.Body>
            </Card>

            </div>
            </Container>
        </div>
        </div>
    )
}

export default Skills