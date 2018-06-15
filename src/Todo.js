import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput : "",
            stock : []
        }
    }

    inputStock = (event)=> {
        this.setState({userInput: event.target.value})
        console.log(this.state.userInput)

    }

    addTodo = () => {
        this.setState({ stock : [...this.state.stock, this.state.userInput], userInput : ""}, ()=> {
           console.log(this.state.stock)
        }  )

    }

    renderTodo = ()=> {
        return this.state.stock.map((element, index) => {
            return(
              <li key = {index}>  {element.toUpperCase()}   <button id="del" onClick = {this.deleteTodo.bind(this, index)} >DELETE</button></li>      
            )
        })
    }

    deleteTodo = (index)=> {
        var array = this.state.stock;
        array.splice(index, 1);
        this.setState({stock : array})
        

    }

    render() {
        return(
            <div id="container">
<h1> To Do List </h1>
            <div className="input-group mb-3">
  <input onChange = {this.inputStock}  value={this.state.userInput} type="text" className="form-control" placeholder="Enter your task" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append">
    <button id="dtc" onClick = {this.addTodo} className="btn btn-outline-secondary" type="button">ADD</button>
  </div>
  </div>
  <ol>{this.renderTodo()}</ol>
  </div>

        
        )
    }
}

export default Todo;