export default function TodoRow({ todo, onTodoDelete, onTodoStatusChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onTodoStatusChange(todo.id)}
      />
      <label
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.name}
      </label>
      <button>Edit</button>
      <button onClick={() => onTodoDelete(todo.id)}>Delete</button>
    </div>
  );
}
