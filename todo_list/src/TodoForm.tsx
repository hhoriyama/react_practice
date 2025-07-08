// src/TodoForm.tsx
import React, { useState } from 'react';

// TodoFormコンポーネントが受け取るpropsの型を定義
interface TodoFormProps {
  onAdd: (text: string) => void; // Todoを追加する関数
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // フォームのデフォルトの送信動作をキャンセル
    if (newTodoText.trim() === '') {
      return;
    }
    onAdd(newTodoText); // 親から渡された関数に新しいTodoのテキストを渡して呼び出す
    setNewTodoText(''); // 入力フィールドをクリア
  };

  return (
    <form onSubmit={handleSubmit}> {/* フォームの送信イベントを監視 */}
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button> {/* type="submit" を指定 */}
    </form>
  );
};

export default TodoForm;