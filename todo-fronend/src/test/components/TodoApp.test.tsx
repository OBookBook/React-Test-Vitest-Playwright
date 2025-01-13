import { describe, expect } from "vitest";
import TodoApp from "../../components/TodoApp";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const renderWithClient = (component: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

// TodoAppのテストグループ化
describe("TodoAppのテストケース", () => {
  test("データフェッチ中のローディング状態が出力されること", () => {
    renderWithClient(<TodoApp />); // QueryClientProviderと共にTodoAppコンポーネントをレンダリング
    screen.debug(); // 現在の仮想DOMの状態をコンソールに出力、テスト中のUIの構造や状態を確認
    expect(screen.getByText(/Loading/i)).toBeInTheDocument(); // 期待する動作：正規表現を使用して、`Loading`を含む
    expect(screen.getByText("Loading...")).toBeInTheDocument(); // 期待する動作：画面上に「Loading...」という完全一致のテキストが表示されていることを確認
  });

  test("TOdoアプリが表示されていること", async () => {
    renderWithClient(<TodoApp />);

    expect(await screen.getByText(/Todo APP/i)).toBeInTheDocument();
  });
});
