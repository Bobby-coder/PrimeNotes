import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Pen, PlusIcon, X } from "lucide-react";

function App() {
  const [todoString, setTodoString] = useState("");
  const [editingId, setEditingId] = useState(null);
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
    // Do nothing if input string is empty
    if (!todoString.trim()) return;

    let newDate = new Date();
    // create new todo object
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoString.trim(),
      date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`,
      completed: false,
    };

    // update todo list
    setTodoList([...todoList, newTodo]);
    // reset input
    setTodoString("");
  }

  // Edit todo handler
  function handleEdit(e) {
    e.preventDefault();

    // Do nothing if input string is empty
    if (!todoString.trim()) return;

    // generate updated time
    const newDate = new Date();

    // Tranfrom edited todo data
    const updatedTodos = todoList.map((currTodo) => {
      return currTodo.id === editingId
        ? {
            ...currTodo,
            todo: todoString,
            date: `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`,
          }
        : currTodo;
    });

    setTodoList(updatedTodos);
    // reset editing id and input
    setEditingId(null);
    setTodoString("");
  }

  // Cancel edit handler
  function handleCancelEdit() {
    setEditingId(null);
    setTodoString("");
  }

  return (
    <div className="p-2 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header todoList={todoList} />

        {/* Add form */}
        <form
          onSubmit={handleAdd}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 w-full"
        >
          {/* Add Input */}
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden w-full">
            <input
              placeholder={!editingId && "Add a new task"}
              className="w-full p-3 outline-none border-none bg-white text-gray-700 placeholder-gray-400"
              type="text"
              onChange={(e) => setTodoString(e.target.value)}
              value={todoString}
            />
          </div>

          {/* Add Button -> If not in editing state */}
          {!editingId && (
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out w-full sm:w-auto"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          )}

          {editingId && (
            <>
              {/*Edit button -> If in editing state*/}
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out w-full sm:w-auto"
                onClick={handleEdit}
              >
                <Pen className="h-5 w-5" />
              </button>

              {/*Cancel Edit button -> If in editing state*/}
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg shadow-md 
        hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 ease-in-out w-full sm:w-auto"
                onClick={handleCancelEdit}
              >
                <X className="h-5 w-5" />
              </button>
            </>
          )}
        </form>

        {/* Todo List */}
        <TodoList
          todos={todoList}
          setTodoList={setTodoList}
          setEditingId={setEditingId}
          setTodoString={setTodoString}
        />
      </div>
    </div>
  );
}

export default App;
