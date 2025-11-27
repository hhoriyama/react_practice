import React, { useState, useEffect, useCallback, useMemo } from 'react';
// エラー解消のため、拡張子を明示的に指定します。
import ReferenceItemCard from './ReferenceItemCard'; 

// 簡易的なデータフェッチのCustom Hook（React Queryの概念を模倣）
// VueのComposition APIで非同期処理を扱うのと同様
const useDataFetch = (url: string) => {
    const [data, setData] = useState<any[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // 実際はAPIコール
                const response = await new Promise<any[]>((resolve) => {
                    setTimeout(() => {
                        resolve([{ id: 1, name: 'TanStack Query', likes: 1200 }, { id: 2, name: 'SWR', likes: 800 }]);
                    }, 500); // 500msの遅延をシミュレート
                });
                setData(response);
            } catch (err) {
                setError('データの取得に失敗しました。');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    // useMemo: データの整形など、計算コストの高い処理の結果をキャッシュする
    const totalLikes = useMemo(() => {
        if (!data) return 0;
        return data.reduce((sum, item) => sum + item.likes, 0);
    }, [data]); // dataが変更されたときのみ再計算

    return { data, isLoading, error, totalLikes };
};

// サンプルで使用するコンポーネント
const LibraryList: React.FC = () => {
  const { data, isLoading, error, totalLikes } = useDataFetch('/api/libraries');

  if (isLoading) return <p className="text-blue-500 font-semibold animate-pulse">データをロード中...</p>;
  if (error) return <p className="text-red-500 font-semibold">{error}</p>;
  
  return (
    <div className="space-y-3 w-full max-w-md mx-auto">
      <div className="p-3 bg-indigo-100 rounded-lg shadow-inner">
        <p className="text-sm font-medium text-indigo-700">【useMemoによる計算結果】</p>
        <p className="text-xl font-bold text-indigo-900">合計いいね数: {totalLikes}</p>
      </div>
      <p className="text-gray-600 text-sm font-medium">フェッチされたライブラリリスト:</p>
      {data.map((item: any) => (
        <div key={item.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white shadow-sm transition hover:shadow-md">
          <span className="font-semibold text-gray-800">{item.name}</span>
          <span className="text-sm text-pink-600 font-mono">{item.likes} いいね</span>
        </div>
      ))}
    </div>
  );
};


// JSONで提供された学習ロードマップのStep 5に基づいてデータを設定
const itemData9 = {
  title: "React学習項目5：実践的なデータフェッチとテスト",
  summary: "複雑なアプリケーションにおいて、APIからのデータ取得を効率化するライブラリ（React Query/SWR）の概念と、コードの品質を保証するためのコンポーネントテストの基礎を学びます。",
  details: [
    {
      heading: "データフェッチライブラリ (React Query / SWR)",
      content: "生の `useEffect` と `useState` を使ったデータ取得は、キャッシュ管理、再フェッチ、ローディング/エラー状態の管理が煩雑になりがちです。React Query (TanStack Query) や SWR は、これらを自動で処理し、開発体験を大幅に向上させます。これらのライブラリは、VueにおけるPinia/Vuexとは異なり、主に非同期データ（サーバー状態）の管理に特化しています。 ",
      example: `
// useDataFetchフックの使用例
const LibraryList = () => {
  // useDataFetchフックが、ローディング、エラー、データの状態を自動管理
  const { data, isLoading, error, totalLikes } = useDataFetch('/api/libraries');
  // ...表示ロジック...
};
      `.trim(),
    },
    {
      heading: "useMemo / useCallback によるパフォーマンス最適化",
      content: "Reactでは、親コンポーネントが再レンダリングされると、子コンポーネントも再レンダリングされます。これを防ぎ、計算コストの高い処理をスキップするために、`useMemo`（値をキャッシュ）や`useCallback`（関数をキャッシュ）を使用します。これはVueの計算プロパティやカスタムHooksの内部でパフォーマンスを担保するために重要です。",
      example: `
// useMemoの例: データが変更されない限り、計算コストの高い処理（totalLikesの計算など）をスキップする。
// const totalLikes = useMemo(() => { ... }, [data]);

// useCallbackの例: 依存配列が変更されない限り、イベントハンドラ関数を再生成しない。
// const memoizedHandleClick = useCallback(() => { /* ... */ }, [dependency]);
      `.trim(),
    },
    {
      heading: "テストの基礎: コンポーネントテスト",
      content: "Reactコンポーネントが期待通りに動作するか検証します。JestやReact Testing Libraryが標準的に使われます。特にRTLは、ユーザーがアプリケーションを操作するようにテストを記述することを推奨します。",
      example: `
// Jest/RTLを使った簡易的なテストコードの概念
/*
import { render, screen } from '@testing-library/react';

test('ボタンが正しくレンダリングされ、クリックできること', () => {
  // ...テストロジック...
  // expect(handleClick).toHaveBeenCalledTimes(1);
});
*/
      `.trim(),
    },
  ],
};

/**
 * 学習項目5（データフェッチとテスト）のデータを表示するコンポーネント。
 */
const Item9: React.FC = () => {
    return (
        <ReferenceItemCard 
            title={itemData9.title}
            summary={itemData9.summary}
            details={itemData9.details}
        >
            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700 border-b pb-1">データフェッチとパフォーマンス サンプル</h4>
            <div className="flex flex-col items-center space-y-4 p-4 border rounded-xl bg-gray-50 shadow-inner">
                <LibraryList />
            </div>
        </ReferenceItemCard>
    );
};

export default Item9;