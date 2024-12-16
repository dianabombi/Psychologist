import React from "react";
import MyButton from "./button";
import { useState } from "react";

function Blog () {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState(""); 
    const [blogs, setBlogs] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault ();
        handleSave();
    };

    const handleSave = () => {

        const newBlog = { title, category, date, content };

        setBlogs([...blogs, newBlog]); 

        console.log('Blog saved:', newBlog);

        setTitle('');
        setCategory('');
        setDate('');
        setContent('');
    };

    return (
        <div>   
             <form onSubmit={handleSubmit}>

             <label htmlFor="blog-title">Title</label>
                <input
                    type="text"
                    id="blog-title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />

             <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter category"
                />    

            <label htmlFor="date">Date</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter today's date"
                />  

            <label htmlFor="content">Content</label>
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your article here"
                />   
                   <MyButton text="SAVE"  onClick={handleSave}/>
            </form>

            <div>
            <h3>Saved Blogs:</h3>
            {blogs.map ((blog, index) => (
                <div key={index}>
                    <p><strong>Title:</strong> {blog.title}</p>
                    <p><strong>Category:</strong> {blog.category}</p>
                    <p><strong>Date:</strong> {blog.date}</p>
                    <p><strong>Content:</strong> {blog.content}</p>
                </div>
            ))}
            </div>
        </div>  
    );
}

export default Blog;