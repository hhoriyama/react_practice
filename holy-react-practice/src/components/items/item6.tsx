import React, { useState, useEffect } from 'react';
// 共通コンポーネントをインポートします
// 拡張子 (.tsx) を削除して解決を試みます。
import ReferenceItemCard from './ReferenceItemCard'; 

// JSONで提供された学習ロードマップのStep 2に基づいてデータを設定
const itemData6 = {
  title: "React学習項目2：Hooksによる状態管理と副作用 (Reactの核)",
  summary: "Hooks（特にuseStateとuseEffect）は、関数コンポーネントに状態とライフサイクル機能を与えるReactの核となる機能です。Vueのリアクティビティシステムやライフサイクルフックとの対比で理解を深めます。",
  details: [
    {
      heading: "useState: 状態の定義と更新",
      content: "コンポーネント内で変化するデータを管理するためのフックです。Vueの `data` オプションやComposition APIの `ref` に相当します。状態変数と、それを更新するための関数をペアで取得します。",
      example: `
const Counter = () => {
  // count: 状態変数 (値), setCount: 更新関数
  // 初期値は0
  const [count, setCount] = useState(0); 

  const increment = () => {
    // setCountを使って状態を更新する
    setCount(count + 1); 
  };

  return (
    <button onClick={increment}>
      クリック数: {count}
    </button>
  );
};
      `.trim(),
    },
    {
      heading: "useEffect: 副作用の処理とライフサイクル",
      content: "コンポーネントのレンダリング後に実行したい処理（データ取得、DOM操作、タイマー設定など）を記述します。Vueの `mounted` や `watch` の役割を兼ねます。第二引数の**依存配列**が非常に重要です。",
      example: `
// 外部APIからデータを取得する例
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // レンダリング後に実行される副作用（データ取得）
    fetch('/api/users')
      .then(res => res.json())
      .then(setData);

    // 依存配列が空 ([]) のため、マウント時（最初のレンダリング後）に一度だけ実行される
  }, []); 

  return <p>{data ? data.length + '件のユーザー' : 'ロード中...'}</p>;
};
      `.trim(),
    },
    {
      heading: "リストレンダリング: JavaScriptのmap()関数",
      content: "Vueの `v-for` のように、データの配列を繰り返し処理して要素を生成します。Reactでは、配列の `map()` メソッドを使用し、JSXの配列を返します。各要素には一意な `key` Propを渡す必要があります。",
      example: `
const TodoList = ({ todos }) => {
  return (
    <ul>
      {/* JavaScriptのmap()を使って配列を要素のリストに変換 */}
      {todos.map((todo) => (
        // keyは要素の一意性を保証するために必須
        <li key={todo.id}>{todo.text}</li> 
      ))}
    </ul>
  );
};
      `.trim(),
    },
    {
      heading: "条件付きレンダリング: &&と三項演算子",
      content: "特定の条件に基づいて要素の表示/非表示を切り替えます。Vueの `v-if` や `v-show` に相当します。論理AND演算子 (`&&`) や三項演算子 (`condition ? true_case : false_case`) をJSX内で使います。",
      example: `
const StatusMessage = ({ isLoggedIn }) => {
  return (
    <div>
      {/* 論理AND (&&): isLoggedInがtrueなら要素が表示される */}
      {isLoggedIn && <p>ようこそ！</p>}

      {/* 三項演算子: if/elseの切り替え */}
      {isLoggedIn ? (
        <button>ログアウト</button>
      ) : (
        <button>ログイン</button>
      )}
    </div>
  );
};
      `.trim(),
    },
  ],
};

/**
 * 学習項目2（Hooksと状態管理）のデータを表示するコンポーネント。
 */
const Item6: React.FC = () => {
    return (
        <ReferenceItemCard 
            title={itemData6.title}
            summary={itemData6.summary}
            details={itemData6.details}
        />
    );
};

export default Item6;