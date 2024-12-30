import React from "react";
import MyButton from "./button";
import { useState } from "react";

function Blog () {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState(""); 
    const [blogs, setBlogs] = useState([]); 
    const [editIndex, setEditIndex] = useState(null);
    const [editBlog, setEditBlog] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault ();
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

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditBlog ({...blogs[index]});
    };

    const handleEditChange = (e) => {
        const {name, value} = e.target;
        setEditBlog ({...editBlog, [name]: value});
    };

    const handleEditSave = () => {
        const updatedBlogs = blogs.map((blog, i) =>
          i === editIndex ? editBlog : blog
        );
        setBlogs(updatedBlogs);
        setEditIndex(null); // Exit editing mode
        setEditBlog(null); // Clear editing state
      };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
        const updatedBlogs = blogs.filter((_, i) => i !== index);  
        setBlogs(updatedBlogs);
        }
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
            <h3>Blogs</h3>
            {blogs.map ((blog, index) => (
                <div key={index}>
                    {editIndex === index ? (
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={editBlog.title}
                  onChange={handleEditChange}
                />
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={editBlog.category}
                  onChange={handleEditChange}
                />
                <label>Date:</label>
                <input
                  type="text"
                  name="date"
                  value={editBlog.date}
                  onChange={handleEditChange}
                />
                <label>Content:</label>
                <textarea
                  name="content"
                  value={editBlog.content}
                  onChange={handleEditChange}
                />
                <button onClick={handleEditSave}>Save</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Title:</strong> {blog.title}
                </p>
                <p>
                  <strong>Category:</strong> {blog.category}
                </p>
                <p>
                  <strong>Date:</strong> {blog.date}
                </p>
                <p>
                  <strong>Content:</strong> {blog.content}
                </p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Blog;