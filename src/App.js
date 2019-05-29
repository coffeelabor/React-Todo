import React from "react";

import { todo } from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    // you will need a place to store your state in this component.
    this.state = {
      taskData: todo,
      todo: "",
      id: "",
      completed: ""
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = event => {
    event.preventDefault();
    const newItem = {
      todo: this.state.todo,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      taskData: [...this.state.taskData, newItem]
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.todo]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
