import { FormEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";

import GymPointLogo from "../../assets/gympoint-logo.svg";
import "./styles.scss";

export function LoginPage() {
  const location = useLocation();

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log({ email, password });
  }

  useEffect(() => {
    if (location.pathname === "/login") {
      document.body.classList.add("gym-point-login");
    }
  }, [location]);
  return (
    <section className="flex items-center justify-center min-h-screen mx-auto gym-sign">
      <div className="container flex flex-col p-6 mx-auto bg-white rounded-lg shadow-lg w-[360px]">
        <img
          className="mx-auto mt-12 mb-8"
          src={GymPointLogo}
          alt="GYMPOINT logo"
          width="153"
          height="100"
        />
        <form className="flex flex-col" onSubmit={handleLogin}>
          <label className="gym-sign__label" htmlFor="email">
            seu e-mail
          </label>
          <input
            className="gym-sign__input"
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
            required
          />
          <label className="gym-sign__label" htmlFor="password">
            sua senha
          </label>
          <input
            className="gym-sign__input"
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            required
          />
          <button className="gym-sign__button">Entrar no sistema</button>
        </form>
      </div>
    </section>
  );
}
