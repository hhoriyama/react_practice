import React from 'react';

// ----------------------------------------------------------------------
// 1. 子コンポーネント: GreetingCardDemo (ライブデモ用)
// ----------------------------------------------------------------------

// Propsの型定義
interface GreetingCardProps {
    userName: string;
    message: string;
    isLoggedIn: boolean;
}

/**
 * Propsとして受け取った情報（userName, message, isLoggedIn）を表示するカードコンポーネントのデモ版。
 */
const GreetingCardDemo: React.FC<GreetingCardProps> = ({ userName, message, isLoggedIn }) => {
    // Propsの値に基づいてスタイルを動的に決定
    const statusText = isLoggedIn ? "現在ログイン中です。" : "ゲストとして表示しています。";
    const cardStyle = isLoggedIn
        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
        : "bg-white border border-gray-300 text-gray-800 shadow-md";

    return (
        <div className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.03] ${cardStyle} max-w-xs w-full mx-auto text-sm`}>
            <p className="text-xs font-semibold mb-1 opacity-80">
                {statusText}
            </p>
            <h2 className={`text-xl font-bold mb-1 ${isLoggedIn ? 'text-white' : 'text-indigo-600'}`}>
                Hello, {userName}!
            </h2>
            <p className="leading-relaxed">
                {message}
            </p>
        </div>
    );
};

// ----------------------------------------------------------------------
// 2. 詳細コンテンツデータ (コードと解説)
// ----------------------------------------------------------------------

// 解説セクションのデータ構造を定義
interface ItemDetail {
    heading: string;
    content: string;
    example: string;
}

const itemDetails: ItemDetail[] = [
  {
    heading: "1. 子コンポーネントの定義 (GreetingCard)",
    content: 
      "Propsを受け取る側のコンポーネントです。TypeScriptでは受け取るPropsの型をInterfaceで明確に定義します。Vueと同様に、Propsは読み取り専用で、コンポーネント内で直接変更はしません。",
    example: `// Propsの型定義
interface GreetingCardProps {
  userName: string;
  message: string;
  isLoggedIn: boolean;
}

// 子コンポーネント（関数コンポーネント）
const GreetingCard: React.FC<GreetingCardProps> = ({
  userName, // Propsから受け取る
  message,    
  isLoggedIn, 
}) => {
  // Propsの値を使ってJSXをレンダリング
  return (
    <div className="...">
      <h2>Hello, {userName}!</h2>
      {/* ... */}
    </div>
  );
};`
  },
  {
    heading: "2. 親コンポーネントでの利用とPropsの渡し方",
    content: 
      "親コンポーネントから子コンポーネントを呼び出す際、HTMLの属性のようにPropsを渡します。変数やJavaScriptの式を渡す場合は、Vueの `:prop-name` と同様に波括弧 {} を使用します。",
    example: `// 親コンポーネント (Item5_1.tsx相当)
const Item5_1: React.FC = () => {
  const user = { name: "Aoki Satoshi", status: true };

  return (
    <>
      {/* 変数や真偽値は波括弧 {} で渡す */}
      <GreetingCard
          userName={user.name}         
          message="作業お疲れ様です！" 
          isLoggedIn={user.status}     
      />
      
      {/* 静的な文字列はクォート、真偽値は波括弧で渡す */}
      <GreetingCard
          userName="Guest"
          message={"サインインしてください。"} // 文字列リテラルは波括弧を使っても良い
          isLoggedIn={false}
      />
    </>
  );
};`
  },
];

// ----------------------------------------------------------------------
// 3. メインページコンポーネント: Item5_1 (固定表示)
// ----------------------------------------------------------------------

/**
 * 学習項目5-1: Propsを使ったコンポーネント間データ連携のサンプル
 * ライブデモと、固定表示の解説カードを提供します。
 */
const Item5_1: React.FC = () => {
  const requestedTitle = "学習項目５サンプルAPP - Props連携";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-2">
        Item 5-1: Propsによるコンポーネント連携サンプル
      </h1>
      
      {/* ライブデモ部分 */}
      <div className="mb-10 p-6 bg-white rounded-2xl shadow-2xl border border-indigo-300">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            ライブデモ: Propsによる表示の切り替え
        </h2>
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-4">
            {/* パターン 1: ログイン済み */}
            <GreetingCardDemo
                userName="Aoki Satoshi"
                message="作業お疲れ様です！"
                isLoggedIn={true}
            />
            {/* パターン 2: ゲスト */}
            <GreetingCardDemo
                userName="Guest"
                message="サインインしてください。"
                isLoggedIn={false}
            />
        </div>
      </div>
      
      {/* 解説セクション (常に表示) */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            {requestedTitle} (解説)
        </h2>
        
        <p className="text-gray-600 mb-6 text-sm">
          親コンポーネントから子コンポーネントへデータを渡すProps（プロパティ）の仕組みを解説します。
        </p>

        {itemDetails.map((detail, index) => (
          <div key={index} className="mb-8 p-4 border border-gray-100 rounded-lg bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-indigo-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-mono mr-2">
                  {index + 1}
              </span>
              {detail.heading}
            </h3>
            
            <p className="text-gray-700 mb-3 pl-8">{detail.content}</p>
            
            {/* コードブロック */}
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto text-xs font-mono shadow-inner">
              <code>{detail.example}</code>
            </pre>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Item5_1;