import React, { useState } from "react";

// Detailセクションの型定義
type Detail = {
  heading: string;
  content: string;
  example?: string;
};

// コンポーネントのPropsの型定義
type ReferenceItemCardProps = {
  title: string;
  summary: string;
  details: Detail[];
};

/**
 * 展開・折りたたみ機能を持ち、学習アイテムの詳細を表示する共通UIコンポーネント。
 * データ（タイトル、概要、詳細）をPropsとして受け取り、内部で展開状態を管理します。
 */
const ReferenceItemCard: React.FC<ReferenceItemCardProps> = ({
  title,
  summary,
  details,
}) => {
  // 展開状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // トグル関数
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 transition duration-300 hover:shadow-xl border border-gray-100">
      {/* クリック可能なヘッダー部分 */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
      >
        {/* タイトル */}
        <h2 className="text-2xl font-bold text-blue-600">{title}</h2>

        {/* 展開状態を示すアイコン (右矢印を回転させて表現) */}
        <span
          className={`text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-90 text-blue-500" : "rotate-0 text-gray-400"
          }`}
        >
          &gt;
        </span>
      </div>

      {/* 概要 */}
      <p className="mt-2 text-gray-600 italic">{summary}</p>

      {/* 展開されたときに表示される詳細コンテンツ */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          {details.map((detail, index) => (
            <div
              key={index}
              className="mb-4 last:mb-0 p-3 bg-blue-50/50 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-700 border-b border-blue-200 pb-1 mb-1">
                {detail.heading}
              </h3>
              <p className="text-gray-700">{detail.content}</p>
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

export default ReferenceItemCard;
