import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";



function Blog() {

// const [blogs, setBlogs] = useState([])

// async function gql() {
//     const response = await fetch('https://api.hashnode.com/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//             query: `
//             query {
//                 user(username: "andypatari") {
//                   publication {
//                     posts(page: 0) {
//                      slug
//                      title
//                      brief
//                      coverImage
//                     }
//                   }
//                 }
//               }
//             ` }),
//     });

//     return response.json();

// }
// useEffect(() => {
//     gql().then(res => setBlogs(res.data.user.publication.posts) )
// }, [])

    const blog1 = {
        "title": "Avoid Excessive API Calls with localStorage",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703086800190/383b31dc-a27a-495f-a088-f4d92f339f7b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",

    }

    const blog2 = {
        "title": "Decorating Functions for Fun and Profit",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1704810982270/fc1a9e0c-1b2e-47a2-a420-263e801ce6db.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",

    }

    const blog3 = {
        "title": "Debugging Detective: The Switcheroo Sort",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1704811287306/1853cdf8-e476-47f1-909c-3debb6a0401a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",

    }

    return (
        <div id="blog" style={{scrollMarginTop: "70px"}} className="py-3 px-4"  >
            <h3 className="ms-5 mt-4" >
                My Blog - 
                <a href="https://dundermethodpaperco.hashnode.dev/" >Dunder Method Paper Company</a> 
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