import React from 'react';
// 共通コンポーネントをインポート
import ReferenceItemCard from './ReferenceItemCard.tsx'; 

// Item4固有のデータ構造を定義: システム構成と環境
const itemData4 = {
  title: "システム構成と開発環境",
  summary: "本アプリケーションのインフラストラクチャ、採用技術、および主要なコンポーネントフローをまとめた概要です。",
  details: [
    {
      heading: "インフラストラクチャ (AWS)",
      content: "フロントエンド静的ファイルをAmazon S3にホスティングし、高速なコンテンツ配信とセキュリティのためにAmazon CloudFrontを経由させています。APIサーバーやデータベースは別の環境で構築されており、必要に応じて連携します。",
      example: 'S3 (Static Hosting) → CloudFront (CDN/Cache) → Client Browser',
    },
    {
      heading: "主要な技術スタック",
      content: "現代的な開発環境として、React v18+を核に採用。型安全性を高めるTypeScriptと、迅速かつレスポンシブなUI構築を可能にするユーティリティファーストのCSSフレームワークであるTailwind CSSを使用しています。",
      example: 'React (Hooks) + TypeScript + Tailwind CSS',
    },
    {
      heading: "コンポーネントフロー（ディレクトリ構造とデータの流れ）",
      content: "アプリケーションの主要な表示項目は、以下のディレクトリ構造とコンポーネントの階層構造で構成されており、親から子へデータとロジックが渡されます。",
      example: `
// 1. ディレクトリ構造の概要
src/
  ├── components/
  │    └── items/     
  │         │   item.tsx              // 個別アイテム (例: Item1.tsx,Item2.tsx)
  │         └── ReferenceItemCard.tsx // 共通UIカード
  ├── Home.tsx      // ページコンポーネント
  ├── App.tsx       // アプリケーション全体
  └── main.tsx      // エントリポイント

// 2. データの流れ
index.html (HTML)
  ↓
main.tsx (Reactの初期化)
  ↓
App.tsx (ルーティング/全体レイアウト)
  ↓
Home.tsx (ページ固有のロジック/データ取得)
  ↓
Item.tsx (詳細情報の表示)
  ↓
ReferenceItemCard.tsx (UIコンポーネント)
      `.trim(),
    },
  ],
};

/**
 * 学習項目4 (システム環境) のデータを表示するコンポーネント。
 * 実際のUIはReferenceItemCardに委譲しています。
 */
const Item4: React.FC = () => {
    return (
        <ReferenceItemCard 
            title={itemData4.title}
            summary={itemData4.summary}
            details={itemData4.details}
        />
    );
};

export default Item4;