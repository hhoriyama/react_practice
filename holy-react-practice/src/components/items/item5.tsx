import React, { useState } from 'react';
// 共通コンポーネントをインポートします
import ReferenceItemCard from './ReferenceItemCard'; 
// Item5-1で定義されたデモコンポーネントをインポート
import Item5_1 from './Item5-1'; 

// Item5固有のデータ構造を定義: コンポーネントの基本とProps
const itemData5 = {
  title: "React学習項目5：コンポーネントの基本とProps",
  summary: "Reactアプリケーションの最小単位である「コンポーネント」の定義方法と、親コンポーネントから子コンポーネントへデータを渡すための「Props (プロパティ)」の仕組みを学びます。",
  details: [
    {
      heading: "関数コンポーネントの定義",
      content: "Reactで最も一般的に使われる形式です。JavaScriptの通常の関数として定義され、JSX (JavaScript XML) を返します。JSXは、ブラウザが理解できる標準のHTML要素に変換されます。",
      example: `
// 1. 関数としてコンポーネントを定義する
const WelcomeMessage = (props) => {
  // 2. JSX（HTMLのような構文）を返す
  return <h1>Hello, {props.name}</h1>;
};
export default WelcomeMessage;
      `.trim(),
    },
    {
      heading: "Props（プロパティ）によるデータの受け渡し",
      content: "Propsは、親コンポーネントから子コンポーネントへ一方通行でデータを渡すための仕組みです。子コンポーネントはPropsを読み取り専用（イミュータブル）として扱います。これにより、データの流れが一貫し、デバッグが容易になります。",
      example: `
// 親コンポーネント (App.tsx)
const App = () => {
  return (
    // 'name'というPropsを子コンポーネントに渡す
    <WelcomeMessage name="世界" />
  );
};
      `.trim(),
    },
    {
      heading: "JSXとは",
      content: "JSXはJavaScript内でHTMLのような構造を記述するための拡張構文です。見た目はHTMLに似ていますが、実際にはJavaScriptのオブジェクトを生成します。主なルールとして、HTMLクラスは予約語衝突を避けるために `className` を使用し、すべての要素は単一の親要素でラップされる必要があります。",
      example: `
// JSXの例
<div className="container">
  {/* JavaScriptの変数や式は中括弧 {} で埋め込む */}
  <p>現在の年: {new Date().getFullYear()}</p>
</div>
      `.trim(),
    },
    {
      heading: "コンポーネントの再利用性",
      content: "コンポーネントは機能やUIの塊であり、様々な場所で再利用可能です。例えば、同じデザインのボタンやカードを異なるデータ（Props）で何度も使用できます。これがReact開発の強力な柱となります。",
      example: `
const ItemList = () => {
  return (
    <div>
      <ProfileCard name="山田" role="エンジニア" />
      <ProfileCard name="佐藤" role="デザイナー" />
      <ProfileCard name="田中" role="マネージャー" />
    </div>
  );
};
      `.trim(),
    },
  ],
};

/**
 * 学習項目5のデータを表示するコンポーネント。
 * Item5_reとしてリネームされました。
 * サンプルアプリ（Item5_1）への切り替え機能を追加しました。
 */
const Item5_re: React.FC = () => {
    // 表示モードを管理するステート: 'main' (解説カード) または 'demo' (サンプルアプリ)
    const [viewMode, setViewMode] = useState<'main' | 'demo'>('main');

    // 'main'モード（解説）のレンダリング
    if (viewMode === 'main') {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <ReferenceItemCard 
                    title={itemData5.title}
                    summary={itemData5.summary}
                    details={itemData5.details}
                />
                
                {/* サンプルアプリへ遷移するためのボタン */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setViewMode('demo')}
                        className="flex items-center space-x-2 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
                    >
                        {/* アイコンの代わりとしてSVGを直接使用 (Box) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                        <span className="text-lg">サンプルAPP (Item 5-1) を開く</span>
                    </button>
                </div>
            </div>
        );
    }

    // 'demo'モード（サンプルアプリ）のレンダリング
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* メインページに戻るボタン */}
            <div className="mb-6">
                <button
                    onClick={() => setViewMode('main')}
                    className="flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 transition duration-200 text-sm"
                >
                    {/* 戻るアイコンの代わりとしてSVGを直接使用 (Arrow Left) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"></path>
                        <path d="M12 19l-7-7 7-7"></path>
                    </svg>
                    <span>学習項目5の解説に戻る</span>
                </button>
            </div>
            
            {/* Item5-1のコンテンツをレンダリング */}
            <Item5_1 />
        </div>
    );
};

export default Item5_re;