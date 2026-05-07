import { useParams, useNavigate } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects.find(
    (p) => p.id === Number(id)
  )

  if (!project) {
    return <h2>Project not found</h2>
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate("/")}>
        ⬅ Back Home
      </button>

      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <h3>{project.technologies}</h3>
    </div>
  )
}

export default ProjectDetails