import { useState } from 'react';
import { REFERENCE_ITEMS } from './data.ts'; // 静的データをインポート
import { Home } from './components/Home.tsx';
import { DetailPage } from './components/DetailPage.tsx';

// ページの状態を定義。ここでは一覧画面(home)か詳細画面(detail)のみ。
type PageState = 
  | { view: 'home' } 
  | { view: 'detail'; itemId: string }; 

export default function App() {
  const studyItems = REFERENCE_ITEMS; // 静的データを使用
  const [pageState, setPageState] = useState<PageState>({ view: 'home' });

  // 記事が選択されたときのハンドラー（詳細画面へ遷移）
  const handleSelect = (id: string) => setPageState({ view: 'detail', itemId: id });
  
  // 戻るボタンのハンドラー（一覧画面へ戻る）
  const handleBack = () => setPageState({ view: 'home' });

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1 className="app-title">React/TS 備忘録 (リファレンス)</h1>
      </header>

      <main className="app-main">
        {/* ページルーティングの処理 */}
        {pageState.view === 'home' && (
          <Home
            items={studyItems}
            onSelect={handleSelect}
          />
        )}
        {pageState.view === 'detail' && (
          <DetailPage
            itemId={pageState.itemId}
            items={studyItems}
            onBack={handleBack}
          />
        )}
      </main>

      <footer className="app-footer">
        &copy; 2025 React Static Reference Guide
      </footer>
    </div>
  );
}