import { useState } from 'react'

function CounterFunctional() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </main>
  )
}

export default CounterFunctional
