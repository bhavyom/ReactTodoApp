import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </div>
    </div>
  );
}
