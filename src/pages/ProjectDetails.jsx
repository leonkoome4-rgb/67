import { useParams, useNavigate } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects.find(p => p.id === Number(id))

  if (!project) return <h2>Not found</h2>

  return (
    <div className="container">

      <button onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>{project.title}</h1>
      <img src={project.image} />
      <p>{project.description}</p>

    </div>
  )
}

export default ProjectDetails