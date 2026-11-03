type ChildProps = {
  message: string
}

function Child({ message }: ChildProps) {
  return <p>Message from parent: {message}</p>
}

function Parent() {
  return (
    <main>
      <h1>Parent and Child</h1>
      <Child message="Hello from Parent!" />
    </main>
  )
}

export default Parent
