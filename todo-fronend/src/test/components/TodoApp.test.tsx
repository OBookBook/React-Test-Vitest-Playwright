import { describe } from "vitest";
import TodoApp from "../../components/TodoApp";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const renderWithClient = (component: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

describe(TodoApp, () => {
  test("テスト", () => {
    renderWithClient(<TodoApp />);
    screen.debug();
  });
});
