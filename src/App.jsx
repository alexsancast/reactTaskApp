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
  //Guardar datos en el arreglo
  const handleBtnSave = () => {
    if (!taskItem.find(task => task.titulo === newTaskName)) {
      setTaskItem([...taskItem, {
        id: taskItem.length,
        titulo: newTaskName,
        descripcion: newTaskName
      }])



    }

    console.log(taskItem)



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

      <div className="task">

        {taskItem.map(task => <div key={task.id}> {task.titulo}</div>)}


      </div>


    </div>
  )
}

export default App
