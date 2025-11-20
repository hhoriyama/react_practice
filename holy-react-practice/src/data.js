"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFERENCE_ITEMS = void 0;
exports.REFERENCE_ITEMS = [
    {
        id: 'a1',
        title: 'JSXの基本ルール',
        category: 'React/基礎',
        content: "\nJSX\u3092\u4F7F\u3046\u969B\u306E\u57FA\u672C\u7684\u306A\u30EB\u30FC\u30EB\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002\n\n1. **\u5358\u4E00\u30EB\u30FC\u30C8\u8981\u7D20:**\n   - \u5E38\u306B1\u3064\u306E\u89AA\u8981\u7D20\u3067\u30E9\u30C3\u30D7\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n   - \u30E9\u30C3\u30D4\u30F3\u30B0\u306B\u306F\u3001<div> \u307E\u305F\u306F <React.Fragment> / <> (Fragment\u306E\u77ED\u7E2E\u5F62) \u3092\u4F7F\u3044\u307E\u3059\u3002\n   \n2. **\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9:**\n   - HTML\u5C5E\u6027\u306E class \u306F className \u306B\u3001for \u306F htmlFor \u306B\u5909\u66F4\u3057\u307E\u3059\u3002\n   \n3. **\u30BF\u30B0\u306E\u9589\u9396:**\n   - <img>, <input> \u306A\u3069\u306E\u81EA\u5DF1\u7D42\u4E86\u30BF\u30B0\u306F\u3001\u5FC5\u305A /> \u3067\u9589\u3058\u307E\u3059\u3002\n   \n4. **JavaScript\u306E\u57CB\u3081\u8FBC\u307F:**\n   - JSX\u5185\u3067JavaScript\u306E\u5909\u6570\u3084\u5F0F\u3092\u4F7F\u3046\u5834\u5408\u306F\u3001 {} (\u6CE2\u62EC\u5F27) \u3067\u56F2\u307F\u307E\u3059\u3002\n    ",
        createdAt: '2025-11-20T10:00:00Z',
    },
    {
        id: 'b2',
        title: '主要なHooksの役割',
        category: 'Hooks/チートシート',
        content: "\n| Hook\u540D | \u4E3B\u306A\u5F79\u5272 | \u5B9F\u884C\u30BF\u30A4\u30DF\u30F3\u30B0 |\n|---|---|---|\n| useState | \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u72B6\u614B\u7BA1\u7406 | \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642 |\n| useEffect | \u526F\u4F5C\u7528\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\u3001DOM\u64CD\u4F5C\u3001\u30BF\u30A4\u30DE\u30FC\u306A\u3069\uFF09\u306E\u5B9F\u884C | \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u5F8C |\n| useContext | Context\u304B\u3089\u5024\u3092\u53D6\u5F97 | \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642 |\n| useReducer | \u8907\u96D1\u306A\u72B6\u614B\u30ED\u30B8\u30C3\u30AF\u3092\u7BA1\u7406 | \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\uFF08\u30A2\u30AF\u30B7\u30E7\u30F3\u767A\u706B\u6642\uFF09 |\n| useMemo | \u91CD\u3044\u8A08\u7B97\u306E\u7D50\u679C\u3092\u30E1\u30E2\u5316\uFF08\u30AD\u30E3\u30C3\u30B7\u30E5\uFF09 | \u4F9D\u5B58\u95A2\u4FC2\u304C\u5909\u66F4\u3055\u308C\u305F\u6642 |\n| useCallback | \u95A2\u6570\u81EA\u4F53\u3092\u30E1\u30E2\u5316\uFF08\u30AD\u30E3\u30C3\u30B7\u30E5\uFF09 | \u4F9D\u5B58\u95A2\u4FC2\u304C\u5909\u66F4\u3055\u308C\u305F\u6642 |\n\n**Memo\u3068Callback\u306E\u9055\u3044:**\n- useMemo: \u5024\u3092\u30E1\u30E2\u5316\n- useCallback: \u95A2\u6570\u3092\u30E1\u30E2\u5316\n    ",
        createdAt: '2025-11-18T15:30:00Z',
    },
    {
        id: 'c3',
        title: 'TypeScript 基本の型定義',
        category: 'TypeScript',
        content: "\n\u57FA\u672C\u7684\u306A\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u578B\u306E\u30C1\u30FC\u30C8\u30B7\u30FC\u30C8\u3067\u3059\u3002\n\n1. **string**\n   ```typescript\n   let username: string = \"Taro Yamada\";\n   ```\n\n2. **number**\n   ```typescript\n   let age: number = 30;\n   let pi: number = 3.14; // \u6574\u6570/\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u3069\u3061\u3089\u3082\u53EF\n   ```\n\n3. **boolean**\n   ```typescript\n   let isActive: boolean = true;\n   ```\n\n4. **Array (\u914D\u5217)**\n   ```typescript\n   let names: string[] = [\"Alice\", \"Bob\"];\n   let ages: Array<number> = [25, 30];\n   ```\n\n5. **Tuple (\u30BF\u30D7\u30EB)**\n   \u8981\u7D20\u306E\u578B\u3068\u6570\u304C\u56FA\u5B9A\u3055\u308C\u305F\u914D\u5217\n   ```typescript\n   let user: [number, string] = [1, \"Ken\"];\n   ```\n    ",
        createdAt: '2025-11-15T09:10:00Z',
    },
];
