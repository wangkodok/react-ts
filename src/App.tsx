import { useState } from "react";
import TodoList from "components/TodoList";
import Todo from "model/todo";
import NewTodo from "components/NewTodo";

export default function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  // const todoList = [new Todo("리액트"), new Todo("타입스크립트")];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div>
      <div>cra 설치 후 typescript 설치</div>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList item={todo} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}
