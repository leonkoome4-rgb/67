import { Link } from "react-router-dom"

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <Link to={`/project/${project.id}`}>
        View Details
      </Link>
    </div>
  )
}

export default ProjectCard