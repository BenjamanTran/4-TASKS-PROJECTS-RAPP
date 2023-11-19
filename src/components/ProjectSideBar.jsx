import Button from "./Button.jsx";

export default function ProjectSideBar({ onStartAddProject, projects, onSelected, projectSelectedId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1"
          if (project.id === projectSelectedId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += 'text-stone-400'
          }

          return (
            <li key={project.key}>
              <button className={cssClasses} onClick={() => onSelected(project.id)}>
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}


