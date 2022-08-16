import React, { useReducer } from "react";
import { ReactDOM } from "react";
const initialTodos = [
  { id: 1, title: "Task1", complete: false },
  {
    id: 2,
    title: "Task2",
    complete: true,
  },
  {
    id: 3,
    title: "Task3",
    complete: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { todo, complete: !todo.complete };
        } else return todo;
      });
    default:
      return state;
  }
};

const Demo = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <><center>
      <h2 style={{ color: "green", fontFamily: "sans-serif" }}>
        List of tasks----
      </h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              value={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
      </center>
    </>
  );
};

export default Demo;
