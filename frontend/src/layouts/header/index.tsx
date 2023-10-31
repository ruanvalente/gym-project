import GympointLogoHeader from "../../assets/gympoint-logo-header.svg";

export function Header() {
  return (
    <section className="w-full h-full">
      <header className="flex w-full px-4 py-4 bg-white shadow-md">
        <img
          className="px-4 divide-x"
          src={GympointLogoHeader}
          alt="Gympoint Header"
        />
        <ul className="flex items-center justify-center gap-6 px-4">
          <li className="text-gray-500 hover:cursor-pointer hover:text-red-500">
            Alunos
          </li>
          <li className="text-gray-500 hover:cursor-pointer hover:text-red-500">
            Planos
          </li>
          <li className="text-gray-500 hover:cursor-pointer hover:text-red-500">
            Matrículas
          </li>
          <li className="text-gray-500 hover:cursor-pointer hover:text-red-500">
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
