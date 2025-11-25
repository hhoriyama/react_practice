import Home from "./components/Home.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 font-sans">
      <header className="w-full max-w-4xl bg-white shadow-md rounded-xl p-4 mb-6">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          React/TS 備忘録 (リファレンス)
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          コンポーネント統合型の一覧表示
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 flex-grow">
        <Home />
      </main>

      <footer className="w-full max-w-4xl mt-6 text-center text-sm text-gray-500 p-2">
        &copy; 2025 React Static Reference Guide
      </footer>
    </div>
  );
}
