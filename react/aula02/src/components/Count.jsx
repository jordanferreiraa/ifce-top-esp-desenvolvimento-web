import { useState } from 'react'

function Count() {

  const [count,setCount] = useState(0)

  function decrementar() {
    if(count === 0) {
      alert("O contador não aceita valores negativos")
      return
    }

    setCount(count-1)
  }

  function incrementar() {
    setCount(count+1)
  }

  return(
    <div>
      <button onClick={()=>decrementar()}>
        -
      </button>
      {count}
      <button onClick={()=>incrementar()}>
        +
      </button>
    </div>
  )
}

export default Count;