import React from "react";
import Todo from "model/todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{
  item: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.item.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
