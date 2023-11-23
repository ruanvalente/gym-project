import type { Metadata } from "next";

import Header from "../layouts/header";

export const metadata: Metadata = {
  title: "Gym Project",
  description: "Student list of students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
