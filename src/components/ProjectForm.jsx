import { useState } from "react"

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newProject = {
      id: Date.now(),
      title,
      description,
      image: "https://picsum.photos/300/202",
      tech: "React"
    }

    addProject(newProject)

    setTitle("")
    setDescription("")
  }

  return (
    <form className="card" onSubmit={handleSubmit}>

      <input
        className="input"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add Project</button>

    </form>
  )
}

export default ProjectForm