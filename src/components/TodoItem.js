import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {};
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "Line-through" : "none"
    };
  };

  setCheck = () => {
    return {};
  };
  render() {
    //Destructring

    const { id, title, completed } = this.props.todo;

    return (
      <tbody>
        <tr>
          <td>{id}</td>
          <td>
            <span style={this.getStyle()}>{title}</span>
          </td>
          <td>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              defaultChecked={completed}
            />
          </td>
          <td>
            <button
              style={btnStyle}
              onClick={this.props.delTodo.bind(this, id)}
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
