import { StudyItem } from './types';

export const REFERENCE_ITEMS: StudyItem[] = [
  {
    id: 'a1',
    title: 'JSXの基本ルール',
    category: 'React/基礎',
    content: `
JSXを使う際の基本的なルールをまとめました。

1. **単一ルート要素:**
   - 常に1つの親要素でラップする必要があります。
   - ラッピングには、<div> または <React.Fragment> / <> (Fragmentの短縮形) を使います。
   
2. **キャメルケース:**
   - HTML属性の class は className に、for は htmlFor に変更します。
   
3. **タグの閉鎖:**
   - <img>, <input> などの自己終了タグは、必ず /> で閉じます。
   
4. **JavaScriptの埋め込み:**
   - JSX内でJavaScriptの変数や式を使う場合は、 {} (波括弧) で囲みます。
    `,
    createdAt: '2025-11-20T10:00:00Z',
  },
  {
    id: 'b2',
    title: '主要なHooksの役割',
    category: 'Hooks/チートシート',
    content: `
| Hook名 | 主な役割 | 実行タイミング |
|---|---|---|
| useState | コンポーネントの状態管理 | レンダリング時 |
| useEffect | 副作用（データ取得、DOM操作、タイマーなど）の実行 | レンダリング後 |
| useContext | Contextから値を取得 | レンダリング時 |
| useReducer | 複雑な状態ロジックを管理 | レンダリング時（アクション発火時） |
| useMemo | 重い計算の結果をメモ化（キャッシュ） | 依存関係が変更された時 |
| useCallback | 関数自体をメモ化（キャッシュ） | 依存関係が変更された時 |

**MemoとCallbackの違い:**
- useMemo: 値をメモ化
- useCallback: 関数をメモ化
    `,
    createdAt: '2025-11-18T15:30:00Z',
  },
  {
    id: 'c3',
    title: 'TypeScript 基本の型定義',
    category: 'TypeScript',
    content: `
基本的なプリミティブ型のチートシートです。

1. **string**
   \`\`\`typescript
   let username: string = "Taro Yamada";
   \`\`\`

2. **number**
   \`\`\`typescript
   let age: number = 30;
   let pi: number = 3.14; // 整数/浮動小数点数どちらも可
   \`\`\`

3. **boolean**
   \`\`\`typescript
   let isActive: boolean = true;
   \`\`\`

4. **Array (配列)**
   \`\`\`typescript
   let names: string[] = ["Alice", "Bob"];
   let ages: Array<number> = [25, 30];
   \`\`\`

5. **Tuple (タプル)**
   要素の型と数が固定された配列
   \`\`\`typescript
   let user: [number, string] = [1, "Ken"];
   \`\`\`
    `,
    createdAt: '2025-11-15T09:10:00Z',
  },
];