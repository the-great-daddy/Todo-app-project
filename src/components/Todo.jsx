import TodoList from "./TodoList";
import Form from "./Form";
import { useState } from "react";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodosNo = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodosNo={completedTodosNo} totalTodos={totalTodos} />
    </div>
  );
}
