import ToDoItem from "./ToDoItem";

function ToDoList({ todos }) {
  return (
    <div className="relative w-full overflow-auto">
      <div className="w-full flex gap-3 flex-wrap justify-center py-6 bg-white rounded-lg shadow-lg">
        {todos.map(({ id, todo, date, completed }) => (
          <ToDoItem
            key={crypto.randomUUID()}
            id={id}
            todo={todo}
            date={date}
            completed={completed}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
