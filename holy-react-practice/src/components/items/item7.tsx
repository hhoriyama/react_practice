import React, { useState, useCallback } from 'react';
// 共通コンポーネントをインポートします
// 拡張子 (.tsx) を明示的に含めて解決を試みます。
import ReferenceItemCard from './ReferenceItemCard'; 

// カスタムHooksの例
// このフックは、一般的なフォーム入力フィールドの状態を管理し、変更時に更新するロジックを提供します。
const useForm = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  // 入力フィールドのonChangeイベントハンドラ
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  // 状態のリセット関数
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  // 値、ハンドラ、リセット関数を返す
  return { value, handleChange, reset };
};


// JSONで提供された学習ロードマップのStep 3に基づいてデータを設定
const itemData7 = {
  title: "React学習項目3：フォーム処理とカスタムHooks",
  summary: "ユーザーからの入力を受け付けるフォームの処理（Controlled Component）と、ロジックの再利用を目的としたカスタムHooksの作り方を学びます。このカスタムHooksはVueのコンポーザブル関数に相当します。",
  details: [
    {
      heading: "Controlled Component (制御されたコンポーネント)",
      content: "Reactでは、フォーム要素（<input>、<textarea>、<select>）の状態を、すべてReactのstate（`useState`）で制御するのが標準的な方法です。これにより、常にフォームの値がstateと同期します。",
      example: `
const NameInput = () => {
  const [name, setName] = useState(''); // 状態を定義

  const handleChange = (e) => {
    // 入力があるたびにstateを更新し、inputの値を制御する
    setName(e.target.value); 
  };

  return (
    <input 
      type="text" 
      value={name} // value propでstateを強制的に反映
      onChange={handleChange} // onChangeイベントでstateを更新
      placeholder="Controlled Input"
    />
  );
};
      `.trim(),
    },
    {
      heading: "フォームの送信処理",
      content: "フォームが送信されたとき（`onSubmit`）に、ページのリロードを防ぐために必ず `event.preventDefault()` を呼び出します。その後、stateに保持されているフォームデータを処理します。",
      example: `
const SubmissionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロードを防ぐ
    console.log('送信されたデータ:', email);
    // ここでAPIコールなどの処理を行う
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">登録</button>
    </form>
  );
};
      `.trim(),
    },
    {
      heading: "カスタムHooksによるロジックの再利用",
      content: "複数のコンポーネントで同じ状態管理ロジック（例：フォーム入力のトラッキング、ローディング状態の管理など）を使いたい場合に、`use`から始まる関数としてロジックを切り出します。これはVueのコンポーザブル関数と役割が同じです。",
      example: `
// 上部で定義した useForm を使用する例
const UserProfileForm = () => {
  // useFormフックを使って名前と住所の入力ロジックを再利用
  const name = useForm('山田太郎');
  const address = useForm('');

  const submitProfile = () => {
    console.log(\`名前: \${name.value}, 住所: \${address.value}\`);
    name.reset();
    address.reset();
  };

  return (
    <div className="p-4 space-y-3">
        <input {...name} className="border p-2 rounded w-full" placeholder="名前" />
        <textarea {...address} className="border p-2 rounded w-full" placeholder="住所" />
        <button onClick={submitProfile} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            プロフィールを保存
        </button>
    </div>
  );
};
      `.trim(),
    },
  ],
};

/**
 * 学習項目3（フォーム処理とカスタムHooks）のデータを表示するコンポーネント。
 */
const Item7: React.FC = () => {
    return (
        <ReferenceItemCard 
            title={itemData7.title}
            summary={itemData7.summary}
            details={itemData7.details}
        />
    );
};

export default Item7;