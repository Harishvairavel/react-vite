import React, { Component } from 'react'
 class ClassComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:this.props.name,
           work:this.props.work,
        }
      }
      
  render() {
    
    return (
      <div>
        <h1>MY Resume</h1>
        <h4>name:</h4>{this.state.name}
        <h4>Work:</h4>{this.state.work}
        
      </div>
    )
  }
}

export default ClassComp;
