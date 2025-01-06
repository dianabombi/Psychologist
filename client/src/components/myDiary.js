import React, { useState, useEffect } from "react";
import axios from "axios";

function MyDiary() {
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [diaries, setDiaries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDiary, setEditDiary] = useState(null);

  useEffect(() => {
    axios
      .get("/diary")
      .then((response) => setDiaries(response.data))
      .catch((error) => console.error("Error fetching diaries:", error));
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const newDiary = { date, content, author };
    axios.post("/diary/create", newDiary)
      .then((response) => {
        setDiaries([...diaries, response.data]);
        setDate("");
        setContent("");
        setAuthor("");
      })
      .catch((error) => console.error("Error saving diary:", error));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditDiary({ ...diaries[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditDiary({ ...editDiary, [name]: value });
  };

  const handleEditSave = (event) => {
    event.preventDefault();
    const { _id } = editDiary;
    axios
      .put(`/diary/${_id}`, editDiary)
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
        .delete(`/diary/${id}`)
        .then(() => {
          const updatedDiaries = diaries.filter((diary) => diary._id !== id);
          setDiaries(updatedDiaries);
        })
        .catch((error) => console.error("Error deleting diary:", error));
    }
  };

  return (
    <div>
      <div className="diary-page">
        <form className="diary-form" onSubmit={handleSave}>
          <h2>Add your notes</h2>
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
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <button type="submit" className="button-diary">
            SAVE
          </button>
        </form>

        <h3>Your daily notes</h3>
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
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  value={editDiary.author}
                  onChange={handleEditChange}
                />
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
                  <strong>Author</strong> {diary.author}
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
