import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./navBar";

function MyDiary() {
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [diaries, setDiaries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDiary, setEditDiary] = useState(null);

  const [mood, setMood] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/diary")
      .then((response) => setDiaries(response.data))
      .catch((error) => console.error("Error fetching diaries:", error));
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const newDiary = { date, content, mood };
    axios.post("http://localhost:8000/diary/create", newDiary)
      .then((response) => {
        setDiaries([...diaries, response.data]);
        setDate("");
        setContent("");
        setMood("");
      })
      .catch((error) => console.error("Error saving diary:", error));
  };

  const handleEdit = (index) => {
    if (diaries[index]) {
      setEditIndex(index);
      setEditDiary({ ...diaries[index] });
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditDiary({ ...editDiary, [name]: value });
  };

  const handleEditSave = (event) => {
    event.preventDefault();
    const { _id } = editDiary;
    axios
      .put(`http://localhost:8000/diary/${_id}`, editDiary)
      .then((response) => {
        const updatedDiaries = diaries.map((diary) =>
          diary._id === _id ? response.data : diary
        );
        setDiaries(updatedDiaries);
        setEditIndex(null);
        setEditDiary(null);
      })
      .catch((error) => console.error("Error updating diary:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      axios
        .delete(`http://localhost:8000/diary/${id}`)
        .then(() => {
          const updatedDiaries = diaries.filter((diary) => diary._id !== id);
          setDiaries(updatedDiaries);
        })
        .catch((error) => console.error("Error deleting diary:", error));
    }
  };

  const handleChange = (event) => {
    setMood(event.target.value);
  };

  return (
    <div>
        <NavBar />
      <div className="diary-page">
        
        <form className="diary-form" onSubmit={handleSave}>
          <h2>Welcome to your journaling experience.</h2>
          <p>Sharing journal entries or insights gained through journaling experience, can deepen conversations in your therapeutical sessions.</p>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter today's date"
          />
          <label htmlFor="content">Notes</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your notes"
          />
       <div className="mood-container">

              <label htmlFor="mood">Select Mood</label>
              <select 
                  id="mood" 
                  name="mood" 
                  value={mood} 
                  onChange={handleChange} 
                  required
              >
                  <option value="">--Please choose a mood--</option>
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                  <option value="angry">Angry</option>
                  <option value="anxious">Anxious</option>
                  <option value="calm">Calm</option>
                  <option value="excited">Excited</option>
              </select>
          </div>

          <button type="submit" className="button-diary">
            SAVE
          </button>
        </form>

        <h3>My Diary:</h3>
        {diaries.map((diary, index) => (
          <div key={diary._id}>
            {editIndex === index ? (
              <div>
                <label>Date</label>
                <input
                  type="text"
                  name="date"
                  value={editDiary.date}
                  onChange={handleEditChange}
                />
                <label>Content</label>
                <textarea
                  type="text"
                  name="content"
                  value={editDiary.content}
                  onChange={handleEditChange}
                />
                
                <label>Mood</label>
                <select
                  name="mood"
                  value={editDiary.mood}
                  onChange={handleEditChange}
                >
                  <option value="">--Please choose a mood--</option>
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                  <option value="angry">Angry</option>
                  <option value="anxious">Anxious</option>
                  <option value="calm">Calm</option>
                  <option value="excited">Excited</option>
                </select>

                <button onClick={handleEditSave}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Date</strong> {diary.date}
                </p>
                <p>
                  <strong>Content</strong> {diary.content}
                </p>
                <p>
                  <strong>Mood</strong> {diary.mood}
                </p>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(diary._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDiary;
