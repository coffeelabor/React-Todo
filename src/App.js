import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems
    };
  }
  toggleItem = id => {
    this.setState(prevState => {
      return {
        todoItems: prevState.todoItems.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      return {
        todoItems: [...prevState.todoItems, newItem]
      };
    });
  };

  render() {
    return (
      <div className="app">
        <div className="todo-list">
          <h1 className="Title">Todo List</h1>
          <TodoList
            todoListItems={this.state.todoItems}
            toggleItem={this.toggleItem}
          />
          <TodoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
