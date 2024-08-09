import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { PlusIcon } from "lucide-react";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="p-2 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        {/* Add form */}
        <form className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 w-full">
          {/* Add Input */}
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden w-full">
            <input
              placeholder="Add a new task"
              className="w-full p-3 outline-none border-none bg-white text-gray-700 placeholder-gray-400"
              type="text"
            />
          </div>

          {/* Add Button */}
          <button
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out w-full sm:w-auto"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </form>
        
        {/* Todo List */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
