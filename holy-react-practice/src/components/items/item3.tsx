import React, { useState } from 'react';

// 学習項目C3のデータと表示ロジックを含むコンポーネント
const ItemC3: React.FC = () => {
  // 展開状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // トグル関数
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // データの構造
  const itemData = {
    title: "Tailwind CSS Utility First",
    summary: "事前定義されたユーティリティクラスを使用して、カスタムデザインを迅速に構築するCSSフレームワークです。",
    details: [
      {
        heading: "Utility-Firstの原則",
        content: "CSSを記述する代わりに、HTMLマークアップに直接クラス名を追加してスタイルを適用します。これにより、開発速度が向上します。",
        example: '<div className="bg-blue-500 text-white p-4 rounded-lg">...</div>',
      },
      {
        heading: "レスポンシブデザイン",
        content: "ブレークポイントプレフィックス (sm:, md:, lg:) を使用して、異なる画面サイズに対応したスタイルを簡単に定義できます。",
        example: '<div className="w-full md:w-1/2 lg:w-1/4">...</div>',
      },
      {
        heading: "設定の拡張",
        content: "tailwind.config.js ファイルを使用して、テーマ（色、フォント、間隔など）をカスタマイズ・拡張できます。",
        example: '// tailwind.config.js\ntheme: { extend: { colors: { "primary": "#1da1f2" } } }',
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
        <h2 className="text-2xl font-bold text-teal-600">
          {itemData.title}
        </h2>
        {/* 展開状態を示すアイコン */}
        <span className={`text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-teal-500' : 'rotate-0 text-gray-400'}`}>
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
            <div key={index} className="mb-4 last:mb-0 p-3 bg-teal-50/50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 border-b border-teal-200 pb-1 mb-1">
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

export default ItemC3;