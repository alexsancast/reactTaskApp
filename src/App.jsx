import { useState, useEffect } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
function App() {
  //Estados 
  const [newTaskName, setNewTaskName] = useState("")
  const [taskItem, setTaskItem] = useState([])



  //Funcciones
  const handleInput = (e) => {
    setNewTaskName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTaskName('')



  }

  //Cambiar estado de las tareas
  const toggleTask = task => {
    setTaskItem(
      taskItem.map(t => (t.id == task.id) ? { ...t, done: !t.done } : t)

    )


  }
  //Guardar datos en el arreglo
  const handleBtnSave = () => {
    if (!taskItem.find(task => task.titulo === newTaskName)) {
      setTaskItem([...taskItem, {
        id: taskItem.length,
        titulo: newTaskName,
        descripcion: newTaskName,
        done: false
      }])



    }

  }




  //Cargar datos
  useEffect(() => {

    let data = localStorage.getItem("task")
    if (data) {
      setTaskItem(JSON.parse(data))
    }

  }, [])
  useEffect(() => { localStorage.setItem("task", JSON.stringify(taskItem)) }, [taskItem])



  return (


    <div className="form">

      <form onSubmit={handleSubmit} action="">

        <Input newTaskName={newTaskName} HandleInput={handleInput} />
        <Button handleBtnSave={handleBtnSave} />
      </form>

      <div className="task-main">

        <div className="task">
          <h1>Tasks</h1>

          {taskItem.filter((t) => t.done == false).map(task => <div key={task.id}> {task.titulo}  <input onChange={() => toggleTask(task)} type="checkbox" checked={task.done} name="" id="" /></div>)}


        </div>

        <div className="task-done">

          <h1>Task Done</h1>

          {taskItem.filter((t) => t.done == true).map(task => <div key={task.id}> {task.titulo}  <input onChange={() => toggleTask(task)} type="checkbox" checked={task.done} name="" id="" /></div>)}

        </div>





      </div>


    </div>
  )
}

export default App
