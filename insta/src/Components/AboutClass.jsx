import React, { Component } from 'react'

export class AboutClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name : this.props.name,
        work : this.props.work
      }
    }

  render() {

    this.state.name = "About class component"
    return (
      <div>AboutClass
        <br></br>
        <b>Name:{this.state.name}</b> <br></br>
        <b>Name:{this.state.work}</b> <br></br>
      </div>
    )
  }
}

export default AboutClass