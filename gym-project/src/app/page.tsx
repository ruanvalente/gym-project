import { GlobalContext } from "./lib/context/global-context";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <GlobalContext>
      <main className="w-full h-full">
        <LoginPage />
      </main>
    </GlobalContext>
  );
}
