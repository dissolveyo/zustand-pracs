import './App.css';
import { TodoList } from './components/TodoList';
import { useSearch, useTodos } from './store';

function App() {
  const todos = useTodos((state) => state.todos);
  const { searchString, updateSearch } = useSearch();

  const filteredTodos = todos.filter((item) =>
    item.name.includes(searchString)
  );

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(e) => {
            updateSearch(e.target.value);
          }}
        />

        <div className="container">
          <div>
            <h3>Native todos</h3>
            <TodoList todos={todos} />
          </div>

          <div>
            <h3>Filtered todos</h3>
            {filteredTodos.length !== 0 ? (
              <TodoList todos={filteredTodos} />
            ): (
              <p>No todos matching this criteria</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
