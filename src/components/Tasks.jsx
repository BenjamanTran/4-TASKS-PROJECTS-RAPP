import NewTask from "./NewTask"

const Tasks = ({ tasks, onAdd, onDelete }) => {

  return <session>
    <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
    <NewTask onAdd={onAdd} />
    {tasks.length === 0 &&
      <p className="text-stone-800 mb-4">This projects does have any tasks yet.</p>}
    {tasks.length > 0 &&

      <ul className="p-4 mt-8 rounded-md ">
        {tasks.map(task => <li key={task.id} className="flex justify-between my-4 bg-stone-100 p-4"><span>{task.text}</span>
          <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
        </li>)}
      </ul>
    }
  </session>
}

export default Tasks
