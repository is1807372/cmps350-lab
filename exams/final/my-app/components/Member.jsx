"use client";

import { SquareCheckBig, Square, SquareX } from "lucide-react";

export default function Member({ member, callback }) {
  async function handleToggle(event) {
    // event.preventDefault();
    const response = await fetch(`/api/${me.project}/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    if (response.ok) {
      callback();
    }
  }

  return (
    <div className="flex justify-between">
      <h2>{task.title}</h2>
      <div>
        <button title="Toggle" onClick={handleToggle}>
          {task.completed ? <SquareCheckBig /> : <Square />}
        </button>
        <button title="Delete">
          <SquareX />
        </button>
      </div>
    </div>
  );
}
