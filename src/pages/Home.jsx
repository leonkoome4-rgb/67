import { useState } from "react"
import projectsData from "../data/projects"
import ProjectList from "../components/ProjectList"
import SearchBar from "../components/SearchBar"
import ProjectForm from "../components/ProjectForm"

function Home() {
  const [projects, setProjects] = useState(projectsData)
  const [search, setSearch] = useState("")

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">

      <h1 className="title">My Portfolio</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filtered} />

    </div>
  )
}

export default Home