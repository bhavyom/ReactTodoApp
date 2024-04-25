import TodoItem from "./TodoItem";
import style from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={style.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.name} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
