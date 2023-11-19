import { useRef, useState } from "react"
import Modal from "./Modal"
const NewTask = ({ onAdd }) => {
  const modal = useRef()
  const [enteredTask, setEnteredTask] = useState('')

  const handleChange = (event) => {
    setEnteredTask(event.target.value)
  }
  const handleAddTask = () => {
    if (enteredTask.trim() === '') {
      modal.current.open()
      return
    }

    setEnteredTask('')
    onAdd(enteredTask)
  }

  return <>
    <Modal ref={modal} buttonCaption='Close'>
      <h2 className="text-xl font-bold mt-4 text-stone-700">Invalid input</h2>
      <p className='text-stone-600 mb-4'>You look like forgot enter a value</p>
      <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
    </Modal>

    <div className="flex items-center gap-4">
      <input type="text" value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}>Add Task</button>
    </div>
  </>
}

export default NewTask
