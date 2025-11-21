import React, { useState } from 'react';

// 学習項目B2のデータと表示ロジックを含むコンポーネント
const ItemB2: React.FC = () => {
  // 展開状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // トグル関数
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // データの構造
  const itemData = {
    title: "TypeScriptの基本的な型システム",
    summary: "JavaScriptに静的型付けを追加するTypeScriptの核となる機能です。",
    details: [
      {
        heading: "プリミティブ型",
        content: "string, number, boolean などの基本的な型。変数の宣言時に型注釈（type annotation）を付けます。",
        example: 'let isDone: boolean = false;\nlet name: string = "Alice";',
      },
      {
        heading: "配列とタプル",
        content: "配列は `Type[]` または `Array<Type>` で定義します。タプルは要素の型と数が固定された配列です。",
        example: 'let list: number[] = [1, 2, 3];\nlet x: [string, number];',
      },
      {
        heading: "インターフェース (Interface)",
        content: "オブジェクトの構造を定義するために使用されます。コードの明確化と契約の強制に役立ちます。",
        example: 'interface User { id: number; name: string; }',
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
        <h2 className="text-2xl font-bold text-purple-600">
          {itemData.title}
        </h2>
        {/* 展開状態を示すアイコン */}
        <span className={`text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-purple-500' : 'rotate-0 text-gray-400'}`}>
          &gt;
        </span>
      </div>

      <p className="mt-2 text-gray-600 italic">
        {itemData.summary}
      </p>

      {/* 展開されたときに表示される詳細コンテンツ */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          {itemData.details.map((detail, index) => (
            <div key={index} className="mb-4 last:mb-0 p-3 bg-purple-50/50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 border-b border-purple-200 pb-1 mb-1">
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

export default ItemB2;