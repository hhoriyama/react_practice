import React, { useState } from 'react';

// 学習項目A1のデータと表示ロジックを含むコンポーネント
const ItemA1: React.FC = () => {
  // 展開状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // トグル関数
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // データの構造
  const itemData = {
    title: "React Hooks (useState & useEffect)",
    summary: "Reactの関数コンポーネントで状態管理や副作用を扱うための基本的なフックです。",
    details: [
      {
        heading: "useStateの役割",
        content: "コンポーネントにローカルな状態（state）を追加するために使用されます。コンポーネントが再レンダリングされても状態が保持されます。",
        example: 'const [count, setCount] = useState(0);',
      },
      {
        heading: "useEffectの役割",
        content: "データの取得、購読の設定、DOMの手動変更など、副作用（side effects）をクリーンアップ処理とともに実行するために使用されます。",
        example: "useEffect(() => { /* side effect code */ }, [dependencies]);",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 transition duration-300 hover:shadow-xl border border-gray-100">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-bold text-blue-600">
          {itemData.title}
        </h2>
        {/* 展開状態を示すアイコン */}
        <span className={`text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-500' : 'rotate-0 text-gray-400'}`}>
          &gt; {/* 右向きの矢印を使用 */}
        </span>
      </div>

      <p className="mt-2 text-gray-600 italic">
        {itemData.summary}
      </p>

      {/* 展開されたときに表示される詳細コンテンツ */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          {itemData.details.map((detail, index) => (
            <div key={index} className="mb-4 last:mb-0 p-3 bg-blue-50/50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 border-b border-blue-200 pb-1 mb-1">
                {detail.heading}
              </h3>
              <p className="text-gray-700">
                {detail.content}
              </p>
              {detail.example && (
                <pre className="mt-2 p-2 text-sm bg-gray-800 text-green-400 rounded-md overflow-x-auto font-mono">
                  <code>{detail.example}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemA1;

// CSSアニメーションのキーフレーム定義 (Tailwindでは通常不要ですが、ここでは可読性のためにスタイルガイドとして記述)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
*/