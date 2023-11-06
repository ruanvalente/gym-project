import { GlobalContext } from "./context/global-context";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <GlobalContext>
      <main className="w-full h-full">
        <AppRoutes />
      </main>
    </GlobalContext>
  );
}
