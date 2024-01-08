import React from "react";
import { Image, Row } from "react-bootstrap";

function CarouselImage({ imageSrc }) {
    return (
        <Row className="d-flex" >

            <Image src={imageSrc} className="mx-auto" style={{width: 'auto'}} />
        </Row>

    
    )
}

export default CarouselImage