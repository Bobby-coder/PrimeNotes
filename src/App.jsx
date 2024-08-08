import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-2 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
