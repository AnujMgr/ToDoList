import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class ToDoLists extends Component {
  render() {
    return (
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>S.N</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        {this.props.todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            count={this.handelCount}
            todo={todo}
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        ))}
      </table>
    );
  }
}

ToDoLists.propTypes = {
  todos: PropTypes.array.isRequired
};
export default ToDoLists;
