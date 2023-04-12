export default function TodoSelect({ status, onTodoSelectChange }) {
  return (
    <select value={status} onChange={onTodoSelectChange}>
      <option value="all">all</option>
      <option value="done">done</option>
      <option value="undone">undone</option>
    </select>
  );
}
