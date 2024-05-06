import React from "react";
import { Card, Container } from "react-bootstrap";
import bootstrap from "../images/bootstrap.jpeg"
import flask from "../images/flask.png"
import html from "../images/html.png"
import js from "../images/js.png"
import postgresql from "../images/postgresql.png"
import python from "../images/python.jpeg"
import react from "../images/react.png"
import mongo from "../images/mongo.png"

function Skills() {
    return (
        <div className="bg-light py-3 px-4 ">

        <h3 className="ms-5 mt-2" >Skills</h3>
        <div className="d-flex" >
            
            <Container className="mx-auto">
            <div className="d-flex flex-wrap">
            <Card style={{ width: '9rem', border:'none' }} className="m-3" >
                <Card.Img variant="top" src={python} />
                <Card.Body className="d-flex">
                    <Card.Title className="mt-auto fs-6 mx-auto" >Python</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={postgresql} />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >PostgreSQL</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={mongo} />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >MongoDB</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={react} />
                <Card.Body className="d-flex" >
                    <Card.Title className="mt-auto mx-auto fs-6" >React</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-2" >
                <Card.Img variant="top" src={flask} />
                <Card.Body className="d-flex">
                    <Card.Title className="mt-auto fs-6 mx-auto" >Flask</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={js} />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >JavaScript</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={bootstrap} />
                <Card.Body className="d-flex">
                    <Card.Title className="fs-6 mt-auto mx-auto" >Bootstrap</Card.Title>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '9rem', border:'none' }}className="m-3" >
                <Card.Img variant="top" src={html} />
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