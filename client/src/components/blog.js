import React from "react";
import MyButton from "./button";
import { useState } from "react";

function Blog () {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [savedData, setSavedData] = useState(null);   

    const handleSubmit = (e) => {
        e.preventDefault ();
        handleSave();
    };

    const handleSave = () => {
        const data = { title, category, date, content };
        console.log('Data saved:', data);
        setSavedData(data);
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
                   <MyButton text="SAVE"/>
            </form>

            {savedData && (
                <div>
                    <h3>Saved Data:</h3>
                        <p><strong>Title:</strong> {savedData.title}</p>
                        <p><strong>Category:</strong> {savedData.category}</p>
                        <p><strong>Date:</strong> {savedData.date}</p>
                        <p><strong>Content:</strong> {savedData.content}</p>
                </div>
            )}
        </div>  
    )
}

export default Blog;