import React, { Component } from "react";
import ToDoLists from "./components/ToDoLists";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };
  componentDidMount = () => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No Todos");
    }
  };

  //Toggle Complete
  markComplete = async id => {
    await this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  //Delete ToDo
  delTodo = async id => {
    await this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });

    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  // To Do List
  addTodo = async title => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title, // title: title, if key and value have same name
      completed: false
    };
    await this.setState({ todos: [...this.state.todos, newTodo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />

          <ToDoLists
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
