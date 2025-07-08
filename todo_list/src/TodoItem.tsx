// src/TodoItem.tsx
import React from 'react';

// 親コンポーネント（App.tsx）から渡されるTodoアイテムの型を定義
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// TodoItemコンポーネントが受け取るpropsの型を定義
interface TodoItemProps {
  todo: Todo; // 表示するTodoオブジェクト
  onToggle: (id: number) => void; // 完了状態を切り替える関数
  onDelete: (id: number) => void; // 削除する関数
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // propsで受け取った関数を呼び出す
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button> {/* propsで受け取った関数を呼び出す */}
    </li>
  );
};

export default TodoItem;