import { GlobalContext } from "./lib/context/global-context";

export default function Home() {
  return (
    <GlobalContext>
      <main className="w-full h-full" />
    </GlobalContext>
  );
}
