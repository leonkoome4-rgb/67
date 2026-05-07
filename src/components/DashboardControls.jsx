import { useState } from "react"

function DashboardControls({ search, setSearch, addProject }) {
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
    <div className="dashboard-card">

      {/* SEARCH */}
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FORM */}
      <form className="project-form" onSubmit={handleSubmit}>

        <input
          className="input"
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Description"
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

export default DashboardControls