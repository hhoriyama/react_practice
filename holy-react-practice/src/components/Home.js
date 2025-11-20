"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var Home = function (_a) {
    var items = _a.items, onSelect = _a.onSelect;
    var formatDate = function (isoString) {
        // ISO文字列を「YYYY/MM/DD」形式にフォーマット
        return new Date(isoString).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    };
    return (<div className="page-container">
      <div className="header-row">
        <h2 className="page-title">リファレンス・ノート一覧</h2>
        {/* 静的サイトのため、新規作成ボタンはここにはありません */}
      </div>

      <div className="list-container">
        {items.length === 0 ? (<div className="empty-state">
            <p>データがありません。</p>
          </div>) : (items.map(function (item) { return (<div key={item.id} className="card" onClick={function () { return onSelect(item.id); }} // クリック時に親コンポーネントにIDを通知
         tabIndex={0} role="button">
              <div className="card-header">
                <h3 className="card-title">{item.title}</h3>
                <span className="badge">{item.category}</span>
              </div>
              <div className="card-footer">
                <span className="date">{formatDate(item.createdAt)}</span>
                {/* 削除機能もありません */}
              </div>
            </div>); }))}
      </div>
    </div>);
};
exports.Home = Home;
