function StringLiteral() {
  const name = 'React Developer'
  const task = 'learning React'

  return (
    <main>
      <h1>{`Hello, ${name}!`}</h1>
      <p>{`You're currently ${task}.`}</p>
    </main>
  )
}

export default StringLiteral
