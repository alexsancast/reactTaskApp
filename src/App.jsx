import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
function App() {
  //Estados 
  const [newTaskName, setNewTaskName] = useState("")
  const [taskItem, setTaskItem] = useState([{
    id: 0,
    titulo: "Mi primera tarea",
    descripcion: "Esta es mi primera tarea"
  },

  {
    id: 1,
    titulo: "Mi segunda tarea",
    descripcion: "Esta es mi segunda tarea"
  }
  ])


  //Funcciones
  const handleInput = (e) => {
    setNewTaskName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", newTaskName)
    setNewTaskName('')



  }
  //Guardar datos en el arreglo
  const handleBtnSave = () => {
    setTaskItem([...taskItem, {
      id: taskItem.length,
      titulo: newTaskName,
      descripcion: newTaskName
    }])



  }



  return (


    <div className="form">

      <form onSubmit={handleSubmit} action="">

        <Input newTaskName={newTaskName} HandleInput={handleInput} />
        <Button handleBtnSave={handleBtnSave} />





      </form>

      <div className="task">

        {taskItem.map(task => <div key={task.id}> {task.titulo}</div>)}


      </div>


    </div>
  )
}

export default App
