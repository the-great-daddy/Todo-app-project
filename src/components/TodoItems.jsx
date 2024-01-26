import styles from "./todoItem.module.css";

export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Deleted the item from the list", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(itemName) {
    console.log("Item text clicked", itemName);
    const newArray = todos.map((todo) =>
      todo.name === itemName ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  const itemStatus = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemStatus} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            DELETE
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
