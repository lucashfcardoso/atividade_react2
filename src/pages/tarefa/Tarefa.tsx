﻿import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState (false)
  const [tarefa, setTarefa] = useState ('');

useEffect(() => {
  if (completed) {
    setTarefa ('Parabéns! Tarefa concluida')
  } 
}, [completed])

  return (
    <div>
      
    <h2>Componente Tarefa</h2>

    <h3>{tarefa}</h3>

    <p>Conclua a tarefa</p>

    <button onClick={() => setCompleted (true)}>Concluir tarefa</button>
      
    </div>
  )
}

export default Tarefa