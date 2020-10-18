import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    MyStyles = () => {
        return {
            display : 'flex',
            alignItems : 'center',
            justifyContent: 'space-between',
            border: '1px solid black',
            backgroundColor: '#82c0e4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
   }
 
   Mytimes = () => {
    return {
        textDecoration: 'inherit'
    }
   }


    render() {
        return (
            <div>
                <p className="p-2 my-1" style={ this.MyStyles()} >
                    <input type="checkbox"
                        className="my-1 float-left"
                        id={this.props.todo.id}
                        onChange={ this.props.Mytoggle.bind(this, this.props.todo.id) }
                        checked={ this.props.todo.completed }
                    />
                    <label style={{display:'inline-block', maxWidth:'80%' }} htmlFor={this.props.todo.id} >{this.props.todo.title}</label>
                    <i className="fas fa-times cursor-pointer text-red-600 hover:text-red-700 hover:text-xl" style={ this.Mytimes() }
                    onClick={ this.props.btndelete.bind(this, this.props.todo.id) }
                    ></i>    
            </p>
            </div>
        )
    }
}

// PropTypes ??
TodoItem.propType ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired
} 

export default TodoItem
