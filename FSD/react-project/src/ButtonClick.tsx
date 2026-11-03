function ButtonClick() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <main>
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </main>
  )
}

export default ButtonClick
