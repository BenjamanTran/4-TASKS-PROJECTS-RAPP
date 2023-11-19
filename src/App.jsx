import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import ProjectSelected from "./components/ProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  })
  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
      }
    })
  }

  const handleAddProject = (projectData) => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleSelectedProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(project =>
          project.id !== prevState.selectedProjectID
        )
      }
    })

  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID)
  let content = <ProjectSelected project={selectedProject} onDelete={handleDeleteProject} />
  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelected={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
