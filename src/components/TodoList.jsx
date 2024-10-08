import ToDoItem from "./ToDoItem";

function ToDoList({ todos, setTodoList, setEditingId, setTodoString }) {
  return (
    <div className="relative w-full overflow-auto">
      <div className="w-full flex gap-3 flex-wrap justify-center py-6 bg-white rounded-lg shadow-lg">
        {!todos.length && (
          <div className="text-gray-500 text-center py-6">
            No tasks available. Add some tasks to get started!
          </div>
        )}
        {todos.map(({ id, todo, date, completed }) => (
          <ToDoItem
            key={crypto.randomUUID()}
            id={id}
            todo={todo}
            date={date}
            completed={completed}
            setTodoList={setTodoList}
            allTodos={todos}
            setTodoString={setTodoString}
            setEditingId={setEditingId}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
