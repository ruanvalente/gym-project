import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import GymPointLogo from "../../assets/gympoint-logo.svg";
import "./styles.scss";

export function LoginPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      document.body.classList.add("gym-point-login");
    }
  }, [location]);
  return (
    <section className="flex items-center justify-center mx-auto gym-sign">
      <div className="container flex flex-col p-6 mx-auto bg-white rounded-lg shadow-lg w-[360px]">
        <img
          className="mx-auto mt-12 mb-8"
          src={GymPointLogo}
          alt="GYMPOINT logo"
          width="153"
          height="100"
        />
        <form className="flex flex-col">
          <label className="gym-sign__label" htmlFor="email">
            seu e-mail
          </label>
          <input
            className="gym-sign__input"
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
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
          />
          <button className="gym-sign__button">Entrar no sistema</button>
        </form>
      </div>
    </section>
  );
}
