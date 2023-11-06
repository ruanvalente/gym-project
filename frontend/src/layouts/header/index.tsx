import { useState } from "react";
import { List, SignOut } from "@phosphor-icons/react";

import GympointLogoHeader from "../../assets/gympoint-logo-header.svg";
import { Button } from "../../shared/components/button";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();

  function handleItemClick(index: number) {
    setSelectedItem(index);
    setIsMenuOpen(false);
  }

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLogout() {
    navigation("/login");
  }

  return (
    <section className="w-full h-full">
      <header className="flex flex-col items-center px-4 py-4 bg-white shadow-md md:flex-row">
        <div className="flex items-center w-full md:w-auto md:flex-1">
          <img
            className="md:mb-0"
            src={GympointLogoHeader}
            alt="Gympoint Header"
          />
          <button
            className="block ml-auto text-gray-500 md:hidden hover:text-red-500"
            onClick={handleMenuClick}
          >
            <List size={32} />
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:gap-6 text-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            className={`text-gray-500 hover:cursor-pointer hover:text-red-500 ${
              selectedItem === 0 ? "font-bold" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            Alunos
          </li>
          <li
            className={`text-gray-500 hover:cursor-pointer hover:text-red-500 ${
              selectedItem === 1 ? "font-bold" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Planos
          </li>
          <li
            className={`text-gray-500 hover:cursor-pointer hover:text-red-500 ${
              selectedItem === 2 ? "font-bold" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Matrículas
          </li>
          <li
            className={`text-gray-500 hover:cursor-pointer hover:text-red-500 ${
              selectedItem === 3 ? "font-bold" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            Pedidos de Auxílio
          </li>
          {isMenuOpen && <br />}
          <Button
            onClick={handleLogout}
            className={`flex gap-1 text-sm text-red-500 ${
              isMenuOpen ? "mt-4 mx-auto" : "ml-6 mt-0"
            }`}
          >
            <SignOut size={18} />
            <p>Sair</p>
          </Button>
        </ul>
      </header>
    </section>
  );
}
