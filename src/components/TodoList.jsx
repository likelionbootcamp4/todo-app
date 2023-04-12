import TodoRow from "./TodoRow";

export default function TodoList({
  todos,
  status,
  onTodoStatusChange,
  onTodoDelete,
}) {
  if (status === "all") {
    return (
      <div>
        {todos.map((todo) => (
          <TodoRow
            todo={todo}
            onTodoDelete={onTodoDelete}
            onTodoStatusChange={onTodoStatusChange}
          />
        ))}
      </div>
    );
  } else if (status === "done") {
    return (
      <div>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <TodoRow
              todo={todo}
              onTodoDelete={onTodoDelete}
              onTodoStatusChange={onTodoStatusChange}
            />
          ))}
      </div>
    );
  } else if (status === "undone") {
    return (
      <div>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <TodoRow
              todo={todo}
              onTodoDelete={onTodoDelete}
              onTodoStatusChange={onTodoStatusChange}
            />
          ))}
      </div>
    );
  }
}
