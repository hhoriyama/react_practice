"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = require("react");
var data_1 = require("./data"); // 静的データをインポート
var Home_1 = require("./components/Home");
var DetailPage_1 = require("./components/DetailPage");
function App() {
    var studyItems = data_1.REFERENCE_ITEMS; // 静的データを使用
    var _a = (0, react_1.useState)({ view: 'home' }), pageState = _a[0], setPageState = _a[1];
    // 記事が選択されたときのハンドラー（詳細画面へ遷移）
    var handleSelect = function (id) { return setPageState({ view: 'detail', itemId: id }); };
    // 戻るボタンのハンドラー（一覧画面へ戻る）
    var handleBack = function () { return setPageState({ view: 'home' }); };
    return (<div className="app-layout">
      <header className="app-header">
        <h1 className="app-title">React/TS 備忘録 (リファレンス)</h1>
      </header>

      <main className="app-main">
        {/* ページルーティングの処理 */}
        {pageState.view === 'home' && (<Home_1.Home items={studyItems} onSelect={handleSelect}/>)}
        {pageState.view === 'detail' && (<DetailPage_1.DetailPage itemId={pageState.itemId} items={studyItems} onBack={handleBack}/>)}
      </main>

      <footer className="app-footer">
        &copy; 2025 React Static Reference Guide
      </footer>
    </div>);
}
