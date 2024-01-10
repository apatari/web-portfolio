import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";



function Blog() {

const [blogs, setBlogs] = useState([])

async function gql() {
    const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            query: `
            query {
                user(username: "andypatari") {
                  publication {
                    posts(page: 0) {
                     slug
                     title
                     brief
                     coverImage
                    }
                  }
                }
              }
            ` }),
    });

    return response.json();

}
useEffect(() => {
    gql().then(res => setBlogs(res.data.user.publication.posts) )
}, [])

    return (
        <div id="blog" style={{scrollMarginTop: "70px"}} className="py-3 px-4"  >
            <h3 className="ms-5 mt-4" >
                My Blog - 
                <a href="https://dundermethodpaperco.hashnode.dev/" >Dunder Method Paper Company</a> 
            </h3>
            <p className="ms-5 fs-3" >Coding adventures, beginner tutorials, and at least one reference to "The Office" in every post!</p>
            <div className="d-flex flex-wrap m-4 ">

                {blogs.map(blog => {
                    return (
                        <BlogCard key={blog.title} blog={blog} />
                            
                    )
                })}
            </div>
        </div>
    )
}

export default Blog