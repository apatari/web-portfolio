import React from "react";
import { Card } from "react-bootstrap";

function BlogCard({ blog }) {

    const link = `https://dundermethodpaperco.hashnode.dev/${blog.slug}`

    return (
        <Card style={{width: '24rem'}} className="m-4 ">

            <a style={{textDecoration: 'none'}} href={link} target="blank" >
                <Card.Img variant="top" src={blog.coverImage} />
            </a>

            <Card.Body className="d-flex" >

                <div className="mt-auto" >
                    <a style={{textDecoration: 'none'}} href={link} target="blank" >
                        <Card.Title >{blog.title}</Card.Title>
                    </a>

                    <Card.Text>
                        {blog.brief}
                    </Card.Text>
                </div> 
            </Card.Body>
            
        </Card>
    )
}

export default BlogCard