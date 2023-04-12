import { useState } from "react";

export default function TodoAddBar({ onTodoAdd }) {
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button
        onClick={() => {
          onTodoAdd({ id: crypto.randomUUID(), name: text, done: false });
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
