import { useState } from 'react'

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
      <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </main>
  )
}

export default ConditionalRender
