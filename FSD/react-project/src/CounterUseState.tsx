import { useState } from 'react'

function CounterUseState() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>
    </main>
  )
}

export default CounterUseState
