import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// フィルターの種類を定義
type Filter = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // フィルターの状態を管理する新しいステート
  const [filter, setFilter] = useState<Filter>('all'); // 初期値は'all'

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // フィルターされたTodoリストを返す関数
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true; // すべてのTodoを返す
    } else if (filter === 'active') {
      return !todo.completed; // 未完了のTodoのみを返す
    } else { // filter === 'completed'
      return todo.completed; // 完了済みのTodoのみを返す
    }
  });

  return (
    <div className="App">
      <h1>My Todo List</h1>

      <TodoForm onAdd={addTodo} />

      {/* フィルターボタンを追加 */}
      <div className="filters" style={{ margin: '15px 0' }}>
        <button
          onClick={() => setFilter('all')}
          style={{ fontWeight: filter === 'all' ? 'bold' : 'normal', marginRight: '10px' }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{ fontWeight: filter === 'active' ? 'bold' : 'normal', marginRight: '10px' }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
        >
          Completed
        </button>
      </div>

      <ul>
        {/* フィルターされたTodoリストを表示 */}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodoCompletion}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;