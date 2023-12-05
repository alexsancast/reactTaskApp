

function Input({ HandleInput, newTaskName }) {
    return (
        <input onChange={HandleInput} value={newTaskName}
            placeholder='Ingrese la terea' type="text" />
    )
}

export default Input