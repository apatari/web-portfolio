import React from "react";
import BlogCard from "./BlogCard";



function Blog() {

    const blog1 = {
        "title": "I'm Having a Blast with Python's Facial Recognition Library",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1710347509238/1b0a9d3b-f5ae-418a-b758-c8ebacb48013.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "slug": "im-having-a-blast-with-pythons-facial-recognition-library"
    }

    const blog2 = {
        "title": "File Uploads Made Easy with React and Flask",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1707752966261/814ec9d0-8ba9-4c1d-a895-f39156b97b99.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "slug": "file-uploads-made-easy-with-react-and-flask"
    }

    const blog3 = {
        "title": "Debugging Detective: The Switcheroo Sort",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1704811287306/1853cdf8-e476-47f1-909c-3debb6a0401a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "slug": "debugging-detective-the-switcheroo-sort"
    }

    return (
        <div id="blog" style={{scrollMarginTop: "70px"}} className="py-3 px-4"  >
            <h3 className="ms-5 mt-4" >
                My Blog - 
                <a href="https://dundermethodpaperco.hashnode.dev/" target="blank" >Dunder Method Paper Company</a> 
            </h3>
            <p className="ms-5 fs-3" >Coding adventures, beginner tutorials, and at least one reference to "The Office" in every post!</p>
            <div className="d-flex flex-wrap m-4 ">

                
                <BlogCard key={blog1.title} blog={blog1} />
                <BlogCard key={blog2.title} blog={blog2} />
                <BlogCard key={blog3.title} blog={blog3} />
                            
                
            </div>
        </div>
    )
}

export default Blog