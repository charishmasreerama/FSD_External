import { Component } from 'react'

class CounterClass extends Component<{}, { count: number }> {
  state = { count: 0 }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return (
      <main>
        <h1>Counter: {this.state.count}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </main>
    )
  }
}

export default CounterClass
