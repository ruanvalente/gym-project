import GympointLogoHeader from "../../assets/gympoint-logo-header.svg";
import { useState } from "react";

export function Header() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <section className="w-full h-full">
      <header className="flex w-full px-4 py-4 bg-white shadow-md">
        <img
          className="md:w-[200px] px-4"
          src={GympointLogoHeader}
          alt="Gympoint Header"
        />
        <ul className="flex items-center justify-center gap-6 px-4">
          <li className="text-gray-500 hover:cursor-pointer hover:text-red-500">
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
        </ul>
        <div className="ml-auto text-center">
          <p className="text-sm font-semibold">Ruan Valente</p>
          <button className="text-sm text-red-500">Sair do sistema</button>
        </div>
      </header>
    </section>
  );
}
