import React from "react";
import MyButton from "./button";
import { useState } from "react";

function Blog () {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault ();
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
                    value={date}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your article here"
                    minRows={6}
                    maxRows={10}
                />   
            </form>
            <MyButton />
        </div>
       
    )
}

export default Blog;