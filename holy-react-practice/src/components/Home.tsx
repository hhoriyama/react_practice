import React from 'react';
import ItemA1 from './items/item1';
import ItemB2 from './items/item2';
import ItemC3 from './items/item3';

// このコンポーネントがアプリケーションのエントリーポイントです
// Tailwind CSSが利用可能であることを前提としています。
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <header className="text-center mb-10 p-6 bg-white rounded-xl shadow-md border-b-4 border-blue-500">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight">
          Tech Study Reference Guide
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          学習項目をコンポーネントとして分割した最新の構成
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/*
          データが一つずつコンポーネントとして呼び出されます。
          これで、個別のデータを変更したい場合に、そのアイテムファイルだけを編集すればよくなります。
        */}
        <ItemA1 />
        <ItemB2 />
        <ItemC3 />
      </main>

      <footer className="text-center mt-12 p-4 text-gray-500 text-sm">
        &copy; 2025 Study Guide Project
      </footer>
    </div>
  );
};

export default Home;