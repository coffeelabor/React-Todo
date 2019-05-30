import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log("from Todolist " + props);
  return (
    <div className="todo-list">
      {props.todoListItems.map(item => {
        return (
          <TodoItem key={item.id} toggleItem={props.toggleItem} item={item} />
        );
      })}
    </div>
  );
};

export default TodoList;
