import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }
  return (
    <form className={style.todoform} onSubmit={(e) => handleClick(e)}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Todo item"
        />
        <button className={style.modernButton}>Add</button>
      </div>
    </form>
  );
}
