import { Header } from "./header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
