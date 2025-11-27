import React, { createContext, useContext, useState, useReducer, useCallback } from 'react';
// 共通コンポーネントをインポートします
// 拡張子 (.tsx) を削除して解決を試みます。
import ReferenceItemCard from './ReferenceItemCard'; 

// --- 1. Context APIの概念 ---

// 1. Contextの作成
// Contextは、グローバルなデータ（状態とディスパッチャ）を保持するためのオブジェクトです。
const CounterContext = createContext({
  count: 0,
  // 関数の型はここでは簡略化しています
  dispatch: (_action: { type: 'INCREMENT' | 'DECREMENT' }) => {}, 
});

// 2. Reducerの定義 (useReducerを使用する場合)
type State = { count: number };
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 3. Providerコンポーネントの作成
// Providerは、Contextの値を設定し、子コンポーネントツリー全体にデータを提供します。
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  // 提供する値をメモ化（useCallback/useMemoと同様にパフォーマンス最適化のために重要）
  const contextValue = React.useMemo(() => ({
    count: state.count,
    dispatch,
  }), [state.count]);

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

// 4. Custom Hookの作成（Contextを簡単に利用するため）
// コンポーネントでContextを消費するためのフック
const useCounter = () => useContext(CounterContext);


// Contextを消費する子コンポーネントの例
const ContextConsumerComponent: React.FC = () => {
  const { count, dispatch } = useCounter();

  return (
    <div className="p-3 bg-indigo-50 rounded-lg">
      <p className="font-semibold text-indigo-700">グローバルなカウンター値: {count}</p>
      <div className="flex gap-2 mt-2">
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm hover:bg-indigo-600 transition"
        >
          Increment
        </button>
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm hover:bg-pink-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

// --- 2. ルーティングの概念 (簡易的な切り替えロジック) ---

// 簡易ルーティングのためのState
const useSimpleRouter = () => {
    const [page, setPage] = useState('home');
    const navigate = useCallback((newPage: string) => setPage(newPage), []);
    return { page, navigate };
}

const HomeComponent = () => <div className="p-4 bg-green-100 rounded-lg">
    <h3 className="text-xl font-bold text-green-800">ホーム画面</h3>
    <p>ようこそ！ここはアプリケーションのトップページです。</p>
</div>;

const AboutComponent = () => <div className="p-4 bg-yellow-100 rounded-lg">
    <h3 className="text-xl font-bold text-yellow-800">会社概要画面</h3>
    <p>このアプリケーションはReactで開発されています。</p>
</div>;

// ルーティング切り替えロジック
const RouterDisplay: React.FC<{ page: string }> = ({ page }) => {
    switch (page) {
        case 'home':
            return <HomeComponent />;
        case 'about':
            return <AboutComponent />;
        default:
            return <div className="text-red-500">404 Page Not Found</div>;
    }
};

// JSONで提供された学習ロードマップのStep 4に基づいてデータを設定
const itemData8 = {
  title: "React学習項目4：グローバルな状態管理とルーティング",
  summary: "Context APIと`useReducer`を組み合わせることで、コンポーネントツリーの深い階層にあるコンポーネント間でも状態を簡単に共有する方法を学びます。また、Reactにおける画面遷移（ルーティング）の考え方を習得します。",
  details: [
    {
      heading: "Context APIの役割とProvider/Consumer",
      content: "Context APIは、Propsのバケツリレー（Drilling）を回避し、アプリケーション全体または特定の部分でデータを共有するための機能です。 VueのProvide/Injectに似ていますが、Context APIは状態管理の基盤としても利用されます。データを提供する側を`Provider`、利用する側を`Consumer`（通常は`useContext`フック）と呼びます。",
      example: `
// 1. Contextを作成 (createContext)
// 2. Providerで値を設定し、コンポーネントを囲む
// 3. useContextで値を取得する
// 上記のサンプルコードでは、useReducerと組み合わせてより高度な状態管理を実現しています。
      `.trim(),
    },
    {
      heading: "useReducerによる複雑な状態ロジック",
      content: "`useReducer`は、状態（State）と、状態を更新するロジック（Reducer）を分離するために使用されます。Vuex/PiniaのActionとMutationが分離されているのと同様に、状態変更のロジックがコンポーネントから切り離され、より予測可能になります。特にContext APIと組み合わせて使用されることが多いです。",
      example: `
// useReducerの基本構文:
// const [state, dispatch] = useReducer(reducer, initialState);

// Reducer関数 (状態の変更ロジックのみを記述)
const myReducer = (state, action) => {
  if (action.type === 'SET_USER') {
    return { ...state, user: action.payload };
  }
  return state;
};
      `.trim(),
    },
    {
      heading: "React Routerによる画面遷移",
      content: "Reactはシングルページアプリケーション（SPA）であるため、画面遷移を実現するには通常`react-router-dom`のようなライブラリを使用します。Vue Routerと同様に、URLパスに基づいて表示するコンポーネントを切り替えます。",
      example: `
// 実際のライブラリを使用する場合は、以下のような構造になります。
/* import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/about">概要</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/about" element={<AboutComponent />} />
    </Routes>
  </BrowserRouter>
);
*/
      `.trim(),
    },
  ],
};

/**
 * 学習項目4（Context APIとルーティング）のデータを表示するコンポーネント。
 */
const Item8: React.FC = () => {
    const { page, navigate } = useSimpleRouter();

    return (
        <ReferenceItemCard 
            title={itemData8.title}
            summary={itemData8.summary}
            details={itemData8.details}
        >
            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700 border-b pb-1">Context API サンプル</h4>
            <CounterProvider>
                <div className="flex flex-col items-center space-y-4 p-4 border rounded-xl bg-white shadow-inner">
                    <p className="text-sm text-gray-500">グローバルに状態を管理するContextProviderで囲んでいます。</p>
                    <ContextConsumerComponent />
                    {/* ContextConsumerComponentをツリーの深いところに配置しても、状態にアクセス可能 */}
                    <div className="pt-4 px-4 border-t w-full">
                        <ContextConsumerComponent />
                    </div>
                </div>
            </CounterProvider>

            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700 border-b pb-1">簡易ルーティング サンプル</h4>
            <div className="space-y-4 p-4 border rounded-xl bg-white shadow-inner">
                <div className="flex space-x-4">
                    <button 
                        onClick={() => navigate('home')}
                        className={`px-4 py-2 rounded-lg transition ${page === 'home' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-blue-100'}`}
                    >
                        Homeへ移動
                    </button>
                    <button 
                        onClick={() => navigate('about')}
                        className={`px-4 py-2 rounded-lg transition ${page === 'about' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-blue-100'}`}
                    >
                        Aboutへ移動
                    </button>
                </div>
                <div className="min-h-24 pt-4 border-t">
                    <RouterDisplay page={page} />
                </div>
            </div>
        </ReferenceItemCard>
    );
};

export default Item8;