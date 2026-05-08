import { Link } from "react-router-dom"

function ProjectCard({ project }) {
  return (
    <div className="card">

      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <Link to={`/project/${project.id}`}>
        View
      </Link>

    </div>
  )
}

export default ProjectCard