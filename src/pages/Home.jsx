

export default Home
import { useState } from "react"
import projectsData from "../data/projects"
import ProjectList from "../components/ProjectList"
import DashboardControls from "../components/DashboardControls"

function Home() {
  const [projects, setProjects] = useState(projectsData)
  const [search, setSearch] = useState("")

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="home">

      <h1 className="title">My Projects</h1>

      <DashboardControls
        search={search}
        setSearch={setSearch}
        addProject={addProject}
      />

      <ProjectList projects={filtered} />

    </div>
  )
}

