import { useState } from "react"

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !description) return

    const newProject = {
      id: Date.now(),
      title,
      description,
      image: "https://picsum.photos/300/200",
      technologies: "React"
    }

    addProject(newProject)

    setTitle("")
    setDescription("")
  }

  return (
    <div className="form-card">
  <h3 className="form-title">Add New Project up here 👆</h3>

  <form onSubmit={handleSubmit} className="form">
<br /><br />
    <label>Project Title</label>
    <input
      type="text"
      placeholder="e.g. Portfolio Website"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <label>Description</label>
    <textarea
      placeholder="Describe your project..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <button type="submit">
      ➕ Add Project
    </button>

  </form>
</div>
  )
}

export default AddProjectForm
