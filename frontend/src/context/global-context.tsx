import { StudentContextProvider } from "./student-context";

type GlobalContextProps = {
  children: React.ReactNode;
};

export function GlobalContext({ children }: GlobalContextProps) {
  return <StudentContextProvider>{children}</StudentContextProvider>;
}
