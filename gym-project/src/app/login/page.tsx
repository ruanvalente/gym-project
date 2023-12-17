"use client";

import Image from "next/image";

import { InputComponent } from "@/app/shared/components/input";
import { Button } from "@/app/shared/components/button";

import "./styles.scss";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const location = usePathname();

  useEffect(() => {
    if (location === "/") {
      document.body.classList.add("gym-point-login");
    }
  }, [location]);
  return (
    <section className="flex items-center justify-center min-h-screen mx-auto gym-sign">
      <div className="container flex flex-col p-6 mx-auto bg-white rounded-lg shadow-lg w-[360px]">
        <Image
          className="mx-auto mt-12 mb-8"
          src="/gympoint-logo.svg"
          alt="GYMPOINT logo"
          width="153"
          height="100"
        />
        <form className="flex flex-col">
          <InputComponent.Root>
            <InputComponent.Label className="gym-sign__label" htmlFor="email">
              seu e-mail
            </InputComponent.Label>
            <InputComponent.Input
              className="gym-sign__input"
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              required
            />
          </InputComponent.Root>

          <InputComponent.Root>
            <InputComponent.Label
              className="gym-sign__label"
              htmlFor="password"
            >
              sua senha
            </InputComponent.Label>
            <InputComponent.Input
              className="gym-sign__input"
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              required
            />
          </InputComponent.Root>
          <Button className="gym-sign__button">Entrar no sistema</Button>
        </form>
      </div>
    </section>
  );
}
