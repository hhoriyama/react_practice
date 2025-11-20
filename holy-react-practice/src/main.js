"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
// DOMのルート要素（index.htmlの<div id="root">）を取得し、
// Reactのルートを作成します。
client_1.default.createRoot(document.getElementById('root')).render(
// <React.StrictMode>は、開発中に潜在的な問題をチェックするためのツールです。
<react_1.default.StrictMode>
    <App_tsx_1.default />
  </react_1.default.StrictMode>);
