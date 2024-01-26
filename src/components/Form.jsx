import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(Event) {
    Event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          placeholder="Enter todo item..."
          type="text"
          value={todo.name}
          onChange={(Event) =>
            setTodo({ name: Event.target.value, done: false })
          }
        />
        <button className={styles.submitButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
