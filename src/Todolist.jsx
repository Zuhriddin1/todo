import React, { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todoInput }]);
      setTodoInput("");
    }
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="ml-72">
      <h2 className="text-2xl mt-8">Todo List</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add new todo"
        className="bordeer mt-6 border-black rounded-lg p-2"
      />
      <button
        onClick={addTodo}
        className="ml-4 bg-black text-white p-2 rounded-lg"
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <div className="">
            <li
              className=" mt-3 rounded-lg p-2 cursor-pointer hover:text-green-400  text-white bg-green-700 inline-block "
              key={todo.id}
            >
              {todo.text}
            </li>
            <button
              className="ml-5 bg-red-800 rounded-lg p-2 text-white hover:text-red-600"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
