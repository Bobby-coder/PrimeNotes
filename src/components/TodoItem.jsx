import { Check, Pen, Square, X } from "lucide-react";
import { gradients } from "../utils/gradients";

function ToDoItem({
  id,
  todo,
  date,
  completed,
  setTodoList,
  allTodos,
  setEditingId,
  setTodoString,
}) {
  // Generate random index to display random gradient
  let randomIndex = Math.floor(Math.random() * gradients.length);

  // Handler to remove todo based on id
  function handleRemove(id) {
    // filter out that todo from allTodos array which have same id as of specified id
    let filteredTodos = allTodos.filter((currTodo) => currTodo.id !== id);
    setTodoList(filteredTodos);
  }

  // Mark as complete handler
  function handleMarkAsComplete(id) {
    // Transform that todo which have same id  as of specified id, by setting its "completed" property to true
    const updatedTodos = allTodos.map((currTodo) => {
      return currTodo.id === id ? { ...currTodo, completed: true } : currTodo;
    });

    setTodoList(updatedTodos);
  }

  // Mark as incomplete handler
  function handleMarkAsIncomplete(id) {
    // Transform that todo which have same id  as of specified id, by setting its "completed" property to false
    const updatedTodos = allTodos.map((currTodo) => {
      return currTodo.id === id ? { ...currTodo, completed: false } : currTodo;
    });

    setTodoList(updatedTodos);
  }

  // Edit button handler
  function handleEdit(id, string) {
    setEditingId(id);
    setTodoString(string);
  }

  return (
    <div
      className={`relative flex flex-col gap-1 p-4 pb-4 bg-gradient-to-r ${gradients[randomIndex]} w-[350px] text-white shadow-md rounded-md cursor-pointer group`}
    >
      {/* task */}
      <div className="flex flex-col h-full break-words relative">
        <p className={`name text-lg pb-1.5 ${completed ? "line-through" : ""}`}>
          {todo}
        </p>

        <p className="text-xs">{date}</p>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-2 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          {/* Edit */}
          <button
            className="bg-blue-600 text-white py-2 px-3 rounded-md shadow-sm hover:bg-blue-700"
            onClick={() => handleEdit(id, todo)}
          >
            <Pen size={16} />
          </button>

          {/* Mark as complete */}
          {!completed && (
            <button
              className="bg-green-600 text-white py-2 px-3 rounded-md shadow-sm hover:bg-green-700"
              onClick={() => handleMarkAsComplete(id)}
            >
              <Square size={18} />
            </button>
          )}

          {/* Mark as incomplete */}
          {completed && (
            <button
              className="bg-green-600 text-white py-2 px-3 rounded-md shadow-sm hover:bg-green-700"
              onClick={() => handleMarkAsIncomplete(id)}
            >
              <Check size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute top-[-5px] right-[-5px] z-30">
        <button
          className="flex items-center justify-center h-8 w-8 bg-red-600 text-white rounded-full border border-red-500 hover:bg-red-700
    focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 ease-in-out shadow-md"
          onClick={() => handleRemove(id)}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
