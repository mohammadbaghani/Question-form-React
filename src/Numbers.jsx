import React, { Component } from 'react'
import './Todo/Todo.css'
export default class Numbers extends Component {
    

    render() {
        return (

            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
  {this.props.id ?    <li className="todo-item redifno">نمره</li> :   <li className="todo-item redifopa redifno">نمره</li>}

           
                {this.props.id ? <li className="todo-item center mid">{this.props.t}</li> : <li className="todo-item mid"></li>}
            </div>

        )
    }
}