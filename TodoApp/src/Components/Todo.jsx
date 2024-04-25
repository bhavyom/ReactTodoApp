import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  let totalTodos = todos.length;
  let completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}
