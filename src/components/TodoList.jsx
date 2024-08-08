import ToDoItem from "./ToDoItem";

function ToDoList() {
  const todos = [
    { todo: "abc", completed: true },
    {
      todo: "bcdfdlshjklkjjklbcdfdlshjklkjjklbcdfdlshjklkjjklbcdfdlshjklkjjklb",
      completed: false,
    },
    { todo: "tuf", completed: false },
    { todo: "xyz", completed: true },
  ];

  return (
    <div className="relative w-full overflow-auto">
      <div className="w-full flex gap-3 flex-wrap justify-center py-6 bg-white rounded-lg shadow-lg">
        {todos.map(({ todo, completed }) => (
          <ToDoItem
            key={crypto.randomUUID()}
            todo={todo}
            completed={completed}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
