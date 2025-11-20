import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// DOMのルート要素（index.htmlの<div id="root">）を取得し、
// Reactのルートを作成します。
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>は、開発中に潜在的な問題をチェックするためのツールです。
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);