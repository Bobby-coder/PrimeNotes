import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { PlusIcon } from "lucide-react";

function App() {
  const [todoString, setTodoString] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  // Update local storage whenever todolist changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // Add new todo handler
  function handleAdd(e) {
    e.preventDefault();
    if (!todoString.trim()) return;

    let newDate = new Date();
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoString.trim(),
      date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodoString("");
  }

  return (
    <div className="p-2 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        {/* Add form */}
        <form
          onSubmit={(e) => handleAdd(e)}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 w-full"
        >
          {/* Add Input */}
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden w-full">
            <input
              placeholder="Add a new task"
              className="w-full p-3 outline-none border-none bg-white text-gray-700 placeholder-gray-400"
              type="text"
              onChange={(e) => setTodoString(e.target.value)}
              value={todoString}
            />
          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out w-full sm:w-auto"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </form>

        {/* Todo List */}
        <TodoList todos={todoList} />
      </div>
    </div>
  );
}

export default App;
