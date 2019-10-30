import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  handelInput = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Task.."
          style={{
            flex: "10",
            padding: "5px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px"
          }}
          onChange={this.handelInput}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
