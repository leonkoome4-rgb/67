import ProjectCard from "./projectcard";

function ProjectList({ projects }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}

export default ProjectList ;