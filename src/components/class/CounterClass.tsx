
import React, { Component } from 'react'

type CountProps = {
    message:string
}

type CounterState = {
    count: number
}

export class CounterClass extends Component<CountProps,CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick} >Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default CounterClass